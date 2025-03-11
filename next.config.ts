import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    // Настройка для SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['raw.githubusercontent.com'], // need for images from pokeapi
  },
}

export default nextConfig
