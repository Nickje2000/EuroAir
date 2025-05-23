/** @type {import('next').NextConfig} */
const nextConfig = {
  // We're not using static export anymore since we need API routes
  // output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true
  },
  // Add this to ensure compatibility with Cloudflare Pages
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, crypto: false };
    return config;
  }
}

export default nextConfig
