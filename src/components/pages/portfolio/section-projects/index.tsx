'use client';

import { useTranslations } from 'next-intl';

import { RevealBox, Text } from '@/components/ui';

import { Dot } from 'lucide-react';

const COLUMN_COUNT = 4;

const SectionProjects = () => {
  const t = useTranslations('components.pages.portfolio.section-projects');

  return (
    <section
      id="id-section-projects"
      className="relative flex min-h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted relative h-full w-full items-stretch border-x">
        <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
          {/* Column 1 & 2 & 3 & 4 */}
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`section-projects-col-${i}`}
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
              <span className="ml-1">{t('intro_part_1')}</span>
              <span>{t('intro_part_2')}</span>
              <span className="block whitespace-nowrap">
                {t('intro_part_3')}
              </span>
            </Text>
          </RevealBox>
        </div>
      </div>

      <div className="border-muted relative w-full flex-1 items-stretch border-x">
        <div className="divide-muted absolute inset-0 grid grid-cols-4 divide-x overflow-hidden">
          {/* Column 1 & 2 & 3 & 4 */}
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`section-projects-col-${i}`}
              className="col-span-1 flex flex-col"
            />
          ))}
        </div>

        <RevealBox
          direction="up"
          className="relative z-10 w-full py-40"
          innerClassName="flex w-full flex-col items-center justify-center gap-4 "
        >
          <Text
            size="xxxl_bold"
            className="text-muted text-center leading-[0.8]"
          >
            {t('headline_1')}
          </Text>
          <Text
            size="xxxl_bold"
            className="text-muted text-center leading-[0.8]"
          >
            {t('headline_2')}
          </Text>
        </RevealBox>
      </div>
    </section>
  );
};

export { SectionProjects };
