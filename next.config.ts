import type { NextConfig } from 'next';

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.NODE_ENV === 'production' ? '/my-portfolio' : '');

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || '',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
