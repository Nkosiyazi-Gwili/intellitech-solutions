/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' if you have it - this causes issues with SSR
  trailingSlash: false,
  // Enable if you need static optimization
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig