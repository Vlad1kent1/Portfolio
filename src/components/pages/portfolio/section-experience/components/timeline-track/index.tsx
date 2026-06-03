'use client';

import { RefObject } from 'react';

import { m, useScroll } from 'motion/react';

interface TimelineTrackProps {
  trackStartRef: RefObject<HTMLDivElement | null>;
  dynamicHeight: number;
}

export const TimelineTrack = ({
  trackStartRef,
  dynamicHeight,
}: TimelineTrackProps) => {
  const { scrollYProgress } = useScroll({
    target: trackStartRef,
    offset: ['start center', 'end center'],
  });

  return (
    <div
      ref={trackStartRef}
      className="bg-muted absolute top-11 left-1/2 w-1 -translate-x-1/2 transition-all duration-300"
      style={{ height: dynamicHeight > 0 ? `${dynamicHeight}px` : '100%' }}
    >
      <m.div
        className="bg-text-inverse absolute top-0 right-0 bottom-0 left-0 origin-top"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
};
