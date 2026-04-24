'use client';

import { Text } from '@/components/ui';

const COLUMN_COUNT = 4;

const SectionProjects = () => {
  return (
    <section
      id="id-section-projects"
      className="flex h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted relative h-full w-full border-x">
        <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={i}
              className="flex-1 self-stretch"
            />
          ))}
        </div>

        <div className="items-centerflex-col pointer-events-none relative z-10 flex h-full w-full justify-center">
          <Text size="xxl_bold">Projects</Text>
        </div>
      </div>
    </section>
  );
};

export { SectionProjects };
