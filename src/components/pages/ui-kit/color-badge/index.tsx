'use client';

import { useEffect, useState } from 'react';

import { Text } from '@/components/ui';
import { oklch, parse } from 'culori';

const ColorBadge = ({
  variable,
  label,
}: {
  variable: string;
  label: string;
}) => {
  const [colorValue, setColorValue] = useState<string>('');

  useEffect(() => {
    const updateColor = () => {
      const el = document.documentElement;
      const computedColor = getComputedStyle(el)
        .getPropertyValue(variable)
        .trim();

      const parsed = parse(computedColor);
      if (parsed) {
        const oklchColor = oklch(parsed);
        const l = Number(oklchColor.l.toFixed(2));
        const c = Number(oklchColor.c.toFixed(2));
        const h =
          c < 0.01 || oklchColor.h === undefined
            ? 0
            : Number(oklchColor.h.toFixed(2));
        setColorValue(`oklch(${l} ${c} ${h})`);
      }
    };

    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, [variable]);

  return (
    <div className="flex flex-col gap-2">
      <div
        style={{ backgroundColor: `var(${variable})` }}
        className="border-muted aspect-square w-14 border"
      />
      <div className="flex flex-col">
        <Text size="sm_medium">{label}</Text>
        <Text
          size="xs_normal"
          className="font-mono opacity-50"
        >
          {colorValue}
        </Text>
      </div>
    </div>
  );
};

export { ColorBadge };
