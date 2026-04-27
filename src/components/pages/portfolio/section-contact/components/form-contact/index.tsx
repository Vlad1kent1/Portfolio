'use client';

import { Text } from '@/components/ui';

const COLUMN_COUNT = 2;

const FormContact = () => {
  return (
    <div className="relative col-span-2 flex flex-col">
      <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={i}
            className="flex-1 self-stretch"
          />
        ))}
      </div>

      <div className="items-centerflex-col pointer-events-none relative z-10 flex h-full w-full justify-center">
        <Text size="xxl_bold">Contact</Text>
      </div>
    </div>
  );
};

export { FormContact };
