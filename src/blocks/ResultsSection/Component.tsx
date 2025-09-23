import type { ResultsSection as ResultsSectionProps } from '@/payload-types'

type Props = {
  className?: string
} & ResultsSectionProps

export const ResultsSection: React.FC<Props> = (block) => {
  return (
    <section className="pb-4 md:pb-16 md:px-0 px-4">
      <div className="container mx-auto bg-white p-6 md:py-10 md:px-8 rounded-3xl border">
        <div className="flex md:flex-row flex-col gap-4 md:gap-8 text-text-dark">
          <h3 className="text-2xl font-medium whitespace-nowrap leading-[1.3]">The Results</h3>
          <p className="leading-[1.6] tracking-[0.04rem]">{block.summary}</p>
        </div>
        <hr className="bg-border my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {block.detailedResults?.map((result, index) => (
            <div key={index}>
              <h3 className="text-[28px] font-medium leading-[1.5] text-text-dark">{result.percentage}</h3>
              <h3 className="text-xl text-text-dark">{result.metric}</h3>
              <p className="text-text-light mt-1 leading-[1.4] tracking-[0.04rem]">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 