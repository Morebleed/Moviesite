import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMDB_KEY: process.env.TMDB_KEY,
    TMDB_TOKEN: process.env.TMDB_TOKEN,
  },
};

export default nextConfig;
