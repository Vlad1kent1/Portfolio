'use client';
import { Text } from '@/components/ui';

import { Dot } from 'lucide-react';

import { Timeline } from './components';

const COLUMN_COUNT = 3;
const EXPERIENCE_COUNT = 4;

const SectionExperience = () => {
  return (
    <section
      id="id-section-experience"
      className="bg-background-inverse relative w-full flex-col px-5"
    >
      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
          <div className="flex flex-row">
            <Dot
              className="text-text-inverse"
              strokeWidth="6"
            />
            <Text variant="muted">Experience(04)</Text>
          </div>
          <Text
            size="xxxl_bold"
            className="block leading-[0.8] tracking-tight uppercase"
          >
            <span className="text-text-inverse inline-block whitespace-nowrap">
              Experience
              <span className="bg-text-inverse ml-[0.05em] inline-block h-[0.14em] w-[0.14em] align-baseline" />
            </span>
          </Text>
        </div>

        {/* Column 2 & 3 & 4 */}
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`section-contact-col-${i}`}
            className="col-span-1 flex flex-col"
          />
        ))}
      </div>

      <div className="border-muted relative h-full w-full items-stretch divide-x border-x">
        <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
          {/* Column 1 & 2 & 3 & 4 */}
          {[...Array(EXPERIENCE_COUNT)].map((_, i) => (
            <div
              key={`section-experience-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center py-20">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export { SectionExperience };
