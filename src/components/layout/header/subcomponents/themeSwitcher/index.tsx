'use client'

import React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="default"
      size="icon"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }} 
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
}
