'use client'

import React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="base"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }} 
      className="fixed bottom-5 left-5 z-40"
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
}
