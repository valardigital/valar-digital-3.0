'use client';

import { useEffect, useState } from 'react';
import { LivePreviewListener } from './index';

/** Client-only gate so we never call draftMode() in the root layout (avoids static/dynamic conflicts). */
export function LivePreviewGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isPreview =
      document.cookie.includes('__prerender_bypass') ||
      document.cookie.includes('__next_preview_data');
    setEnabled(isPreview);
  }, []);

  if (!enabled) return null;
  return <LivePreviewListener />;
}
