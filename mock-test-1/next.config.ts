import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
