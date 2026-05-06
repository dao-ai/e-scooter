import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/e-scooter",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
