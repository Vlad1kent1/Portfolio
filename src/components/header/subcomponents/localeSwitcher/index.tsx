'use client';

import { usePathname, useRouter } from "@/i18n/navigation"; 
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  }

  return (
    <div>
      <button onClick={() => switchLocale('en')} disabled={locale === 'en'}>EN</button>
      <button onClick={() => switchLocale('it')} disabled={locale === 'it'}>IT</button>
      <button onClick={() => switchLocale('uk')} disabled={locale === 'uk'}>uk</button>
    </div>
  );
}