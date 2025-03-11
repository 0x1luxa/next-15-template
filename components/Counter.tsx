'use client'

import { useStore } from '@/lib/store/store'
import { useRouter } from 'next/navigation'

export default function Counter() {
  const router = useRouter()
  const { inputValue, increment } = useStore()

  return (
    <div>
      <p>Count: {inputValue}</p>
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
