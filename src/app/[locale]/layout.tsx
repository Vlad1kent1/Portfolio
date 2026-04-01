import {metadata as sharedMetadata} from "./metadata";
import {hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {routing} from "../../i18n/routing";
import { notFound } from "next/navigation";

import { ThemeProvider } from 'next-themes'
import "../globals.css";
import { ibmPlexMono } from "@/lib/fonts";
import { Loading, Header, Footer, ThemeSwitcher} from "@/components/layout";
import { Toaster } from '@/components/ui'

export const metadata = sharedMetadata;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={ibmPlexMono.variable}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
              <Loading/>
              <div className="relative flex flex-col min-h-screen bg-background">
                <Header />
                {children}
                <Footer />
                <ThemeSwitcher />
              </div>
              <Toaster/>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
