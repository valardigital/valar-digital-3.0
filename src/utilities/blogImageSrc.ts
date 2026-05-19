import type { StaticImageData } from 'next/image';
import { getMediaUrl } from '@/utilities/getMediaUrl';

const FALLBACK_IMAGE = '/Images/valar_logo.png';

/** Ensures Next/Image always receives a valid src string on the blog listing. */
export function blogImageSrc(image: string | StaticImageData): string | StaticImageData {
  if (typeof image !== 'string') return image;
  const resolved = getMediaUrl(image);
  return resolved || FALLBACK_IMAGE;
}
