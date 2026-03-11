import {useTranslations} from 'next-intl';
import LocaleSwitcher from "@/components/header/subcomponents/localeSwitcher";
import ThemeSwitcher from '@/components/header/subcomponents/themeSwitcher';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--background)">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-(--text)">
        {t('title')}
      </h1>
      <LocaleSwitcher />

      <ThemeSwitcher />
    </div>
  );
}
