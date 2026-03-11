'use client'

import React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/styles';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="icon"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }} 
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
}
