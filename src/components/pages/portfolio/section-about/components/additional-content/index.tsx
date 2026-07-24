'use client';

import { AnimatedTextScrollReveal } from '@/components/ui';

const COLUMN_COUNT = 2;

const AdditionalContent = () => {
  return (
    <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
      {/* Column 1 & 2 */}
      <div className="relative col-span-2 flex flex-col py-5">
        <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
          {[...Array(COLUMN_COUNT)].map((_, i) => (
            <div
              key={`additional-content-col-head-${i}`}
              className="flex-1 self-stretch"
            />
          ))}
        </div>

        <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center pb-20">
          <AnimatedTextScrollReveal
            size="xxl_bold"
            className="px-3 leading-[0.8] uppercase"
            offset={['start 55%', 'end 50%']}
          >
            WRITING CLEAN CODE SO EVERYTHING FEELS ALIGNED AND INTENTIONAL. MY
            GOAL IS ALWAYS THE SAME: TO ARCHITECT SOFTWARE THAT SOLVES REAL
            PROBLEMS, WORKS EXCEPTIONALLY WELL, AND LASTS.
          </AnimatedTextScrollReveal>
        </div>
      </div>

      {/* Column 3 & 4 */}
      {[...Array(COLUMN_COUNT)].map((_, i) => (
        <div
          key={`additional-content-col-foot-${i}`}
          className="col-span-1 flex flex-col"
        />
      ))}
    </div>
  );
};

export { AdditionalContent };
