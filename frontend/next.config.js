/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000/api',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'http://localhost:5000/api'}/:path*`,
      },
    ];
  },
  images: {
    domains: ['localhost'],
    unoptimized: true, // For static export if needed
  },
}

module.exports = nextConfig