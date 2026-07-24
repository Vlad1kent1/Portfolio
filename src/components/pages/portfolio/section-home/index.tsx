'use client';

import { Text } from '@/components/ui';

import { Dot } from 'lucide-react';

import { Branding, InfoBlock } from './components';

const COLUMN_COUNT = 3;

const SectionHome = () => {
  return (
    <section id="id-section-home">
      <div className="bg-contrast relative flex h-[calc(100vh-68px)] w-full flex-col px-5">
        {/* <div className="border-muted divide-muted grid h-full w-full grid-cols-4 items-stretch divide-x border-x">
          <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
            <div className="flex flex-row">
              <Dot
                className="text-text"
                strokeWidth="6"
              />
              <Text variant="muted">Home(01)</Text>
            </div>
          </div>

          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`section-home-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div> */}
        <Branding />
      </div>

      <InfoBlock />
    </section>
  );
};

export { SectionHome };
