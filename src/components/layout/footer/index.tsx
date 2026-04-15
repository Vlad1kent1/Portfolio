'use client';

import { ArrowRight } from 'lucide-react';

import { AnimatedButton, DecorativeBox, Text } from '@/components/ui';

const LAST_NAME = 'KARABINOVYCH';
const FIRST_NAME = 'VLADYSLAV';
const COLUMN_COUNT = 4;

const footerNav = [
  { name: 'TAB 1', href: '#' },
  { name: 'TAB 2', href: '#' },
  { name: 'TAB 3', href: '#' },
  { name: 'TAB 4', href: '#' },
  { name: 'TAB 5', href: '#' },
];

const socialLinks = [
  { name: 'TWITTER(X)', href: '#' },
  { name: 'INSTAGRAM', href: '#' },
  { name: 'LINKEDIN', href: '#' },
  { name: 'DRIBBBLE', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-footer border-muted w-full border-t px-5">
      <div className="border-muted w-full border-x">
        <DecorativeBox
          variant="horizontal"
          borderOrientation="bottom"
          className="divide-muted relative grid w-full grid-cols-4 items-stretch divide-x"
        >
          <div className="col-span-1 flex flex-col gap-6 p-8">
            <div className="flex items-center gap-3">
              <Text
                size="base_bold"
                className="flex shrink-0 flex-col items-start leading-tight uppercase underline-offset-1"
              >
                <span>Karabinovych</span>
                <span>Vladyslav</span>
              </Text>
            </div>
            <Text
              size="sm_medium"
              className="/70 max-w-[30ch]"
            >
              CRAFTING THOUGHTFUL DIGITAL EXPERIENCES BUILT ON CLARITY, PURPOSE,
              AND PRECISION.
            </Text>
          </div>

          {/* Navigation */}
          <div className="relative col-span-1">
            <nav className="divide-muted flex h-full w-full flex-col divide-y">
              {footerNav.map((link) => (
                <AnimatedButton
                  key={link.name}
                  variant="ghost"
                  className="bg-transparent hover:bg-transparent"
                >
                  <AnimatedButton.Text>{link.name}</AnimatedButton.Text>
                  <AnimatedButton.Icon>
                    <ArrowRight size={16} />
                  </AnimatedButton.Icon>
                </AnimatedButton>
              ))}
            </nav>
          </div>

          <div className="col-span-1 flex flex-col gap-4 p-8">
            <Text
              size="sm_medium"
              className="/50 mb-2 tracking-widest uppercase"
            >
              Follow on
            </Text>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:/80 transition-colors"
              >
                <Text
                  size="sm_medium"
                  className="tracking-tight uppercase"
                >
                  {link.name}
                </Text>
              </a>
            ))}
          </div>

          <div className="col-span-1 p-8">
            <Text
              size="sm_medium"
              className="/70 max-w-[35ch]"
            >
              CREATING EXPERIENCES THAT BALANCE AESTHETICS, USABILITY, AND
              INTENT.
            </Text>
          </div>
        </DecorativeBox>

        <div className="relative w-full">
          <div className="divide-muted/30 absolute inset-0 flex divide-x overflow-hidden">
            {[...Array(COLUMN_COUNT)].map((_, i) => (
              <div
                key={i}
                className="flex-1 self-stretch"
              />
            ))}
            <div className="border-muted/30 border-r" />
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
                className="fill-text font-bold uppercase"
                style={{ fontSize: '150px', letterSpacing: '-0.02em' }}
              >
                {LAST_NAME}
              </text>
            </svg>

            <svg
              viewBox="0 0 1150 156"
              className="-mt-4 block h-auto w-full"
            >
              <text
                x="50%"
                y="144"
                textAnchor="middle"
                textLength="1132"
                lengthAdjust="spacingAndGlyphs"
                className="fill-text font-bold uppercase"
                style={{ fontSize: '180px' }}
              >
                {FIRST_NAME}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
