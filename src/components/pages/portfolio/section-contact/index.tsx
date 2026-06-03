'use client';

import { DecorativeBox, Text } from '@/components/ui';

import { Dot } from 'lucide-react';

import { FormContact } from './components';

const COLUMN_COUNT = 3;

const SectionContact = () => {
  return (
    <section
      id="id-section-contact"
      className="relative flex min-h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-1 flex-col gap-5 pt-5">
          <div className="flex flex-row">
            <Dot
              className="text-text"
              strokeWidth="6"
            />
            <Text variant="muted">Contact(05)</Text>
          </div>
          <Text
            size="xxxl_bold"
            className="block leading-[0.8] tracking-tight uppercase"
          >
            <span className="text-muted">Please </span>
            <span>ignore </span>
            <span className="inline-block whitespace-nowrap">
              this
              <span className="bg-text ml-[0.05em] inline-block h-[0.14em] w-[0.14em] align-baseline" />
            </span>
          </Text>
        </div>

        {/* Column 2 & 3 & 4 */}
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={`section-contact-col-${i}`}
            className="col-span-1 flex flex-col"
          />
        ))}
      </div>

      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-col py-20">
          <DecorativeBox
            variant="horizontal"
            borderOrientation="horizontal"
            className="col-span-1 flex flex-col gap-3 px-5 py-6"
          >
            <div className="flex w-full flex-row items-start justify-start gap-3">
              <span className="bg-contrast h-10 w-10 rounded-full" />
              <div className="flex flex-col items-start justify-center">
                <Text>Karabinovych Vladyslav</Text>
                <Text variant="muted">Full-stack developer</Text>
              </div>
            </div>
            <Text
              size="base_bold"
              className="leading-[1.15em] tracking-tight"
            >
              I’m always open to collaborations and creative challenges.
            </Text>
          </DecorativeBox>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col" />

        {/* Column 3 & 4 */}
        <FormContact />
      </div>
    </section>
  );
};

export { SectionContact };
