'use client'

import { LocaleSwitcher } from './subcomponents/localeSwitcher'
import { Text, Tabs, TabsList, TabsTrigger, AnimatedButton } from '@/components/ui';
import { ArrowRight, Plus } from 'lucide-react';

export const Header = () => {
  return (
    <div className="sticky top-0 z-40 bg-background flex flex-row items-stretch justify-between w-full h-fit px-5 border-b border-muted">      
      <div className="flex w-full items-center border-x border-muted">
        <div className="flex w-fit items-center gap-5 px-5">
          <Text size='base_bold' className="underline-offset-1 uppercase leading-tight shrink-0 flex flex-col items-start">
            <span>Karabinovych</span>
            <span>Vladyslav</span>
          </Text>
        </div>
        <div className='w-full justify-center items-center '>
          <Tabs defaultValue="tab1" className='h-full justify-center items-center'>
            <TabsList variant="line">
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className='flex flex-row border-l border-muted'>
          <LocaleSwitcher />
          <AnimatedButton
            variant="default"
            className='w-xs'
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

      <div className="flex w-full items-center border-x border-muted relative"> 
    
        <div className="absolute -bottom-2 -left-2 z-50 bg-background text-muted-foreground">
          <Plus size={16} />
        </div>

        <div className="absolute -bottom-2 -right-2 z-50 bg-background text-muted-foreground">
          <Plus size={16} className='p-0!' />
        </div>
      </div>
    </div>
  )
}
