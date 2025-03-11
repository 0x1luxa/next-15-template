import Counter from '@/components/Counter'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function About() {
  const t = useTranslations('HomePage')
  const locale = useLocale()

  return (
    <div>
      {locale}
      <h1 className="text-9xl">{t('title')}</h1>
      <Counter />
      <Link href="/">{t('glavnaya')}</Link>
      <Link href="/dashboard">{t('dashboard')}</Link>
    </div>
  )
}
