"use client"

import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { uk, it, enUS } from "date-fns/locale"

import LocaleSwitcher from "@/components/layout/header/subcomponents/localeSwitcher";
import ThemeSwitcher from '@/components/layout/header/subcomponents/themeSwitcher';
import { ColorBadge } from '@/components/pages/ui-kit/color-badge';
import { 
  Button,
  Calendar,
  DatePicker,
  Field, FieldContent, FieldDescription, FieldLabel, FieldGroup, FieldSet, FieldLegend,
  Input,
  Text,
  Popover, PopoverContent, PopoverTrigger,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
  Separator,
  Tabs, TabsContent, TabsList, TabsTrigger,
  Textarea,
  Tooltip, TooltipContent, TooltipTrigger, TooltipProvider
} from "@/components/ui";
import { Info } from "lucide-react"

export default function Home() {
  const locale = useLocale();
  const t = useTranslations('HomePage');
  const now = new Date();

  const [openedPopover, setOpenedPopover] = React.useState(false);

  const formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
  }).format(now);

  return (
    <div className="relative flex flex-col min-h-screen items-start justify-start bg-background gap-3">
      <ThemeSwitcher />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-background flex flex-row items-stretch justify-between w-full h-fit border-b border-muted divide-x divide-(--muted)">      
        <div className="flex items-center w-full px-5">
          <h1 className="w-full text-2xl font-semibold leading-10 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {formatted}
          </p>
        </div>
        <div className='flex flex-row'>
          <LocaleSwitcher />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full gap-8 px-6 pt-5 pb-24">
        {/* Colours */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Colours</Text>
          <div className="flex flex-row gap-3">
            <ColorBadge variable="--background" label="Background" />          
          </div>
        </section>

        {/* Buttons */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Buttons</Text>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="default">
              Default
            </Button>
            <Button variant="ghost" size="default">
              Ghost
            </Button>
            <Button variant="outline" size="default">
              outline
            </Button>
            <Button variant="default" size="icon">
              <Info />
            </Button>
            <Button variant="default" size="default" disabled>
              Disabled
            </Button>
          </div>
        </section>

        {/* Calendar & DatePicker */}
        <section className="flex flex-col w-full gap-2">
          <Text size="xl_bold">Calendar &amp; DatePicker</Text>
          <div className="flex w-full gap-3">
            <Calendar 
              locale={locale === 'uk' ? uk : locale === 'it' ? it : enUS}
            />
            <div className="flex flex-row w-full gap-5 align-center items-start">
              <DatePicker className="flex-1" />
              <Input
                type='time'
                id='time-picker'
                step='60'
                defaultValue='06:30'
                className='flex-1 min-w-max bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
              />
            </div>
          </div>
        </section>

        {/* Fields & Inputs */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Fields (orientation)</Text>
          <div className="flex flex-col gap-3">
            <form>
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Vertical field</FieldLegend>
                  <FieldDescription>
                    All transactions are secure and encrypted
                  </FieldDescription>
                  <FieldGroup>
                <Field orientation="vertical" className="max-w-xl">
                  <FieldLabel htmlFor="Email">Email</FieldLabel>
                  <FieldContent>
                    <Input type="email" placeholder="Email" required/>
                  </FieldContent>
                </Field>
                </FieldGroup>
                </FieldSet>  
                  <Field orientation="vertical" className="max-w-xl"> 
                    <Button type="submit" variant="outline" size="default">
                      Submit
                    </Button>
                  </Field>
              </FieldGroup>
            </form>

            <Field orientation="horizontal" className="max-w-xl">
              <FieldLabel>Horizontal field</FieldLabel>
              <FieldContent>
                <Input placeholder="Email" />
                <FieldDescription>Hint text</FieldDescription>
              </FieldContent>
            </Field>
          </div>
        </section>

        {/* Inputs */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Inputs</Text>
          <div className="grid max-w-xl gap-3 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <Text as="label">
                Default
              </Text>
              <Input id="input-default" placeholder="Type something..." />
            </div>
            <div className="flex flex-col gap-2">
              <Text as="label">
                Disabled
              </Text>
              <Input id="input-disabled" placeholder="Can't type" disabled />
            </div>
            <div className="flex flex-col gap-2">
              <Text as="label" htmlFor="input-invalid">
                Invalid
              </Text>
              <Input id="input-invalid" placeholder="Invalid value" aria-invalid="true" />
            </div>
          </div>
        </section>

        {/* Popover */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Popover</Text>
          <Popover open={openedPopover}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="max-w-xl" onClick={() => setOpenedPopover(true)}>
                Open popover
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">Popover content goes here.</p>
              <Button variant="ghost" size="default" onClick={() => setOpenedPopover(false)}>
                Close popover
              </Button>
            </PopoverContent>
          </Popover>
        </section>

        {/* Select */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Select</Text>
          <div className="flex flex-row gap-3">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Pick a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="apple">
              <SelectTrigger variant="outline">
                <SelectValue placeholder="Pick a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Separator */}
        <section className="flex flex-col w-full gap-2">
          <Text size="xl_bold">Separator</Text>
          <div className="w-full">
            <Separator className="my-6 w-full" />
          </div>
        </section>

        {/* Tabs */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Tabs</Text>
          <div className="flex flex-col gap-3">
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground">Horizontal</p>
              <Tabs defaultValue="tab1">
                <TabsList variant="line">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content for Tab 1</TabsContent>
                <TabsContent value="tab2">Content for Tab 2</TabsContent>
                <TabsContent value="tab3">Content for Tab 3</TabsContent>
              </Tabs>
            </div>

            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground">Vertical</p>
              <Tabs defaultValue="tab1" orientation="vertical">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="flex items-center justify-center">Content for Tab 1</TabsContent>
                <TabsContent value="tab2" className="flex items-center justify-center">Content for Tab 2</TabsContent>
                <TabsContent value="tab3" className="flex items-center justify-center">Content for Tab 3</TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Textarea */}
        <section className="flex flex-col gap-2 max-w-xl">
          <Text size="xl_bold">Textarea</Text>
          <Textarea placeholder="Write something..." />
        </section>

        {/* Tooltip */}
        <section className="flex flex-col gap-2">
          <Text size="xl_bold">Tooltip</Text>
          <div className="flex flex-row gap-3 justify-around">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className='w-24'>Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">Tooltip content</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className='w-24'>Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">Tooltip content</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className='w-24'>Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Tooltip content</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className='w-24'>Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tooltip content</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
      </div>
    </div>
  );
}
