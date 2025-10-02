import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const isProjectPage = repo && !/\.github\.io$/i.test(repo);

const nextConfig: NextConfig = {
  /* config options here */
 output: "export",                 // creates ./out for GitHub Pages
  images: { unoptimized: true },    // GH Pages can’t run the Next.js image optimizer
  trailingSlash: true,              // fixes 404s on refresh in nested routes
  basePath: process.env.GITHUB_PAGES && isProjectPage ? `/${repo}` : undefined,
  assetPrefix: process.env.GITHUB_PAGES && isProjectPage ? `/${repo}/` : undefined,
};

export default nextConfig;
