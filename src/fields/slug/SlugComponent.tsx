'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { TextFieldClientProps } from 'payload'

import { useField, Button, TextInput, FieldLabel, useFormFields, useForm } from '@payloadcms/ui'

import { formatSlug } from './formatSlug'
import './index.scss'

type SlugComponentProps = {
  fieldToUse: string
  checkboxFieldPath: string
} & TextFieldClientProps

export const SlugComponent: React.FC<SlugComponentProps> = ({
  field,
  fieldToUse,
  checkboxFieldPath: checkboxFieldPathFromProps,
  path,
  readOnly: readOnlyFromProps,
}) => {
  const { label } = field
  const [isUpdating, setIsUpdating] = useState(false)

  const checkboxFieldPath = path?.includes('.')
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps

  const { value, setValue } = useField<string>({ path: path || field.name })
  const { dispatchFields } = useForm()

  // The value of the checkbox (lock state)
  const checkboxValue = useFormFields(([fields]) => {
    return fields[checkboxFieldPath]?.value as boolean
  })

  // The value of the field we're listening to for the slug (e.g., title)
  const targetFieldValue = useFormFields(([fields]) => {
    return fields[fieldToUse]?.value as string
  })

  // Auto-update slug when target field changes and lock is enabled
  useEffect(() => {
    if (checkboxValue && targetFieldValue && typeof targetFieldValue === 'string') {
      setIsUpdating(true)
      
      const formattedSlug = formatSlug(targetFieldValue)
      
      if (value !== formattedSlug && formattedSlug) {
        setValue(formattedSlug)
      }
      
      setIsUpdating(false)
    } else if (checkboxValue && (!targetFieldValue || targetFieldValue.trim() === '')) {
      // Clear slug if target field is empty and lock is enabled
      if (value !== '') {
        setValue('')
      }
    }
  }, [targetFieldValue, checkboxValue, setValue, value])

  const handleLock = useCallback(
    (e: React.MouseEvent<Element>) => {
      e.preventDefault()
      
      dispatchFields({
        type: 'UPDATE',
        path: checkboxFieldPath,
        value: !checkboxValue,
      })
    },
    [checkboxValue, checkboxFieldPath, dispatchFields],
  )

  const readOnly = readOnlyFromProps || checkboxValue

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} />
        
        <Button 
          className="lock-button" 
          buttonStyle="none" 
          onClick={handleLock}
          disabled={readOnlyFromProps}
        >
          {checkboxValue ? '🔒 Unlock' : '🔓 Lock'}
        </Button>
      </div>

      <TextInput
        value={value || ''}
        onChange={setValue}
        path={path || field.name}
        readOnly={Boolean(readOnly)}
        disabled={isUpdating}
        placeholder={checkboxValue ? 'Auto-generating...' : 'Enter custom slug'}
      />
      
      {checkboxValue && (
        <div className="slug-info">
          <small>Slug will automatically update from "{fieldToUse}" field</small>
        </div>
      )}
    </div>
  )
}
