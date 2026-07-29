'use client';

import * as React from 'react';

import { useLocale, useTranslations } from 'next-intl';

import {
  AnimatedButton,
  Button,
  Calendar,
  DatePicker,
  DecorativeBox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { enUS, it, uk } from 'date-fns/locale';
import { toast } from 'sonner';

import { ColorBadge } from '@/components/pages/ui-kit';

import { ArrowRight, Info } from 'lucide-react';

export default function UIKitPage() {
  const locale = useLocale();
  const t = useTranslations('pages.ui-kit');

  const [openedPopover, setOpenedPopover] = React.useState(false);

  return (
    <div className="bg-background flex min-h-screen w-full flex-col px-5">
      <div className="border-muted flex flex-col gap-12 border-x pb-24">
        {/* Title */}
        <section className="border-muted divide-muted flex divide-x border-b">
          <DecorativeBox
            variant="none"
            borderOrientation="none"
            className="basis-1/4 px-5 py-3"
          >
            <Text
              size="xl_bold"
              className="shrink-0 whitespace-nowrap"
            >
              {t('title')}
            </Text>
          </DecorativeBox>
          <div className="basis-1/4" />
          <div className="basis-1/4" />
          <div className="basis-1/4" />
        </section>

        {/* Colours */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.colours.title')}</Text>
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-x-5 gap-y-3">
            <ColorBadge
              variable="--background"
              label={t('sections.colours.background')}
            />
            <ColorBadge
              variable="--background-inverse"
              label={t('sections.colours.background_inverse')}
            />
            <ColorBadge
              variable="--surface"
              label={t('sections.colours.surface')}
            />
            <ColorBadge
              variable="--foreground"
              label={t('sections.colours.foreground')}
            />
            <ColorBadge
              variable="--text"
              label={t('sections.colours.text')}
            />
            <ColorBadge
              variable="--text-inverse"
              label={t('sections.colours.text_inverse')}
            />
            <ColorBadge
              variable="--muted"
              label={t('sections.colours.muted')}
            />
            <ColorBadge
              variable="--muted-inverse"
              label={t('sections.colours.muted_inverse')}
            />
            <ColorBadge
              variable="--contrast"
              label={t('sections.colours.contrast')}
            />
          </div>
        </section>

        {/* Text */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.texts.title')}</Text>
          <div className="flex flex-row flex-wrap justify-around gap-x-5 gap-y-3">
            <Text variant="default">{t('sections.texts.default')}</Text>
            <Text
              variant="inverse"
              className="bg-background-inverse px-0.5"
            >
              {t('sections.texts.inverse')}
            </Text>
            <Text variant="muted">{t('sections.texts.muted')}</Text>
            <Text variant="muted_inverse">
              {t('sections.texts.muted_inverse')}
            </Text>
            <Text variant="contrast">{t('sections.texts.contrast')}</Text>
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-x-5 gap-y-3">
            <Text size="xs_normal">{t('sections.texts.xs_normal')}</Text>
            <Text size="xs_semibold">{t('sections.texts.xs_semibold')}</Text>
            <Text size="sm_medium">{t('sections.texts.sm_medium')}</Text>
            <Text size="base_normal">{t('sections.texts.base_normal')}</Text>
            <Text size="base_bold">{t('sections.texts.base_bold')}</Text>
            <Text size="lg_normal">{t('sections.texts.lg_normal')}</Text>
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-x-5 gap-y-3">
            <Text size="xl_normal">{t('sections.texts.xl_normal')}</Text>
            <Text size="xl_bold">{t('sections.texts.xl_bold')}</Text>
            <Text size="xxl_bold">{t('sections.texts.xxl_bold')}</Text>
            <Text size="xxxl_bold">{t('sections.texts.xxxl_bold')}</Text>
          </div>
        </section>

        {/* Buttons */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.buttons.title')}</Text>
          <div className="flex flex-wrap justify-between gap-5">
            <Button
              variant="default"
              size="default"
            >
              {t('sections.buttons.default')}
            </Button>
            <Button
              variant="ghost"
              size="default"
            >
              {t('sections.buttons.ghost')}
            </Button>
            <Button
              variant="outline"
              size="default"
            >
              {t('sections.buttons.outline')}
            </Button>
            <Button
              variant="default"
              size="icon"
            >
              <Info />
            </Button>
            <Button
              variant="default"
              size="default"
              disabled
            >
              {t('sections.buttons.disabled')}
            </Button>
            <AnimatedButton
              variant="outline"
              size="default"
            >
              <AnimatedButton.Text direction="down">
                {t('sections.buttons.animated')}
              </AnimatedButton.Text>
              <AnimatedButton.Icon direction="right">
                <ArrowRight />
              </AnimatedButton.Icon>
            </AnimatedButton>
          </div>
        </section>

        {/* Calendar & DatePicker */}
        <section className="flex w-full flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.calendar.title')}</Text>
          <div className="flex w-full flex-wrap gap-5">
            <Calendar
              fixedWeeks
              locale={locale === 'uk' ? uk : locale === 'it' ? it : enUS}
            />
            <div className="align-center flex w-full max-w-xl flex-row items-start gap-5">
              <DatePicker className="flex-1" />
              <Input
                type="time"
                id="time-picker"
                step="60"
                placeholder={t('sections.calendar.time_placeholder')}
                className="bg-background min-w-max flex-1 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
        </section>

        {/* Fields & Inputs */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.fields.title')}</Text>
          <div className="flex flex-row flex-wrap gap-5">
            <FieldGroup className="max-w-xl">
              <FieldSet>
                <FieldLegend>{t('sections.fields.vertical_field')}</FieldLegend>
                <FieldDescription>
                  {t('sections.fields.description')}
                </FieldDescription>
                <FieldGroup>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="Email">
                      {t('sections.fields.name')}
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t('sections.fields.name')}
                        required
                      />
                    </FieldContent>
                  </Field>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="Email">
                      {t('sections.fields.email')}
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        type="email"
                        placeholder={t('sections.fields.email')}
                        required
                      />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button
                  type="submit"
                  variant="outline"
                  size="default"
                  className="w-full"
                >
                  {t('sections.fields.submit')}
                </Button>
              </Field>
            </FieldGroup>

            <FieldGroup className="max-w-xl">
              <FieldSet>
                <FieldLegend>
                  {t('sections.fields.horizontal_field')}
                </FieldLegend>
                <FieldDescription>
                  {t('sections.fields.description')}
                </FieldDescription>
                <FieldGroup>
                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="Email">
                      {t('sections.fields.name')}
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder={t('sections.fields.name')}
                        required
                      />
                    </FieldContent>
                  </Field>
                  <Field orientation="horizontal">
                    <FieldLabel htmlFor="Email">
                      {t('sections.fields.email')}
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        type="email"
                        placeholder={t('sections.fields.email')}
                        required
                      />
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button
                  type="submit"
                  variant="outline"
                  size="default"
                  className="w-full"
                >
                  {t('sections.fields.submit')}
                </Button>
              </Field>
            </FieldGroup>
          </div>
        </section>

        {/* Inputs */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.inputs.title')}</Text>
          <div className="grid max-w-xl gap-5 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <Text as="label">{t('sections.inputs.default')}</Text>
              <Input
                id="input-default"
                placeholder={t('sections.inputs.placeholder')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Text as="label">{t('sections.inputs.disabled')}</Text>
              <Input
                id="input-disabled"
                placeholder={t('sections.inputs.disabled_placeholder')}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <Text
                as="label"
                htmlFor="input-invalid"
              >
                {t('sections.inputs.invalid')}
              </Text>
              <Input
                id="input-invalid"
                placeholder={t('sections.inputs.invalid_placeholder')}
                aria-invalid="true"
              />
            </div>
          </div>
        </section>

        {/* Popover */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.popover.title')}</Text>
          <Popover open={openedPopover}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="max-w-xl"
                onClick={() => setOpenedPopover(true)}
              >
                {t('sections.popover.trigger')}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">{t('sections.popover.content')}</p>
              <Button
                variant="ghost"
                size="default"
                onClick={() => setOpenedPopover(false)}
              >
                {t('sections.popover.close')}
              </Button>
            </PopoverContent>
          </Popover>
        </section>

        {/* Select */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.select.title')}</Text>
          <div className="flex flex-row gap-5">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder={t('sections.select.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">
                  {t('sections.select.apple')}
                </SelectItem>
                <SelectItem value="banana">
                  {t('sections.select.banana')}
                </SelectItem>
                <SelectItem value="orange">
                  {t('sections.select.orange')}
                </SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="apple">
              <SelectTrigger variant="outline">
                <SelectValue placeholder={t('sections.select.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">
                  {t('sections.select.apple')}
                </SelectItem>
                <SelectItem value="banana">
                  {t('sections.select.banana')}
                </SelectItem>
                <SelectItem value="orange">
                  {t('sections.select.orange')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Separator */}
        <section className="flex w-full flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.separator.title')}</Text>
          <div className="w-full">
            <Separator className="my-6 w-full" />
          </div>
        </section>

        {/* Tabs */}
        <section className="flex max-w-xl flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.tabs.title')}</Text>
          <div className="flex flex-row gap-5">
            <div className="border-muted flex-1 border p-3">
              <p className="text-muted-foreground text-sm">
                {t('sections.tabs.horizontal')}
              </p>
              <Tabs
                defaultValue="tab1"
                className="h-full"
              >
                <TabsList variant="line">
                  <TabsTrigger value="tab1">
                    {t('sections.tabs.tab_1')}
                  </TabsTrigger>
                  <TabsTrigger value="tab2">
                    {t('sections.tabs.tab_2')}
                  </TabsTrigger>
                  <TabsTrigger value="tab3">
                    {t('sections.tabs.tab_3')}
                  </TabsTrigger>
                </TabsList>
                <div className="flex h-full flex-col items-center justify-center">
                  <TabsContent value="tab1">
                    {t('sections.tabs.content_tab_1')}
                  </TabsContent>
                  <TabsContent value="tab2">
                    {t('sections.tabs.content_tab_2')}
                  </TabsContent>
                  <TabsContent value="tab3">
                    {t('sections.tabs.content_tab_3')}
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            <div className="border-muted flex-1 border p-3">
              <p className="text-muted-foreground text-sm">
                {t('sections.tabs.vertical')}
              </p>
              <Tabs
                defaultValue="tab1"
                orientation="vertical"
              >
                <TabsList>
                  <TabsTrigger value="tab1">
                    {t('sections.tabs.tab_1')}
                  </TabsTrigger>
                  <TabsTrigger value="tab2">
                    {t('sections.tabs.tab_2')}
                  </TabsTrigger>
                  <TabsTrigger value="tab3">
                    {t('sections.tabs.tab_3')}
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="tab1"
                  className="flex items-center justify-center"
                >
                  {t('sections.tabs.content_tab_1')}
                </TabsContent>
                <TabsContent
                  value="tab2"
                  className="flex items-center justify-center"
                >
                  {t('sections.tabs.content_tab_2')}
                </TabsContent>
                <TabsContent
                  value="tab3"
                  className="flex items-center justify-center"
                >
                  {t('sections.tabs.content_tab_3')}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Textarea */}
        <section className="flex max-w-xl flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.textarea.title')}</Text>
          <Textarea placeholder={t('sections.textarea.placeholder')} />
        </section>

        {/* Tooltip */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.tooltip.title')}</Text>
          <div className="flex flex-row justify-around gap-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-24"
                  >
                    {t('sections.tooltip.right')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {t('sections.tooltip.content')}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-24"
                  >
                    {t('sections.tooltip.top')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  {t('sections.tooltip.content')}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-24"
                  >
                    {t('sections.tooltip.bottom')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  {t('sections.tooltip.content')}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-24"
                  >
                    {t('sections.tooltip.left')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  {t('sections.tooltip.content')}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        {/* Sonner */}
        <section className="flex flex-col gap-3 p-5">
          <Text size="xl_bold">{t('sections.sonner.title')}</Text>
          <div className="flex flex-row justify-around gap-5">
            <Button
              variant="outline"
              className="w-24"
              onClick={() => toast(t('sections.sonner.default_toast'))}
            >
              {t('sections.sonner.default')}
            </Button>
            <Button
              variant="outline"
              className="w-24"
              onClick={() => toast.success(t('sections.sonner.success_toast'))}
            >
              {t('sections.sonner.success')}
            </Button>
            <Button
              variant="outline"
              className="w-24"
              onClick={() => toast.info(t('sections.sonner.info_toast'))}
            >
              {t('sections.sonner.info')}
            </Button>
            <Button
              variant="outline"
              className="w-24"
              onClick={() => toast.warning(t('sections.sonner.warning_toast'))}
            >
              {t('sections.sonner.warning')}
            </Button>
            <Button
              variant="outline"
              className="w-24"
              onClick={() => toast.error(t('sections.sonner.error_toast'))}
            >
              {t('sections.sonner.error')}
            </Button>
            <Button
              variant="outline"
              className="w-24"
              onClick={() => {
                toast.promise<{ name: string }>(
                  () =>
                    new Promise((resolve) =>
                      setTimeout(
                        () =>
                          resolve({ name: t('sections.sonner.event_name') }),
                        2000,
                      ),
                    ),
                  {
                    loading: t('sections.sonner.loading'),
                    // Виправлено тут: передаємо { name: data.name } безпосередньо у функцію t()
                    success: (data) =>
                      t('sections.sonner.promise_success', { name: data.name }),
                    error: t('sections.sonner.promise_error'),
                  },
                );
              }}
            >
              {t('sections.sonner.promise')}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
