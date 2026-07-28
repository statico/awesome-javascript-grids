import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 300,
  // typescript@7 is the native port and no longer exposes the JS compiler
  // API that Next's built-in type checker uses, so shell out to tsc instead.
  experimental: { useTypeScriptCli: true },
};

export default nextConfig;
