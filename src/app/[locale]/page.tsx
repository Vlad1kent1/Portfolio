"use client"

import { useLocale, useTranslations } from 'next-intl';
import { uk, it, enUS } from "date-fns/locale"
import LocaleSwitcher from "@/components/layout/header/subcomponents/localeSwitcher";
import ThemeSwitcher from '@/components/layout/header/subcomponents/themeSwitcher';

import { 
  Button,
  Calendar,
  DatePicker,
  Field, FieldContent, FieldDescription, FieldLabel, FieldGroup, FieldSet, FieldLegend,
  Input,
  Label,
  Popover, PopoverContent, PopoverTrigger,
  Progress,
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

  const formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
  }).format(now);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-background gap-3">
      <div className="flex flex-row items-stretch justify-between w-full h-fit border-b border-muted divide-x divide-(--muted)">      
        <div className="flex items-center w-full  px-5">
          <h1 className="w-full text-2xl font-semibold leading-10 tracking-tight text-text">
            {t('title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {formatted}
          </p>
        </div>
        <div className='flex flex-row'>
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      <div className="flex flex-col w-full gap-8 px-6 py-5">
        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Buttons</h5>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="default">
              Default
            </Button>
            <Button variant="ghost" size="default">
              Ghost
            </Button>
            <Button variant="default" size="icon">
              <Info />
            </Button>
            <Button variant="default" size="default" disabled>
              Disabled
            </Button>
          </div>
        </section>

        <section className="flex flex-col w-full gap-2">
          <h5 className="text-lg font-normal text-(--text)">Calendar &amp; DatePicker</h5>
          <div className="flex w-full gap-6">
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

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Fields (orientation)</h5>
          <div className="flex flex-col gap-4">
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
                    <Button type="submit" variant="default" size="default">
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

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Inputs</h5>
          <div className="grid max-w-xl gap-3 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="input-default">Default</Label>
              <Input id="input-default" placeholder="Type something..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="input-disabled">Disabled</Label>
              <Input id="input-disabled" placeholder="Can't type" disabled />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="input-invalid">Invalid</Label>
              <Input id="input-invalid" placeholder="Invalid value" aria-invalid="true" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Popover</h5>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="default">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Popover content goes here.</p>
                <Button variant="ghost" size="default">
                  Action
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </section>

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Progress</h5>
          <div className="flex flex-col gap-2 max-w-xl">
            <Progress value={25} />
            <Progress value={50} />
            <Progress value={75} />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Select</h5>
          <div className="max-w-xs">
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
          </div>
        </section>

        <section className="flex flex-col w-full gap-2">
          <h5 className="text-lg font-normal text-(--text)">Separator</h5>
          <div className="w-full">
            <Separator className="my-6 w-full" />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Tabs</h5>
          <div className="flex flex-col gap-4">
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground">Default (filled)</p>
              <Tabs defaultValue="tab1">
                <TabsList>
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
              <p className="text-sm text-muted-foreground">Line variant</p>
              <Tabs defaultValue="tab1">
                <TabsList variant="line">
                  <TabsTrigger value="tab1" variant="default">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" variant="default">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" variant="default">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content for Tab 1</TabsContent>
                <TabsContent value="tab2">Content for Tab 2</TabsContent>
                <TabsContent value="tab3">Content for Tab 3</TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Textarea</h5>
          <Textarea placeholder="Write something..." />
        </section>

        <section className="flex flex-col gap-2">
          <h5 className="text-lg font-normal text-(--text)">Tooltip</h5>
          <TooltipProvider>
            <div className="flex gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="default">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip content</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </section>
      </div>
    </div>
  );
}
