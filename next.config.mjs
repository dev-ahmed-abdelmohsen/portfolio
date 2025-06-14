/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // إزالة swcMinify لأنه deprecated في Next.js 15
  // swcMinify: true, // هذا السطر محذوف
  
  // تحسين الأداء
  compress: true,
  poweredByHeader: false,
  
  // إعدادات الإنتاج
  productionBrowserSourceMaps: false,
  
  // تحسين الـ bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;