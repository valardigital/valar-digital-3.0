import { ctaBannerFont } from '../CtaBanners/font'
import styles from '../CtaBanners/CtaBanner.module.css'

export type CtaBannerEndProps = {
  id?: string
  desktopEyebrow?: string | null
  desktopHeading?: string | null
  desktopIntro?: string | null
  steps?:
    | {
        number: string
        title: string
        description: string
        id?: string | null
      }[]
    | null
  desktopButtonLabel?: string | null
  mobileEyebrow?: string | null
  mobileHeading?: string | null
  mobileIntro?: string | null
  checks?: { text: string; id?: string | null }[] | null
  mobileButtonLabel?: string | null
  buttonUrl?: string | null
  className?: string
}

const DEFAULT_STEPS = [
  {
    number: '01',
    title: 'Pick a time',
    description: 'Choose a slot that suits you and tell us a little about your store.',
  },
  {
    number: '02',
    title: 'Meet the team',
    description:
      "A focused 30-minute video call on your goals, your funnel and what's in the way.",
  },
  {
    number: '03',
    title: 'Leave with a plan',
    description: 'Clear, prioritised next steps, yours to keep whether or not we work together.',
  },
]

const DEFAULT_CHECKS = [
  'Where your store is losing sales',
  'Quick wins you can act on this month',
  'Honest advice, whether or not we work together',
]

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

export const CtaBannerEnd: React.FC<CtaBannerEndProps> = (block) => {
  const desktopEyebrow = block.desktopEyebrow || 'Your next step'
  const desktopHeading =
    block.desktopHeading || 'Ready to turn more visitors into customers?'
  const desktopIntro =
    block.desktopIntro ||
    "Book a free 30-minute session with our Shopify and CRO specialists. Bring your questions, and we'll bring the plan."
  const steps = block.steps?.length ? block.steps : DEFAULT_STEPS
  const desktopButtonLabel =
    block.desktopButtonLabel || 'Book your free 30-min session'
  const mobileEyebrow = block.mobileEyebrow || 'Free · 30 minutes'
  const mobileHeading = block.mobileHeading || 'Get expert eyes on your store.'
  const mobileIntro =
    block.mobileIntro ||
    'Book a 30-minute session with the Valar Ecom team and leave with a clear plan to grow.'
  const checks = block.checks?.length
    ? block.checks.map((c) => c.text)
    : DEFAULT_CHECKS
  const mobileButtonLabel = block.mobileButtonLabel || 'Book my session'
  const buttonUrl = block.buttonUrl || '/#calendar'

  return (
    <div className={`${styles.root} ${ctaBannerFont.className} ${ctaBannerFont.variable} not-prose ${block.className || ''}`}>
      {/* Desktop */}
      <section
        className={`${styles.vb} ${styles.b2}`}
        aria-label="Book a free 30-minute session"
      >
        <div className={styles.top}>
          <div>
            <div className={styles.eyebrow}>{desktopEyebrow}</div>
            <h2>{desktopHeading}</h2>
          </div>
          <p className={styles.intro}>{desktopIntro}</p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div className={styles.step} key={`step-${index}`}>
              <small>{step.number}</small>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <a className={styles.btn} href={buttonUrl} data-cta-location="end_page">
            {desktopButtonLabel}
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Mobile */}
      <section
        className={`${styles.vb} ${styles.b2m}`}
        aria-label="Book a free 30-minute session"
      >
        <div className={styles.eyebrow}>{mobileEyebrow}</div>
        <h2>{mobileHeading}</h2>
        <p>{mobileIntro}</p>
        <ul className={styles.checks}>
          {checks.map((text, index) => (
            <li key={`check-${index}`}>
              <i>✓</i>
              {text}
            </li>
          ))}
        </ul>
        <a className={styles.btn} href={buttonUrl} data-cta-location="end_page">
          {mobileButtonLabel}
          <ArrowIcon />
        </a>
      </section>
    </div>
  )
}
