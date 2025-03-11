import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  // Get locale from cookies or fall back to the default locale
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')
  const locale = localeCookie?.value || 'en'

  return {
    locale,
    messages: (await import(`../public/locales/${locale}.json`))
      .default,
  }
})
