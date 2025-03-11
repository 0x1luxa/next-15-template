'use client'

import { pokemonOptions } from '@/app/pokemon'
import { useSuspenseQuery } from '@tanstack/react-query'
import Image from 'next/image'

export function PokemonInfo() {
  const { data } = useSuspenseQuery(pokemonOptions)

  return (
    <div>
      <figure>
        <Image
          src={data.sprites.front_shiny}
          alt={data.name}
          width={200}
          height={200}
        />
        <h2>I&apos;m {data.name}</h2>
      </figure>
    </div>
  )
}
