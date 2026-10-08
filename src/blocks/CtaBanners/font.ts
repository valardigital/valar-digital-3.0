import { Plus_Jakarta_Sans } from 'next/font/google'

/** Shared Plus Jakarta Sans for CTA banners (matches design HTML). */
export const ctaBannerFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-cta-banner',
})
