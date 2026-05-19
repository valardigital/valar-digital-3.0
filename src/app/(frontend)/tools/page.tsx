import type { Metadata } from 'next';
import { Suspense } from 'react';
import RoasCalculator from '../components/tools/RoasCalculator';

export const metadata: Metadata = {
  title: 'The True ROAS Calculator — by Valar Digital',
  description:
    'Find your true break-even ROAS and the target MER your Shopify brand actually needs. Built by Valar Digital.',
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SERVER_URL || 'https://valardigital.com') + '/tools',
  },
  openGraph: {
    title: 'The True ROAS Calculator — by Valar Digital',
    description:
      "Most brands don't know their break-even ROAS. Plug in your numbers and find out in 60 seconds.",
    type: 'website',
    url: '/tools',
  },
};

export default function ToolsPage() {
  return (
    <div className="mt-[64px] md:mt-[80px]">
      <Suspense fallback={<ToolsLoading />}>
        <RoasCalculator />
      </Suspense>
    </div>
  );
}

function ToolsLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white text-text-light">
      Loading calculator…
    </div>
  );
}
