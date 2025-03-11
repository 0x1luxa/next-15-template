'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

const locales = ['en', 'ru']

export default function LanguageSwitcher() {
  const router = useRouter()

  const setLanguage = (locale: string) => {
    // Set the cookie
    document.cookie = `locale=${locale};path=/;max-age=31536000`
    // Refresh the page to apply the new language
    router.refresh()
  }

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <Button
          key={locale}
          variant="outline"
          size="sm"
          onClick={() => setLanguage(locale)}
        >
          {locale === 'en' ? 'English' : 'Русский'}
        </Button>
      ))}
    </div>
  )
}
