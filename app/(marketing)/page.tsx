import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { getQueryClient } from '../get-query-client'
import { pokemonOptions } from '../pokemon'
import { PokemonInfo } from '../pokemon-info'

import Link from 'next/link'

export default function Marketing() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(pokemonOptions)
  const t = useTranslations()
  return (
    <div>
      <h1>Marketing</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonInfo />
      </HydrationBoundary>
      <Link href="/about" className="text-9xl font-bold">
        {t('o-nas')}
      </Link>
    </div>
  )
}
