'use client'

import { DecorativeBox, Text, AnimatedTextCountUp } from "@/components/ui";
import { Dot } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  description: string;
}

const METRICS_DATA = [
    {
    value: "12+",
    label: "CORE TECHNOLOGIES",
    description: "Proficient in modern engineering stacks including PostgreSQL, Supabase, and integrating complex third-party APIs."
  },
  {
    value: "1.5+",
    label: "YEARS EXPERIENCE",
    description: "Commercial full-stack development building scalable web applications using TypeScript, React, Next.js, and Node.js."
  },
  {
    value: "3",
    label: "ACADEMIC DEGREES",
    description: "Blending Computer Science with Mathematical Engineering to deliver algorithmically optimized solutions."
  },
  {
    value: "100%",
    label: "FULL-CODE MIGRATION",
    description: "Successfully led transitions from legacy low-code platforms to robust, scalable TypeScript environments."
  }
];

const MetricCol = ({ data, count, wrapperClassName = "" } : { data: MetricItem; count: number; wrapperClassName?: string }) => (
  <div className={`col-span-1 flex flex-col ${wrapperClassName}`}>
    <DecorativeBox
      variant="default"
      borderOrientation="bottom"
      className="col-span-1 flex flex-col gap-3 px-5 py-6 items-start"
    >
      <div className="flex flex-row -space-x-1.5">
        {[...Array(count)].map((_, i) => (
          <Dot
            key={`metric-dot-${i}`}
            className="text-text"
            strokeWidth="6"
          />
        ))}
        {[...Array(4 - count)].map((_, i) => (
          <Dot
            key={`metric-dot-muted-${i}`}
            className="text-muted"
            strokeWidth="6"
          />
        ))}
      </div>
      <AnimatedTextCountUp size="xxxxl_bold" className="pb-2">
        {data?.value}
      </AnimatedTextCountUp>
      <Text size="sm_medium">
        {data?.label}
      </Text>
      <Text size="sm_normal" variant="muted">
        {data?.description}
      </Text>
    </DecorativeBox>
  </div>
);

const EmptyCol =  <div className="col-span-1 flex flex-col" />

const MetricsOverview = () => {
  return (
    <>
      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <MetricCol data={METRICS_DATA[0]} count={1} wrapperClassName="pt-20" />

        {/* Column 2 */}
        {EmptyCol}

        {/* Column 3 */}
        <MetricCol data={METRICS_DATA[1]} count={2} wrapperClassName="pt-20" />

        {/* Column 4 */}
        {EmptyCol}
      </div>

      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        {EmptyCol}

        {/* Column 2 */}
        <MetricCol data={METRICS_DATA[2]} count={3} wrapperClassName="pb-20" />

        {/* Column 3 */}
        {EmptyCol}

        {/* Column 4 */}
        <MetricCol data={METRICS_DATA[3]} count={4} wrapperClassName="pb-20" />
      </div>
    </>
  );
};

export { MetricsOverview };