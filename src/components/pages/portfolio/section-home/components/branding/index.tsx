'use client';

import { useUIStore } from '@/hooks/use-ui-store';
import { m, useInView } from 'motion/react';

const LAST_NAME = 'KARABINOVYCH';
const FIRST_NAME = 'VLADYSLAV';
const COLUMN_COUNT = 4;

const Branding = () => {
  const { isIntroDone } = useUIStore();

  return (
    <div className="border-muted relative flex h-full w-full border-x">
      <div className="divide-muted absolute inset-0 flex overflow-hidden divide-x">
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`branding-col-${i}`}
            className="flex-1 self-stretch"
          />
        ))}
      </div>

      <div 
        className="pointer-events-none relative z-10 mt-auto flex w-full flex-col overflow-hidden py-6"
      >
        <m.svg
          viewBox="0 0 1000 115"
          className="block h-auto w-full"
          initial={{ x: "-20%", opacity: 0 }}
          animate={isIntroDone ? { x: 0, opacity: 1 } : { x: "-20%", opacity: 0 }}
          transition={{ 
            duration: 1.4, 
            delay: 0.1, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <text
            x="0"
            y="110"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="fill-white font-host-grotesk font-bold uppercase"
            style={{ fontSize: '150px', letterSpacing: '-0.02em' }}
          >
            {LAST_NAME}
          </text>
        </m.svg>

        <m.svg
          viewBox="0 0 1150 146"
          className="-mt-4 block h-auto w-full"
          initial={{ x: "20%", opacity: 0 }}
          animate={isIntroDone ? { x: 0, opacity: 1 } : { x: "20%", opacity: 0 }}
          transition={{ 
            duration: 1.4, 
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <text
            x="50%"
            y="144"
            textAnchor="middle"
            textLength="1132"
            lengthAdjust="spacingAndGlyphs"
            className="fill-white font-host-grotesk font-bold uppercase"
            style={{ fontSize: '180px' }}
          >
            {FIRST_NAME}
          </text>
        </m.svg>
      </div>
    </div>
  );
};

export { Branding };