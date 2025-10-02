import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Your repo is 'pexdynamics' → project page
  basePath: "/pexdynamics",
  assetPrefix: "/pexdynamics/",
  
};

export default nextConfig;
