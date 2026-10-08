import type {
  TableOfContents as TableOfContentsProps,
  ContentWithMedia as ContentWithMediaProps,
  HeroSection as HeroSectionProps,
  ResultsSection as ResultsSectionProps,
  InsightsSection as InsightsSectionProps,
  ProcessSection as ProcessSectionProps,
  BeforeAfterSection as BeforeAfterSectionProps,
  ProcessDetailsSection as ProcessDetailsSectionProps,
  OutcomeSection as OutcomeSectionProps,
  InsightsListSection as InsightsListSectionProps,
  DataTable as DataTableType,
  CtaBannerMid as CtaBannerMidType,
  CtaBannerEnd as CtaBannerEndType,
  VideoTestimonial as VideoTestimonialType,
} from '@/payload-types'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import { ContentWithMedia } from '@/blocks/ContentWithMedia/Component'
import { TableOfContents } from '@/blocks/TableOfContents/Component'
import { DotSeparator } from '@/blocks/DotSeparator/Component'
import { internalDocToHref } from '@/components/RichText/converters/internalLink'
import { headingConverter } from '@/components/RichText/converters/headingConverter'
import { uploadConverter } from '@/components/RichText/converters/uploadConverter'
import { HeroSection } from '@/blocks/HeroSection/Component'
import { ResultsSection } from '@/blocks/ResultsSection/Component'
import { InsightsSection } from '@/blocks/InsightsSection/Component'
import { ProcessSection } from '@/blocks/ProcessSection/Component'
import { BeforeAfterSection } from '@/blocks/BeforeAfterSection/Component'
import { ProcessDetailsSection } from '@/blocks/ProcessDetailsSection/Component'
import { OutcomeSection } from '@/blocks/OutcomeSection/Component'
import { InsightsListSection } from '@/blocks/InsightsListSection/Component'
import { DataTable } from '@/blocks/DataTable/Component'
import { CtaBannerMid } from '@/blocks/CtaBannerMid/Component'
import { CtaBannerEnd } from '@/blocks/CtaBannerEnd/Component'
import { VideoTestimonial } from '@/blocks/VideoTestimonial/Component'

// Extend NodeTypes to include all block node payloads
 type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      | TableOfContentsProps
      | ContentWithMediaProps
      | HeroSectionProps
      | ResultsSectionProps
      | InsightsSectionProps
      | ProcessSectionProps
      | BeforeAfterSectionProps
      | ProcessDetailsSectionProps
      | OutcomeSectionProps
      | InsightsListSectionProps
      | DataTableType
      | CtaBannerMidType
      | CtaBannerEndType
      | VideoTestimonialType
      | { id?: string }
    >

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({defaultConverters}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({internalDocToHref}),
  ...headingConverter,
  ...uploadConverter,
  blocks: {
    contentWithMedia: ({node}) => <ContentWithMedia {...node.fields} />,
    tableOfContents: ({node}) => <TableOfContents {...node.fields} />,
    dotSeparator: () => <DotSeparator />,
    heroSection: ({node}) => <HeroSection {...node.fields} />,
    resultsSection: ({node}) => <ResultsSection {...node.fields} />,
    insightsSection: ({node}) => <InsightsSection {...node.fields} />,
    insightsListSection: ({node}) => <InsightsListSection {...{...node.fields, items: (node.fields as any).items ?? (node.fields as any).insights}} />,
    processSection: ({node}) => <ProcessSection {...node.fields} />,
    beforeAfterSection: ({node}) => <BeforeAfterSection {...node.fields} />,
    processDetailsSection: ({node}) => <ProcessDetailsSection {...node.fields} />,
    outcomeSection: ({node}) => <OutcomeSection {...node.fields} />,
    dataTable: ({node}: { node: SerializedBlockNode<DataTableType> }) => (
      <DataTable {...node.fields} />
    ),
    ctaBannerMid: ({node}: { node: SerializedBlockNode<CtaBannerMidType> }) => (
      <CtaBannerMid {...node.fields} />
    ),
    ctaBannerEnd: ({node}: { node: SerializedBlockNode<CtaBannerEndType> }) => (
      <CtaBannerEnd {...node.fields} />
    ),
    videoTestimonial: ({node}: { node: SerializedBlockNode<VideoTestimonialType> }) => (
      <VideoTestimonial {...node.fields} />
    ),
  }
})
