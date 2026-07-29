'use client';

import { useTranslations } from 'next-intl';

import { AnimatedTextCountUp, DecorativeBox, Text } from '@/components/ui';

import { Dot } from 'lucide-react';

interface IMetricItem {
  value: string;
  label: string;
  description: string;
}

const MetricCol = ({
  data,
  count,
  wrapperClassName = '',
}: {
  data: IMetricItem;
  count: number;
  wrapperClassName?: string;
}) => (
  <div className={`col-span-1 flex flex-col ${wrapperClassName}`}>
    <DecorativeBox
      variant="default"
      borderOrientation="bottom"
      className="col-span-1 flex flex-col items-start gap-3 px-5 py-6"
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
      <AnimatedTextCountUp
        size="xxxxl_bold"
        className="pb-2"
      >
        {data?.value}
      </AnimatedTextCountUp>
      <Text size="sm_medium">{data?.label}</Text>
      <Text
        size="sm_normal"
        variant="muted"
      >
        {data?.description}
      </Text>
    </DecorativeBox>
  </div>
);

const EmptyCol = <div className="col-span-1 flex flex-col" />;

const MetricsOverview = () => {
  const t = useTranslations(
    'components.pages.portfolio.section-about.components.metrics-overview',
  );
  const METRICS_DATA: IMetricItem[] = t.raw('metrics_data');

  return (
    <>
      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        <MetricCol
          data={METRICS_DATA[0]}
          count={1}
          wrapperClassName="pt-20"
        />

        {/* Column 2 */}
        {EmptyCol}

        {/* Column 3 */}
        <MetricCol
          data={METRICS_DATA[1]}
          count={2}
          wrapperClassName="pt-20"
        />

        {/* Column 4 */}
        {EmptyCol}
      </div>

      <div className="border-muted divide-muted grid w-full flex-1 grid-cols-4 items-stretch divide-x border-x">
        {/* Column 1 */}
        {EmptyCol}

        {/* Column 2 */}
        <MetricCol
          data={METRICS_DATA[2]}
          count={3}
          wrapperClassName="pb-20"
        />

        {/* Column 3 */}
        {EmptyCol}

        {/* Column 4 */}
        <MetricCol
          data={METRICS_DATA[3]}
          count={4}
          wrapperClassName="pb-20"
        />
      </div>
    </>
  );
};

export { MetricsOverview };
