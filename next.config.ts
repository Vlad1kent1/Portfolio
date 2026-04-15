import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled due to potential infinite loop issues
  reactStrictMode: false, // Disabled to prevent potential issues with certain libraries/components
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withAnalyzer(withNextIntl(nextConfig));
