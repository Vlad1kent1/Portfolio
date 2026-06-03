'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Text } from '@/components/ui';
import { m } from 'motion/react';

import { RefreshCcwDot } from 'lucide-react';

import { TimelineItem, TimelineTrack } from '..';

interface ITimelineData {
  id: string;
  company: string;
  role: string;
  period: string;
  duties: string[];
}

export const Timeline = () => {
  const t = useTranslations();

  const trackStartRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);

  const [lineHeight, setLineHeight] = useState<number>(0);

  const experienceData: ITimelineData[] =
    t.raw('section-experience.experience') || [];

  const calculateHeight = useCallback(() => {
    if (!trackStartRef.current || !lastIconRef.current) return;

    const startRect = trackStartRef.current.getBoundingClientRect();
    const endRect = lastIconRef.current.getBoundingClientRect();

    const exactHeight = endRect.top - startRect.top + endRect.height / 2;

    setLineHeight(Math.max(0, exactHeight));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => calculateHeight(), 100);

    const resizeObserver = new ResizeObserver(() => calculateHeight());

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, [calculateHeight]);

  return (
    <div className="relative w-full">
      <TimelineTrack
        trackStartRef={trackStartRef}
        dynamicHeight={lineHeight}
      />

      <div className="relative z-10 mx-auto space-y-40 px-10">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-10">
          <div className="w-full" />

          <div className="bg-background relative z-20 flex aspect-square h-15 w-15 items-center justify-center">
            <m.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="inline-block"
            >
              <RefreshCcwDot className="text-text size-8" />
            </m.div>
          </div>

          <div className="flex h-15 flex-col justify-center">
            <Text
              variant="inverse"
              size="base_bold"
            >
              To be continued...
            </Text>
          </div>
        </div>

        {experienceData.map((data: ITimelineData, index: number) => {
          const isLast = index === experienceData.length - 1;

          return (
            <TimelineItem
              key={data.id}
              index={index}
              data={{ ...data, logoSrc: `/logos/${data.id}.jpg` }}
              lastIconRef={isLast ? lastIconRef : undefined}
            />
          );
        })}
      </div>
    </div>
  );
};
