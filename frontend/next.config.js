/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // If you're using static export
  trailingSlash: true,
  distDir: '.next',
  // Add if using static export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig