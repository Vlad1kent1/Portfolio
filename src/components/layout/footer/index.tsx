'use client';

import { AnimatedButton, DecorativeBox, Text } from '@/components/ui';
import { useRouter } from '@/i18n/navigation';

import { ArrowRight } from 'lucide-react';

import { useScrollTo } from '@/hooks/use-scroll-to';

import { TicTacToe } from './components';

const LAST_NAME = 'KARABINOVYCH';
const FIRST_NAME = 'VLADYSLAV';
const COLUMN_COUNT = 4;

export const Footer = () => {
  const { scrollTo } = useScrollTo();
  const router = useRouter();

  const footerNav = [
    { name: 'Home', href: '#', action: () => scrollTo('id-section-home') },
    { name: 'About', href: '#', action: () => scrollTo('id-section-about') },
    {
      name: 'Projects',
      href: '#',
      action: () => scrollTo('id-section-projects'),
    },
    {
      name: 'Experience',
      href: '#',
      action: () => scrollTo('id-section-experience'),
    },
    { name: 'Components', href: '#', action: () => router.push('/ui-kit') },
  ];

  const socialLinks = [
    { name: 'TWITTER(X)', href: '#' },
    { name: 'INSTAGRAM', href: '#' },
    { name: 'LINKEDIN', href: '#' },
    { name: 'DRIBBBLE', href: '#' },
  ];

  return (
    <footer className="bg-footer border-muted w-full border-t px-5">
      <div className="border-muted w-full border-x">
        <DecorativeBox
          variant="horizontal"
          borderOrientation="bottom"
          className="divide-muted relative grid w-full grid-cols-4 items-stretch divide-x"
        >
          <div className="col-span-1 flex flex-col gap-5 px-5 py-8">
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
              className="text-muted max-w-[30ch]"
            >
              CRAFTING THOUGHTFUL DIGITAL EXPERIENCES BUILT ON CLARITY, PURPOSE,
              AND PRECISION.
            </Text>
          </div>

          {/* Navigation */}
          <div className="relative col-span-1">
            <div className="divide-muted flex h-full w-full flex-col divide-y">
              {footerNav.map((link) => (
                <AnimatedButton
                  key={`id-${link.name.toLowerCase()}`}
                  variant="ghost"
                  onClick={link.action}
                  className="flex-1 bg-transparent hover:bg-transparent"
                >
                  <AnimatedButton.Text>{link.name}</AnimatedButton.Text>
                  <AnimatedButton.Icon>
                    <ArrowRight size={16} />
                  </AnimatedButton.Icon>
                </AnimatedButton>
              ))}
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-3 px-5 py-8">
            <Text
              size="xs_semibold"
              className="text-muted mb-2 tracking-widest uppercase"
            >
              Follow on
            </Text>
            {socialLinks.map((link) => (
              <a
                key={`id-${link.name.toLowerCase()}`}
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

          <div className="divide-muted col-span-1 flex flex-col items-start justify-between divide-y">
            <TicTacToe />

            <DecorativeBox
              variant="horizontal"
              borderOrientation="none"
              className="w-full"
            >
              <AnimatedButton
                variant="ghost"
                className="w-full bg-transparent hover:bg-transparent"
              >
                <AnimatedButton.Text>Book a call</AnimatedButton.Text>
                <AnimatedButton.Icon>
                  <ArrowRight size={16} />
                </AnimatedButton.Icon>
              </AnimatedButton>
            </DecorativeBox>
          </div>
        </DecorativeBox>

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
      </div>
    </footer>
  );
};
