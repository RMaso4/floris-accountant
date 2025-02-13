/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.floris.ac'],
  },
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },
}

module.exports = nextConfig