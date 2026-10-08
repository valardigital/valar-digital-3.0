import type { Block } from 'payload'
import {
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

/** Lexical editor with table support (slash menu + toolbar). */
export const lexicalWithTable = lexicalEditor({
  features: ({ defaultFeatures }) => [...defaultFeatures, EXPERIMENTAL_TableFeature()],
})

/** Blog-style Lexical editor: defaults + tables + optional inline blocks + fixed toolbar. */
export const lexicalWithTableAndBlocks = (blocks: Block[]) =>
  lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      EXPERIMENTAL_TableFeature(),
      BlocksFeature({ blocks }),
      FixedToolbarFeature(),
    ],
  })
