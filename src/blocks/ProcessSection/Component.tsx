import type { ProcessSection as ProcessSectionProps } from '@/payload-types'

type Props = {
  className?: string
} & ProcessSectionProps

export const ProcessSection: React.FC<Props> = (block) => {
  return (
    <section className="bg-background-muted py-8 md:pt-16 px-4 md:px-8">
      <div className="container mx-auto bg-white p-6 md:py-10 md:px-8 rounded-3xl border">
        <h5 className="leading-[1.3] text-primary uppercase font-medium mb-4 md:mb-6">Turning insights into action</h5>
        <div className="flex md:flex-row flex-col gap-4 md:gap-12">
          <div className="flex-1">
            <h2 className="font-medium text-text-dark text-2xl md:text-[32px] leading-[1.3]">What we changed, and how it improved the experience</h2>
          </div>
          <div className="flex-1 leading-[1.6] tracking-[0.04rem]">
            <p>{block.summary}</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[2.5px] h-[80px] mx-auto bg-[linear-gradient(180deg,transparent_0%,rgba(7,80,153,0.08)_20%,rgba(7,80,153,0.2)_50%,rgba(7,80,153,0.08)_80%,transparent_100%)]" />
    </section>
  )
} 