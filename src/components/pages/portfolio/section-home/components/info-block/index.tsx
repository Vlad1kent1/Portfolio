'use client';

import { DecorativeBox, Text } from '@/components/ui';

const Info = [
  { title: 'Location', body: "L'Aquila, IT" },
  { title: 'Field', body: 'Development' },
  { title: 'Core Stack', body: 'React, Node.js, Postgresql' },
  { title: 'Approach', body: 'Mathematical Precision' },
];

const InfoBlock = () => {
  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center pt-20 pb-10">
      <DecorativeBox
        variant="horizontal"
        borderOrientation="horizontal"
        className="divide-muted grid w-full grid-cols-4 items-stretch divide-x"
      >
        {Info.slice(0, 4).map((item) => (
          <div className="flex flex-col gap-2 p-5">
            <Text variant="muted">{item.title.toUpperCase()}</Text>
            <Text>{item.body.toUpperCase()}</Text>
          </div>
        ))}
      </DecorativeBox>
    </div>
  );
};

export { InfoBlock };
