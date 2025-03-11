import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { Link } from 'lucide-react'
import { getQueryClient } from '../get-query-client'
import { pokemonOptions } from '../pokemon'
import { PokemonInfo } from '../pokemon-info'

export default function Marketing() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(pokemonOptions)
  return (
    <div>
      <h1>Marketing</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonInfo />
      </HydrationBoundary>
      <Link href="/about">О нас</Link>
    </div>
  )
}
