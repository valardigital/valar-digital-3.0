import { TableOfContents } from '@/blocks/TableOfContents/Component'
import { ContentWithMedia } from '@/blocks/ContentWithMedia/Component'
import { DotSeparator } from '@/blocks/DotSeparator/Component'
import { HeroSection } from '@/blocks/HeroSection/Component'
import { ResultsSection } from '@/blocks/ResultsSection/Component'
import { InsightsSection } from '@/blocks/InsightsSection/Component'
import { InsightsListSection } from '@/blocks/InsightsListSection/Component'
import { ProcessSection } from '@/blocks/ProcessSection/Component'
import { BeforeAfterSection } from '@/blocks/BeforeAfterSection/Component'
import { ProcessDetailsSection } from '@/blocks/ProcessDetailsSection/Component'
import { OutcomeSection } from '@/blocks/OutcomeSection/Component'
import type { 
  ContentWithMedia as ContentWithMediaType, 
  TableOfContents as TableOfContentsType,
  HeroSection as HeroSectionType,
  ResultsSection as ResultsSectionType,
  InsightsSection as InsightsSectionType,
  ProcessSection as ProcessSectionType,
  BeforeAfterSection as BeforeAfterSectionType,
  ProcessDetailsSection as ProcessDetailsSectionType,
  OutcomeSection as OutcomeSectionType
} from '@/payload-types'
import { Fragment } from 'react'

const blockComponents = {
  tableOfContents: TableOfContents,
  contentWithMedia: ContentWithMedia,
  dotSeparator: DotSeparator,
  heroSection: HeroSection,
  resultsSection: ResultsSection,
  insightsSection: InsightsSection,
  insightsListSection: InsightsListSection,
  processSection: ProcessSection,
  beforeAfterSection: BeforeAfterSection,
  processDetailsSection: ProcessDetailsSection,
  outcomeSection: OutcomeSection,
}

export const RenderBlocks: React.FC<{
  blocks: (
    ContentWithMediaType | 
    TableOfContentsType | 
    { blockType: 'dotSeparator' } |
    HeroSectionType |
    ResultsSectionType |
    InsightsSectionType |
    ProcessSectionType |
    BeforeAfterSectionType |
    ProcessDetailsSectionType |
    OutcomeSectionType
  )[]
}> = (props) => {
  const {blocks} = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return <Fragment>
      {blocks.map((block, index) => {
        const {blockType} = block

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType]

          if (Block) {
            return <div key={index}>
              {/*@ts-expect-error*/}
              <Block {...block} />
            </div>
          }
          return null
        }

      })}
    </Fragment>
  }
  return null
}