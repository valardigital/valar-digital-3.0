import { draftMode } from 'next/headers';
import { LivePreviewListener } from './index';

/** Only mount Payload live preview on draft/preview pages — avoids refresh loops on production. */
export async function LivePreviewWrapper() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;
  return <LivePreviewListener />;
}
