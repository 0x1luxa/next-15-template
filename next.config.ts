import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

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

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
