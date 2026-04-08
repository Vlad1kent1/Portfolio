'use client'

import { LocaleSwitcher } from './subcomponents/localeSwitcher'
import { Text, Tabs, TabsList, TabsTrigger, AnimatedButton } from '@/components/ui';
import { ArrowRight, Plus } from 'lucide-react';

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 bg-background flex flex-row items-stretch justify-between w-full h-full px-5 border-b border-muted">      
      <div className="flex w-full items-stretch border-x border-muted relative"> 
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute w-4 h-4 flex items-center justify-center text-text z-50 left-0 bottom-0 -translate-x-1/2 translate-y-1/2">
            <Plus size={16} strokeWidth={1.5} />
          </div>

          <div className="absolute w-4 h-4 flex items-center justify-center text-text z-50 right-0 bottom-0 translate-x-1/2 translate-y-1/2">
            <Plus size={16} strokeWidth={1.5} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex w-full items-center divide-x divide-muted">
          <div className="flex basis-1/4 items-center gap-5 px-5 border-none">
            <Text size='base_bold' className="underline-offset-1 uppercase leading-tight shrink-0 flex flex-col items-start">
              <span>Karabinovych</span>
              <span>Vladyslav</span>
            </Text>
          </div>

          <div className='w-full h-full basis-1/2 justify-center items-center '>
            <Tabs defaultValue="tab1" className='h-full justify-center items-center'>
              <TabsList variant="line">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className='flex basis-1/4 flex-row'>
            <LocaleSwitcher />
            <AnimatedButton
              variant="default"
              className='w-full'
            >
              <AnimatedButton.Text>
                Book a call
              </AnimatedButton.Text>
              <AnimatedButton.Icon>
                <ArrowRight size={16} />
              </AnimatedButton.Icon>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  )
}
