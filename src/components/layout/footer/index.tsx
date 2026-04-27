'use client';

import { AnimatedButton, DecorativeBox, Text } from '@/components/ui';
import { usePathname, useRouter } from '@/i18n/navigation';

import { ArrowRight } from 'lucide-react';

import { useScrollTo } from '@/hooks/use-scroll-to';

import { Branding, ButtonsNavigation, TicTacToe } from './components';

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scrollTo = useScrollTo();

  const isHomePage = pathname === '/';

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
            <ButtonsNavigation />
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
              className="flex w-full basis-1/5 items-stretch"
            >
              <AnimatedButton
                variant="ghost"
                className="w-full bg-transparent hover:bg-transparent"
                onClick={() => {
                  isHomePage
                    ? scrollTo('id-section-contact')
                    : router.push('/#id-section-contact');
                }}
              >
                <AnimatedButton.Text>Book a call</AnimatedButton.Text>
                <AnimatedButton.Icon>
                  <ArrowRight size={16} />
                </AnimatedButton.Icon>
              </AnimatedButton>
            </DecorativeBox>
          </div>
        </DecorativeBox>

        <Branding />
      </div>
    </footer>
  );
};
