'use client';

import { useEffect, useState } from 'react';

import { m, useScroll } from 'motion/react';

interface SectionProgressProps {
  targetId: string;
}

export const SectionProgress = ({ targetId }: SectionProgressProps) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTargetElement(document.getElementById(targetId));
  }, [targetId]);

  const { scrollYProgress } = useScroll({
    target: targetElement ? { current: targetElement } : undefined,
    offset: ['start end', 'end end'],
  });

  return (
    <m.div
      className="bg-text absolute right-0 bottom-3 left-0 z-0 h-0.5 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
