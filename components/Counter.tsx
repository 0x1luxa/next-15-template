'use client'

import { useStore } from '@/lib/store/store'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export default function Counter() {
  const router = useRouter()
  const { inputValue, increment } = useStore()
  const t = useTranslations('HomePage')
  return (
    <div>
      <p>Count: {inputValue}</p>
      <p className="text-9xl font-bold">{t('title')}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => router.push('/dashboard')}>
        Перейти на dashboard (состояние сохранится)
      </button>
      <button onClick={() => router.push('/')}>
        Перейти на главную
      </button>
    </div>
  )
}
