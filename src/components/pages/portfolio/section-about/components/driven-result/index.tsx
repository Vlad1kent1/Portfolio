'use client';

import { DecorativeBox, Text } from '@/components/ui';

import { Dot } from 'lucide-react';

const COLUMN_COUNT = 2;

const DrivenResult = () => {
  return (
    <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
      {/* Column 1 & 2 */}
      <div className="relative col-span-2 flex flex-col py-5">
        <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`driven-result-col-head-${i}`}
              className="flex-1 self-stretch"
            />
          ))}
        </div>

        <DecorativeBox
          variant="horizontal"
          borderOrientation="horizontal"
          className="col-span-1 flex flex-col p-5"
        >
          <div className="bg-contrast aspect-3/2 w-full" />
        </DecorativeBox>
      </div>

      {/* Column 3 & 4*/}
      <div className="relative col-span-2 flex flex-col py-5">
        <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`driven-result-col-foot-${i}`}
              className="flex-1 self-stretch"
            />
          ))}
        </div>

        <div className="items-right relative z-10 flex min-h-full w-full flex-col justify-end gap-5 py-5">
          <div className="flex flex-row">
            <Dot
              className="text-text"
              strokeWidth="6"
            />
            <Text variant="muted">Driven Result</Text>
          </div>
          <Text
            size="xxl_bold"
            className="block px-3 leading-[0.8] tracking-tight uppercase"
          >
            <span className="text-muted">AESTHETICS MEET ALGORITHMS.</span>{' '}
            <br /> MEASURING THE IMPACT BEHIND THE BUILD.
          </Text>
        </div>
      </div>
    </div>
  );
};

export { DrivenResult };
