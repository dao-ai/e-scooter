import type { NextConfig } from "next";

/** GitHub Pages 项目站：自动从 GITHUB_REPOSITORY 推导 basePath */
function resolveBasePath(): string | undefined {
  const fromEnv = process.env.NEXT_BASE_PATH?.replace(/\/$/, "").trim();
  if (fromEnv) return fromEnv === "/" ? undefined : fromEnv;

  if (process.env.GITHUB_ACTIONS === "true") {
    const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
    if (repo) return `/${repo}`;
  }

  return undefined;
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
