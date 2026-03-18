"use client"

import * as React from "react"
import { useLocale } from "next-intl"
import { 
  Button, 
  Calendar,
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui"
import { format, addDays, startOfToday } from "date-fns"
import { uk, it, enUS } from "date-fns/locale"
import { ChevronDownIcon } from "lucide-react"

export function DatePicker({ className }: { className?: string }) {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)

  const locale = useLocale();
  const tomorrow = addDays(startOfToday(), 1)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={className}>
        <Button
          variant="outline"
          size="base"
          data-empty={!date}
          className="h-fit w-fit min-w-max whitespace-nowrap"
        >
          {date ? format(date, "PPP") : <span className="text-muted">Pick a date</span>}
          <ChevronDownIcon size={14} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          locale={locale === 'uk' ? uk : locale === 'it' ? it : enUS}
          selected={date}
          onSelect={(date) => {
            setDate(date)
            setOpen(false)
          }}
          defaultMonth={date || tomorrow}
          startMonth={tomorrow}
          endMonth={addDays(tomorrow, 90)}
          disabled={[
            { dayOfWeek: [0, 6] },
            { before: tomorrow },
          ]}
        />
      </PopoverContent>
    </Popover>
  )
}
