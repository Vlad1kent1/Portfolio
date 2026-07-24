'use client';

import { AnimatedTextScrollReveal, DecorativeBox, Text } from '@/components/ui';

const COLUMN_COUNT = 2;

const MainContent = () => {
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
            offset = {['start 80%', 'end 50%']}
            size="xxl_bold"
            className="px-3 leading-[0.8] uppercase"
          >
            I’M A FULL-STACK DEVELOPER WITH A BACKGROUND IN APPLIED MATHEMATICS,
            CURRENTLY BASED IN ITALY. I WORK WITH TYPESCRIPT AND NEXT.JS TO
            BUILD WEB APPLICATIONS THAT ARE SCALABLE AND HIGHLY PERFORMANT. I
            ENJOY TAKING COMPLEX LOGICAL ARCHITECTURES AND TRANSLATING THEM INTO
            CLEAN, MAINTAINABLE, AND STRUCTURED CODE.
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
          <div className="bg-contrast aspect-3/4 w-full" />
        </DecorativeBox>

        <Text
          variant="default"
          size="xs_normal"
          className="p-5 text-right uppercase"
        >
          I ENGINEER SYSTEMS THAT ARE AS ROBUST UNDER THE HOOD AS THEY ARE
          INTUITIVE ON THE SURFACE. PRECISE, SCALABLE, AND BUILT TO PERFORM.
        </Text>
      </div>
    </div>
  );
};

export { MainContent };
