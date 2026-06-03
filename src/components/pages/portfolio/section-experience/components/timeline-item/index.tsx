'use client';

import Image from 'next/image';

import { DecorativeBox, Text } from '@/components/ui';

import { cn } from '@/lib/utils';

export interface TimelineData {
  id: string;
  company: string;
  role: string;
  period: string;
  duties: string[];
  logoSrc: string;
}

interface TimelineItemProps {
  data: TimelineData;
  index: number;
  lastIconRef?: React.RefObject<HTMLDivElement | null>;
}

export const TimelineItem = ({
  data,
  index,
  lastIconRef,
}: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-10">
      <div
        className={cn(
          'flex w-full flex-col',
          isEven ? 'order-1 items-end' : 'order-3 items-start',
        )}
      >
        <DecorativeBox
          variant="horizontal"
          borderOrientation="all"
          className="bg-background-inverse text-text-inverse flex w-full max-w-xl flex-col items-start justify-start gap-3 px-5 py-6"
        >
          <Text
            variant="inverse"
            size="base_bold"
          >
            {data.role}
          </Text>

          <ul className="text-text-muted max-w-2xl list-none space-y-4 text-sm md:text-base">
            {data.duties.map((duty, i) => (
              <li
                key={i}
                className={cn(
                  'relative pl-5',
                  "before:absolute before:top-[0.4em] before:left-[0.2em] before:content-['']",
                  'before:bg-text-inverse before:h-1.5 before:w-1.5',
                  'before:transition-colors before:duration-200',
                )}
              >
                <Text
                  variant="inverse"
                  size="base_normal"
                  className="leading-[1.15em]"
                >
                  {duty}
                </Text>
              </li>
            ))}
          </ul>
        </DecorativeBox>
      </div>

      <div className="order-2 flex items-start justify-center pt-5">
        <div
          ref={lastIconRef}
          className="bg-background relative z-10 flex items-center justify-center"
        >
          <Image
            src={data.logoSrc}
            alt={`${data.company} Logo`}
            width={60}
            height={60}
            className="aspect-square object-contain"
            priority={index < 2}
          />
        </div>
      </div>

      <div
        className={cn(
          'flex w-full flex-col justify-center pt-5',
          isEven ? 'order-3 pl-5' : 'order-1 pr-5 text-right',
        )}
      >
        <div
          className={cn(
            'flex h-15 flex-col justify-center',
            isEven ? 'items-start' : 'items-end',
          )}
        >
          <Text
            variant="inverse"
            size="base_bold"
          >
            {data.company}
          </Text>
          <Text
            variant="muted"
            size="sm_medium"
          >
            {data.period}
          </Text>
        </div>
      </div>
    </div>
  );
};
