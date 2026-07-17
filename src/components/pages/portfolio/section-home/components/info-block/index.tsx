'use client';

import { DecorativeBox, Text } from '@/components/ui';

const COLUMN_COUNT = 4;
const Info = [
  { title: 'Location', body: "L'Aquila, IT" },
  { title: 'Field', body: 'Development' },
  { title: 'Core Stack', body: 'React, Node.js, Postgresql' },
  { title: 'Approach', body: 'Mathematical Precision' },
];

const InfoBlock = () => {
  return (
    <div className="bg-backgound relative w-full flex-col px-5">
      <div className="border-muted relative h-full w-full items-stretch border-x">
        <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
          {/* Column 1 & 2 & 3 & 4 */}
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`info-block-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center pt-20 pb-10">
          <DecorativeBox
            variant="horizontal"
            borderOrientation="horizontal"
            className="divide-muted grid w-full grid-cols-4 items-stretch divide-x"
          >
            {Info.slice(0, 4).map((item) => (
              <div
                key={`info-block-${item.title}`}
                className="flex flex-col gap-2 p-5"
              >
                <Text variant="muted">{item.title.toUpperCase()}</Text>
                <Text>{item.body.toUpperCase()}</Text>
              </div>
            ))}
          </DecorativeBox>
        </div>
      </div>
    </div>
  );
};

export { InfoBlock };
