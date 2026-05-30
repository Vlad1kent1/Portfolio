'use client';

import { Text } from '@/components/ui';

import { Dot } from 'lucide-react';

const COLUMN_COUNT = 3;

const SectionExperience = () => {
  return (
    <section
      id="id-section-experience"
      className="bg-background-inverse relative flex h-[200vh] w-full flex-col px-5"
    >
      <div className="border-muted divide-muted grid h-full w-full grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
          <div className="flex flex-row">
            <Dot
              className="text-text-inverse"
              strokeWidth="6"
            />
            <Text variant="muted">Experience</Text>
          </div>
        </div>

        {/* Column 2 & 3 & 4 */}
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`section-experience-col-${i}`}
            className="col-span-1 flex flex-col"
          />
        ))}
      </div>
    </section>
  );
};

export { SectionExperience };
