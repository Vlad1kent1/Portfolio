'use client';

const LAST_NAME = 'KARABINOVYCH';
const FIRST_NAME = 'VLADYSLAV';
const COLUMN_COUNT = 4;

const Branding = () => {
  return (
    <div className="relative w-full">
      <div className="divide-muted absolute inset-0 flex divide-x overflow-hidden">
        {[...Array(COLUMN_COUNT)].map((_, i) => (
          <div
            key={i}
            className="flex-1 self-stretch"
          />
        ))}
      </div>

      <div className="pointer-events-none relative z-10 flex w-full flex-col py-6">
        <svg
          viewBox="0 0 1000 115"
          className="block h-auto w-full"
        >
          <text
            x="0"
            y="110"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="fill-text font-host-grotesk font-bold uppercase"
            style={{ fontSize: '150px', letterSpacing: '-0.02em' }}
          >
            {LAST_NAME}
          </text>
        </svg>

        <svg
          viewBox="0 0 1150 146"
          className="-mt-4 block h-auto w-full"
        >
          <text
            x="50%"
            y="144"
            textAnchor="middle"
            textLength="1132"
            lengthAdjust="spacingAndGlyphs"
            className="fill-text font-host-grotesk font-bold uppercase"
            style={{ fontSize: '180px' }}
          >
            {FIRST_NAME}
          </text>
        </svg>
      </div>
    </div>
  );
};

export { Branding };
