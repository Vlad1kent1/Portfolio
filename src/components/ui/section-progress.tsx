'use client';

import { useEffect, useState } from 'react';

import { m, useScroll } from 'motion/react';

interface SectionProgressProps {
  targetId: string;
}

export const SectionProgress = ({ targetId }: SectionProgressProps) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      if (window.getComputedStyle(el).position === 'static') {
        el.style.position = 'relative';
      }
      setTargetElement(el);
    }
  }, [targetId]);

  const { scrollYProgress } = useScroll({
    target: targetElement ? { current: targetElement } : undefined,
    offset: ['start end', 'end end'],
    container:
      typeof window !== 'undefined'
        ? { current: document.documentElement }
        : undefined,
  });

  return (
    <m.div
      className="bg-text absolute right-0 bottom-3 left-0 z-0 h-0.5 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
