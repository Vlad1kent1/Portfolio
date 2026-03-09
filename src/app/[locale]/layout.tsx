import {metadata as sharedMetadata} from "./metadata";
import {hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {routing} from "../../i18n/routing";
import { notFound } from "next/navigation";
import "./globals.css";

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
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
