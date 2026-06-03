'use client';

import { Text } from '@/components/ui';

import { Dot } from 'lucide-react';

const COLUMN_COUNT = 3;
const PROJECTS_COUNT = 4;

const SectionProjects = () => {
  return (
    <section
      id="id-section-projects"
      className="relative flex min-h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted divide-muted grid h-full w-full grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
          <div className="flex flex-row">
            <Dot
              className="text-text"
              strokeWidth="6"
            />
            <Text variant="muted">Projects(03)</Text>
          </div>
          <Text
            size="xxxl_bold"
            className="block leading-[0.8] tracking-tight uppercase"
          >
            <span className="ml-1">Work </span>
            <span>in</span>
            <span className="inline-block whitespace-nowrap">
              Pipeline
              <span className="bg-text ml-[0.05em] inline-block h-[0.14em] w-[0.14em] align-baseline" />
            </span>
          </Text>
        </div>

        {/* Column 2 & 3 & 4 */}
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`section-projects-col-${i}`}
            className="col-span-1 flex flex-col"
          />
        ))}
      </div>

      <div className="border-muted relative h-full w-full items-stretch border-x">
        <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
          {/* Column 1 & 2 & 3 & 4 */}
          {[...Array(PROJECTS_COUNT)].map((_, i) => (
            <div
              key={`section-projects-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 py-40">
          <Text
            size="xxxl_bold"
            className="text-muted text-center leading-[0.8]"
          >
            Architecture mapped
            <span className="ml-[0.5em] inline-block whitespace-nowrap">
              out
              <span className="bg-muted ml-[0.1em] inline-block h-[0.15em] w-[0.15em] align-baseline" />
            </span>
          </Text>
          <Text
            size="xxxl_bold"
            className="text-muted text-center leading-[0.8]"
          >
            Real code is deploying
            <span className="ml-[0.5em] inline-block whitespace-nowrap">
              soon
              <span className="bg-muted ml-[0.1em] inline-block h-[0.15em] w-[0.15em] align-baseline" />
            </span>
          </Text>
        </div>
      </div>
    </section>
  );
};

export { SectionProjects };
