import {metadata as sharedMetadata} from "./metadata";
import {hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {routing} from "../../i18n/routing";
import { notFound } from "next/navigation";

import "../globals.css";
import { ibmPlexMono } from "@/lib/fonts";
import { ThemeProvider } from 'next-themes'
import { LazyMotion, domAnimation } from 'motion/react'
import { Intro, Header, Footer, ThemeSwitcher} from "@/components/layout";
import { Toaster } from '@/components/ui'
import { Suspense } from "react";

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
          <Suspense fallback={        
            <div
              className="flex items-center justify-start overflow-hidden divide-x divide-muted"
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 self-stretch bg-background-inverse"
                />
              ))}
              </div>
            }>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <LazyMotion features={domAnimation}>
                <Intro />
                <div className="relative flex flex-col min-h-screen bg-background">
                  <Header />
                  {children}
                  <Footer />
                  <ThemeSwitcher />
                </div>
                <Toaster/>
              </LazyMotion>
            </NextIntlClientProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
