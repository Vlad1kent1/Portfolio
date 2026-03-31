"use client"

import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { uk, it, enUS } from "date-fns/locale"

import { LocaleSwitcher } from "@/components/layout/header/subcomponents/localeSwitcher";
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
import { Loading } from "@/components/layout"
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
    <div className="flex flex-col w-full min-h-screen bg-background gap-12 px-6 pt-5 pb-24">
      <section className="flex flex-col w-full">
        <Loading/>
      </section>
      
      {/* Colours */}
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Colours</Text>
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-x-5 gap-y-3"> 
          <ColorBadge variable="--background" label="Background" /> 
          <ColorBadge variable="--background-inverse" label="BG Inverse" /> 
          <ColorBadge variable="--surface" label="Surface" /> 
          <ColorBadge variable="--foreground" label="Foreground" />          
          <ColorBadge variable="--text" label="Text" /> 
          <ColorBadge variable="--text-inverse" label="Text Inverse" /> 
          <ColorBadge variable="--muted" label="Muted" /> 
          <ColorBadge variable="--muted-inverse" label="Muted Inverse" /> 
          <ColorBadge variable="--contrast" label="Contrast" />         
        </div>
      </section>

      {/* Text */}
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Texts</Text>
        <div className="flex flex-row flex-wrap justify-around gap-x-5 gap-y-3"> 
          <Text variant="default">Default</Text>
          <Text variant="transperant">Transperant</Text>
          <Text variant="muted">Muted</Text>
          <Text variant="muted_inverse">Muted Transp.</Text>
          <Text variant="contrast">Contrast</Text>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-x-5 gap-y-3"> 
          <Text size="xs_normal">XS-normal</Text>
          <Text size="xs_semibold">XS-normal</Text>
          <Text size="sm_medium">SM-medium</Text>
          <Text size="base_normal">Base-normal</Text>
          <Text size="base_bold">Base-bold</Text>
          <Text size="lg_normal">LG-normal</Text>
          <Text size="xl_normal">XL-normal</Text>
          <Text size="xl_bold">XL-bold</Text>
          <Text size="xxl_bold">2XL-bold</Text>
          <Text size="xxxl_bold">3XL-bold</Text>
        </div>
      </section>

      {/* Buttons */}
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Buttons</Text>
        <div className="flex flex-wrap justify-between gap-5">
          <Button variant="default" size="default">
            Default
          </Button>
          <Button variant="ghost" size="default">
            Ghost
          </Button>
          <Button variant="outline" size="default">
            Outline
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
      <section className="flex flex-col w-full gap-3">
        <Text size="xl_bold">Calendar &amp; DatePicker</Text>
        <div className="flex flex-wrap w-full gap-5">
          <Calendar 
            fixedWeeks
            locale={locale === 'uk' ? uk : locale === 'it' ? it : enUS}
          />
          <div className="flex flex-row w-full max-w-xl gap-5 align-center items-start">
            <DatePicker className="flex-1" />
            <Input
              type='time'
              id='time-picker'
              step='60'
              placeholder='06:30'
              className='flex-1 min-w-max bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
            />
          </div>
        </div>
      </section>

      {/* Fields & Inputs */}
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Fields (orientation)</Text>
        <div className="flex flex-row flex-wrap gap-5">
          <FieldGroup className='max-w-xl'>
            <FieldSet>
              <FieldLegend>Vertical field</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <Field orientation="vertical">
                  <FieldLabel htmlFor="Email">Name</FieldLabel>
                  <FieldContent>
                    <Input type="text" placeholder="Name" required/>
                  </FieldContent>
                </Field>
                <Field orientation="vertical">
                  <FieldLabel htmlFor="Email">Email</FieldLabel>
                  <FieldContent>
                    <Input type="email" placeholder="Email" required/>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>  
            <Field orientation="horizontal"> 
              <Button type="submit" variant="outline" size="default" className='w-full'>
                Submit
              </Button>
            </Field>
          </FieldGroup>

          <FieldGroup className='max-w-xl'>
            <FieldSet>
              <FieldLegend>Horizontal field</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldLabel htmlFor="Email">Name</FieldLabel>
                  <FieldContent>
                    <Input type="text" placeholder="Name" required/>
                  </FieldContent>
                </Field>
                <Field orientation="horizontal">
                  <FieldLabel htmlFor="Email">Email</FieldLabel>
                  <FieldContent>
                    <Input type="email" placeholder="Email" required/>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>  
            <Field orientation="horizontal"> 
              <Button type="submit" variant="outline" size="default" className='w-full'>
                Submit
              </Button>
            </Field>
          </FieldGroup>
        </div>
      </section>

      {/* Inputs */}
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Inputs</Text>
        <div className="grid max-w-xl gap-5 md:grid-cols-3">
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
      <section className="flex flex-col gap-3">
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
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Select</Text>
        <div className="flex flex-row gap-5">
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
      <section className="flex flex-col w-full gap-3">
        <Text size="xl_bold">Separator</Text>
        <div className="w-full">
          <Separator className="my-6 w-full" />
        </div>
      </section>

      {/* Tabs */}
      <section className="flex flex-col gap-3 max-w-xl">
        <Text size="xl_bold">Tabs</Text>
        <div className="flex flex-row gap-5">
          <div className="flex-1 p-3 border border-muted">
            <p className="text-sm text-muted-foreground">Horizontal</p>
            <Tabs defaultValue="tab1" className='h-full'>
              <TabsList variant="line">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <div className="flex h-full flex-col justify-center items-center">
                <TabsContent value="tab1">Content for Tab 1</TabsContent>
                <TabsContent value="tab2">Content for Tab 2</TabsContent>
                <TabsContent value="tab3">Content for Tab 3</TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="flex-1 p-3 border border-muted">
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
      <section className="flex flex-col gap-3 max-w-xl">
        <Text size="xl_bold">Textarea</Text>
        <Textarea placeholder="Write something..." />
      </section>

      {/* Tooltip */}
      <section className="flex flex-col gap-3">
        <Text size="xl_bold">Tooltip</Text>
        <div className="flex flex-row gap-5 justify-around">
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
  );
}
