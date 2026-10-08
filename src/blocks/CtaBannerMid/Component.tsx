import { ctaBannerFont } from '../CtaBanners/font'
import styles from '../CtaBanners/CtaBanner.module.css'

export type CtaBannerMidProps = {
  id?: string
  badgeValue?: string | null
  badgeUnit?: string | null
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  buttonLabel?: string | null
  buttonUrl?: string | null
  className?: string
}

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const CtaBannerMid: React.FC<CtaBannerMidProps> = (block) => {
  const badgeValue = block.badgeValue || '30'
  const badgeUnit = block.badgeUnit || 'MIN'
  const eyebrow = block.eyebrow || 'Free growth session'
  const heading =
    block.heading || 'Not sure where to start? Talk it through with our team.'
  const description =
    block.description || '30 minutes, your store, clear next steps. No obligation.'
  const buttonLabel = block.buttonLabel || 'Book a call'
  const buttonUrl = block.buttonUrl || '/#calendar'

  return (
    <div className={`${styles.root} ${ctaBannerFont.className} ${ctaBannerFont.variable} not-prose ${block.className || ''}`}>
      <section className={`${styles.vb} ${styles.b1}`} aria-label="Book a free growth session">
        <div className={styles.badge} aria-hidden="true">
          <b>{badgeValue}</b>
          <span>{badgeUnit}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
        <a className={styles.btn} href={buttonUrl} data-cta-location="mid_page">
          {buttonLabel}
          <ArrowIcon />
        </a>
      </section>
    </div>
  )
}
