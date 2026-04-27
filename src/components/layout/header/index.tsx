'use client';

import { AnimatedButton, DecorativeBox, Text } from '@/components/ui';
import { usePathname, useRouter } from '@/i18n/navigation';

import { ArrowRight } from 'lucide-react';

import { useScrollTo } from '@/hooks/use-scroll-to';

import { LocaleSwitcher, TabsNavigation } from './components';

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scrollTo = useScrollTo();

  const isHomePage = pathname === '/';

  return (
    <div className="bg-background border-muted sticky top-0 z-40 flex h-full w-full flex-row items-stretch justify-between border-b px-5">
      <div className="border-muted relative flex w-full items-stretch border-x">
        <DecorativeBox
          variant="default"
          borderOrientation="none"
          className="w-full items-stretch"
        >
          <div className="divide-muted flex w-full items-center divide-x">
            <div className="flex basis-1/4 items-center gap-5 border-none px-5">
              <Text
                size="base_bold"
                className="flex shrink-0 flex-col items-start leading-tight uppercase underline-offset-1"
              >
                <span>Karabinovych</span>
                <span>Vladyslav</span>
              </Text>
            </div>

            <div className="h-full w-full basis-1/2 items-center justify-center">
              <TabsNavigation />
            </div>

            <div className="flex basis-1/4 flex-row">
              <LocaleSwitcher />
              <AnimatedButton
                variant="default"
                className="w-full"
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
            </div>
          </div>
        </DecorativeBox>
      </div>
    </div>
  );
};
