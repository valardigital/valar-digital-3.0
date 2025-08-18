import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from './formatSlug'

type Overrides = {
  slugOverrides?: Partial<TextField>
  checkboxOverrides?: Partial<CheckboxField>
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField]

/**
 * Creates a slug field system with automatic formatting and lock/unlock functionality
 * @param fieldToUse - The field name to use as source for slug generation (defaults to 'title')
 * @param overrides - Optional overrides for slug and checkbox fields
 * @returns Array containing [slugField, checkboxField]
 */
export const slugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides

  // Hidden checkbox field to control lock/unlock state
  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    type: 'checkbox',
    defaultValue: true, // Start with locked state (auto-update enabled)
    admin: {
      hidden: true, // Hidden from admin interface
      position: 'sidebar',
    },
    ...checkboxOverrides,
  }

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const slugField: TextField = {
    name: 'slug',
    type: 'text',
    index: true, // Index for better search performance
    label: 'Slug',
    required: true,
    unique: true,
    admin: {
      position: 'sidebar',
      description: `Auto-generated from ${fieldToUse} field. Click lock/unlock to control updates.`,
      ...(slugOverrides?.admin || {}),
      components: {
        Field: {
          path: '@/fields/slug/SlugComponent#SlugComponent',
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name,
          },
        },
      },
    },
    hooks: {
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
    ...(slugOverrides || {}),
  }

  return [slugField, checkBoxField]
}
