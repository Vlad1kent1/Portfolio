'use client';

import { usePathname, useRouter } from "@/i18n/navigation"; 
import { useLocale } from "next-intl";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";

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
    <Select onValueChange={switchLocale} defaultValue={locale}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="it">IT</SelectItem>
          <SelectItem value="uk">UK</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}