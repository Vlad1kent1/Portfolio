import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { notFound } from 'next/navigation';

import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';

import { Footer, Header, Intro, ThemeSwitcher } from '@/components/layout';
import { Toaster } from '@/components/ui';
import { hostGrotesk, ibmPlexMono } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { routing } from '../../i18n/routing';
import '../globals.css';
import { metadata as sharedMetadata } from './metadata';

export const metadata = sharedMetadata;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(ibmPlexMono.variable, hostGrotesk.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <MotionConfig reducedMotion="user">
              <LazyMotion features={domAnimation}>
                <Intro />
                <div className="bg-background relative flex min-h-screen flex-col">
                  <Header />
                  {children}
                  <Footer />
                  <ThemeSwitcher />
                </div>
                <Toaster />
              </LazyMotion>
            </MotionConfig>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
