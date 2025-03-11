'use client'

import { useStore } from '@/lib/store/store'
import React, { ComponentProps } from 'react'
import { Button } from './ui/button'

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
}

export default function ClientButton({}: ButtonProps) {
  const { inputValue, increment } = useStore()
  return <Button onClick={() => increment()}>{inputValue}</Button>
}
