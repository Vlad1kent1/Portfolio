'use client';

import { useTranslations } from 'next-intl';

import {
  AnimatedTextScrollReveal,
  DecorativeBox,
  RevealBox,
  Text,
} from '@/components/ui';

const COLUMN_COUNT = 2;

const MainContent = () => {
  const t = useTranslations(
    'components.pages.portfolio.section-about.components.main-content',
  );

  return (
    <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
      {/* Column 1 & 2 */}
      <div className="relative col-span-2 flex flex-col py-5">
        <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`main-content-col-${i}`}
              className="flex-1 self-stretch"
            />
          ))}
        </div>

        <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center">
          <AnimatedTextScrollReveal
            offset={['start 80%', 'end 50%']}
            size="xxl_bold"
            className="px-3 leading-[0.8] uppercase"
          >
            {t('intro')}
          </AnimatedTextScrollReveal>
        </div>
      </div>

      {/* Column 3 */}
      <div className="col-span-1 flex flex-col" />

      {/* Column 4 */}
      <div className="col-span-1 flex h-full flex-col items-center justify-center gap-3">
        <DecorativeBox
          variant="horizontal"
          borderOrientation="horizontal"
          className="col-span-1 flex flex-col p-5"
        >
          <RevealBox
            direction="center"
            className="bg-contrast aspect-3/4 w-full"
          />
        </DecorativeBox>

        <RevealBox direction="right">
          <Text
            variant="default"
            size="xs_normal"
            className="p-5 text-right uppercase"
          >
            {t('supporting_text')}
          </Text>
        </RevealBox>
      </div>
    </div>
  );
};

export { MainContent };
