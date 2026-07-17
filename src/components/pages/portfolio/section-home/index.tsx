'use client';

import { Text } from '@/components/ui';

import { Dot } from 'lucide-react';

import { InfoBlock } from './components';

const COLUMN_COUNT = 3;
const INFO_COUNT = 4;

const SectionHome = () => {
  return (
    <section id="id-section-home">
      <div className="bg-contrast relative flex h-[calc(100vh-68px)] w-full flex-col px-5">
        <div className="border-muted divide-muted grid h-full w-full grid-cols-4 items-stretch divide-x border-x">
          {/* Column 1 */}
          <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
            <div className="flex flex-row">
              <Dot
                className="text-text"
                strokeWidth="6"
              />
              <Text variant="muted">Home(01)</Text>
            </div>
          </div>

          {/* Column 2 & 3 & 4 */}
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`section-home-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div>
      </div>

      <div className="bg-backgound relative w-full flex-col px-5">
        <div className="border-muted relative h-full w-full items-stretch border-x">
          <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
            {/* Column 1 & 2 & 3 & 4 */}
            {[...Array(INFO_COUNT)].map((_, i) => (
              <div
                key={`section-experience-col-${i}`}
                className="col-span-1 flex flex-col"
              />
            ))}
          </div>

          <InfoBlock />
        </div>
      </div>
    </section>
  );
};

export { SectionHome };
