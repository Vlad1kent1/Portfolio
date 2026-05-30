'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui';

import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="base"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      className="fixed bottom-5 left-3 z-40"
    >
      <Moon
        size={16}
        className="hidden dark:block"
      />
      <Sun
        size={16}
        className="block dark:hidden"
      />
    </Button>
  );
};

export { ThemeSwitcher };
