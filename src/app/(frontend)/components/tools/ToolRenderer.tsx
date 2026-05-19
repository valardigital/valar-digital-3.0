'use client';

import { Suspense } from 'react';
import RoasCalculator from './RoasCalculator';
import CustomToolContent from './CustomToolContent';
import type { ToolComponentType } from '@/collections/tools';

function ToolLoading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-white text-text-light">
      Loading tool…
    </div>
  );
}

export type ToolRendererProps = {
  toolComponent: ToolComponentType | string;
  customHtml?: string | null;
  customCss?: string | null;
  customJs?: string | null;
};

export default function ToolRenderer({
  toolComponent,
  customHtml,
  customCss,
  customJs,
}: ToolRendererProps) {
  switch (toolComponent) {
    case 'custom-html':
      return (
        <CustomToolContent html={customHtml || ''} css={customCss} js={customJs} />
      );
    case 'roas-calculator':
      return (
        <Suspense fallback={<ToolLoading />}>
          <RoasCalculator />
        </Suspense>
      );
    default:
      return (
        <div className="container mx-auto px-4 py-16 text-center text-text-light">
          This tool is not available yet.
        </div>
      );
  }
}
