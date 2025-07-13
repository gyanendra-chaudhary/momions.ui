import React from 'react';
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Select } from './Select'

interface InputFieldProps {
  type?: 'text' | 'email' | 'password' | 'textarea' | 'select'
  label: string
  name: string
  options?: { value: string; label: string }[]
  [key: string]: any
}

export const InputField = ({
  type = 'text',
  label,
  name,
  options,
  ...props
}: InputFieldProps) => {
  const commonProps = {
    name,
    label,
    ...props,
  }

  switch (type) {
    case 'textarea':
      return <Textarea {...commonProps} />
    case 'select':
      return <Select {...commonProps} options={options || []} />
    default:
      return <Input type={type} {...commonProps} />
  }
}