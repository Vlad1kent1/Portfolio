'use client';

import { useTransition } from 'react';

import { useLocale } from 'next-intl';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { usePathname, useRouter } from '@/i18n/navigation';

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    }
  };

  return (
    <Select
      onValueChange={switchLocale}
      defaultValue={locale}
      disabled={isPending}
    >
      <SelectTrigger variant="default">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries({ en: 'EN', it: 'IT', uk: 'UK' } as Record<
          string,
          string
        >).map(([key, value]) => (
          <SelectItem
            key={key}
            value={key}
          >
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { LocaleSwitcher };
