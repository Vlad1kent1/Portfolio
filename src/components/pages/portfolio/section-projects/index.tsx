'use client';

import { Text } from '@/components/ui';

import { Dot } from 'lucide-react';

const COLUMN_COUNT = 3;

const SectionProjects = () => {
  return (
    <section
      id="id-section-projects"
      className="relative flex h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted divide-muted grid h-full w-full grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
          <div className="flex flex-row">
            <Dot
              className="text-text"
              strokeWidth="6"
            />
            <Text variant="muted">Projects</Text>
          </div>
        </div>

        {/* Column 2 & 3 & 4 */}
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`section-projects-col-${i}`}
            className="col-span-1 flex flex-col"
          />
        ))}
      </div>
    </section>
  );
};

export { SectionProjects };
