import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // API proxy to Python backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.API_URL || 'http://localhost:8000/:path*',
      },
    ];
  },
};

export default nextConfig;
