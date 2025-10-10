import type { HeroSection as HeroSectionProps } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import bulbIcon from '@/assets/images/services/lightBulb.png'
import RichText from '@/components/RichText'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  className?: string
  clientLabel?: string | null
  industryLabel?: string | null
  scopeLabel?: string | null
  timeframeLabel?: string | null
} & HeroSectionProps

export const HeroSection: React.FC<Props> = (block) => {
  return (
    <section className="py-4 md:py-6 md:px-0 px-4">
      <div className="container mx-auto">
        <Link href="/caseStudy" className="flex items-center gap-2 text-text-dark hover:font-medium hover:cursor-pointer mb-6 md:mb-10 tracking-[0.04rem] text-sm md:text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-[2px] rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h16m-6-6l6 6-6 6" />
          </svg>
          Back to Case Studies
        </Link>

        <h1 className="font-medium text-text-dark leading-[1.2] md:leading-[1.6] text-[28px] md:text-[40px]">
          {typeof block.title === 'object' && (block.title as any)?.root ? (
            <RichText data={block.title as unknown as SerializedEditorState} />
          ) : (
            String(block.title)
          )}
        </h1>

        <div className="flex gap-6 mt-6 md:mt-10 flex-col md:flex-row">
          <div className="bg-primary p-6 md:py-10 md:px-8 rounded-3xl space-y-4 md:space-y-[47px] line-height-[1.6] text-white sm:min-w-[408px]">
            <div className="space-y-2">
              <p>{block.clientLabel || 'Client'}</p>
              <p className="font-medium tracking-[0.04rem]">{block.client}</p>
            </div>
            <div className="space-y-2">
              <p>{block.industryLabel || 'Industry'}</p>
              <p className="font-medium tracking-[0.04rem]">{block.industry}</p>
            </div>
            <div className="space-y-2">
              <p>{block.scopeLabel || 'Scope'}</p>
              <p className="font-medium tracking-[0.04rem]">{block.scope}</p>
            </div>
            <div className="space-y-2">
              <p>{block.timeframeLabel || 'Timeframe'}</p>
              <p className="font-medium tracking-[0.04rem]">{block.timeframe}</p>
            </div>
          </div>
          <div className="border rounded-3xl space-y-4 p-6 md:py-10 md:px-8 bg-white">
            <div className="flex items-center justify-center size-13 bg-background-subtle rounded-[4px] border mb-4">
              <Image src={bulbIcon} alt="Icon 3" width={100} height={100} className="size-7" />
            </div>
            <h3 className="font-medium text-2xl leading-[1.3] mb-4">Quick Overview</h3>
            <div className="space-y-2 tracking-[0.04rem] leading-[1.6]">
              <h4 className="text-primary font-medium">The challenge</h4>
              {typeof block.challenge === 'object' && (block.challenge as any)?.root ? (
                <RichText data={block.challenge as unknown as SerializedEditorState} />
              ) : (
                <p>{String(block.challenge ?? '')}</p>
              )}
            </div>
            <div className="space-y-2 tracking-[0.04rem] leading-[1.6]">
              <h4 className="text-primary font-medium">What we did</h4>
              {typeof block.solution === 'object' && (block.solution as any)?.root ? (
                <RichText data={block.solution as unknown as SerializedEditorState} />
              ) : (
                <p>{String(block.solution ?? '')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 