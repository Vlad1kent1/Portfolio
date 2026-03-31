'use client'

import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from './subcomponents/localeSwitcher'
import { Text, Tabs, TabsList, TabsTrigger } from '@/components/ui';

export const Header = () => {
  const t = useTranslations('HomePage');

  return (
    <div className="sticky top-0 z-40 bg-background flex flex-row items-stretch justify-between w-full h-fit border-b border-muted">      
      <div className="flex w-fit items-center gap-5 px-5">
        <Text size='xxl_bold' className="whitespace-nowrap shrink-0">
          {t('title')}
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
      </div>
    </div>
  )
}
