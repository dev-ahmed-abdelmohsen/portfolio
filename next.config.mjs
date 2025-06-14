/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['localhost'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
  // Remove problematic trace generation
  output: 'standalone',
  distDir: '.next',
  cleanDistDir: true,
};

export default nextConfig;