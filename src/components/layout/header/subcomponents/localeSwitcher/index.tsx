'use client';

import { usePathname, useRouter } from "@/i18n/navigation"; 
import { useLocale } from "next-intl";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";

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
      <SelectTrigger variant="default">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries({"en": "EN", "it": "IT", "uk": "UK"} as Record<string, string>).map(([key, value]) => (        
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}