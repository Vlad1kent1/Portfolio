'use client';

import { ArrowRight } from 'lucide-react';

import {
  AnimatedButton,
  DecorativeBox,
  Tabs,
  TabsList,
  TabsTrigger,
  Text,
} from '@/components/ui';

import { LocaleSwitcher } from './components/localeSwitcher';

export const Header = () => {
  return (
    <div className="bg-background border-muted sticky top-0 z-40 flex h-full w-full flex-row items-stretch justify-between border-b px-5">
      <div className="border-muted relative flex w-full items-stretch border-x">
        <DecorativeBox
          variant="default"
          borderOrientation="none"
          className="w-full items-stretch"
        >
          {/* Main content */}
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
              <Tabs
                defaultValue="tab1"
                className="h-full items-center justify-center"
              >
                <TabsList variant="line">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex basis-1/4 flex-row">
              <LocaleSwitcher />
              <AnimatedButton
                variant="default"
                className="w-full"
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
