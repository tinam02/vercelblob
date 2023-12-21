/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['public.blob.vercel-storage.com',"https://vercelblob-hfuq8fkbv-tinam02.vercel.app"], remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
