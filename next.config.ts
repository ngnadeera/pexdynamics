import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "",           // ensure it's blank
  assetPrefix: undefined, // ensure no prefix
  // If you want trailing slash (optional):
  // trailingSlash: true,
};

export default nextConfig;
