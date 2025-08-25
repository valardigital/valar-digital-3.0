import type { OutcomeSection as OutcomeSectionProps } from '@/payload-types'

type Props = {
  className?: string
} & OutcomeSectionProps

export const OutcomeSection: React.FC<Props> = (block) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-0 space-y-8 md:space-y-12">
        <div className="space-y-4">
          <h2 className="uppercase text-text-dark text-2xl md:text-[32px] font-medium">Outcome</h2>
          <p className="text-text-light tracking-[0.04rem] leading-[1.6]">{block.summary}</p>
        </div>

        <div className="border border-border rounded-3xl p-6 flex md:flex-row flex-col">
          {block.keyResults?.map((result, index) => (
            <div key={index} className="flex-1">
              <div className="bg-primary/5 py-2 px-4 mb-4 rounded-[8px] leading-[1.5]">
                <h3 className="text-[28px] font-medium leading-8">
                  {result.percentage}<br/>
                  <span className="font-normal text-xl">{result.metric}</span>
                </h3>
              </div>
              <p className="text-text-light tracking-[0.04rem] leading-[1.6]">{result.description}</p>
              {index < (block.keyResults?.length || 0) - 1 && (
                <div className="my-[28px] md:mx-8 relative after:content-[''] after:absolute after:left-0 after:right-0 md:after:top-0 md:after:bottom-0 after:h-[1px] md:after:h-full md:after:w-[1px] after:bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="uppercase text-text-dark text-2xl md:text-[32px] font-medium">TAKEAWAYS</h2>
          <p className="text-text-dark tracking-[0.04rem] leading-[1.6]">{block.takeaways}</p>
        </div>
      </div>
    </section>
  )
} 