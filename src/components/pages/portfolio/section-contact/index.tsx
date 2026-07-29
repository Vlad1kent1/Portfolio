'use client';

import { useTranslations } from 'next-intl';

import { DecorativeBox, RevealBox, Text } from '@/components/ui';

import { Dot } from 'lucide-react';

import { FormContact } from './components';

const COLUMN_COUNT = 4;

const SectionContact = () => {
  const t = useTranslations('components.pages.portfolio.section-contact');

  return (
    <section
      id="id-section-contact"
      className="relative flex min-h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted relative h-full w-full items-stretch border-x">
        <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
          {/* Column 1 & 2 & 3 & 4 */}
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`section-experience-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div>

        {/* Column 1 */}
        <div className="relative z-10 flex w-full flex-col gap-5 pt-5">
          <div className="flex flex-row">
            <Dot
              className="text-text"
              strokeWidth="6"
            />
            <Text variant="muted">{t('title')}</Text>
          </div>
          <RevealBox direction="left">
            <Text
              size="xxxl_bold"
              className="block leading-[0.8] tracking-tight uppercase"
            >
              <span className="text-muted">{t('intro_part_1')}</span>
              <span>{t('intro_part_2')}</span>
              <br />
              <span className="inline-block whitespace-nowrap">
                {t('intro_part_3')}
              </span>
            </Text>
          </RevealBox>
        </div>
      </div>

      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-col py-20">
          <DecorativeBox
            variant="horizontal"
            borderOrientation="horizontal"
            className="col-span-1 px-5 py-6"
          >
            <RevealBox
              direction="left"
              innerClassName="flex flex-col gap-3"
            >
              <div className="flex w-full flex-row items-start justify-start gap-3">
                <span className="bg-contrast h-10 w-10 rounded-full" />
                <div className="flex flex-col items-start justify-center">
                  <Text>{t('name')}</Text>
                  <Text variant="muted">{t('role')}</Text>
                </div>
              </div>
              <Text
                size="base_bold"
                className="leading-[1.15em] tracking-tight"
              >
                {t('invitation')}
              </Text>
            </RevealBox>
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
