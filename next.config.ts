import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        { source: "/app", destination: "http://127.0.0.1:5173/" },
        { source: "/app/", destination: "http://127.0.0.1:5173/" },
        { source: "/app/:path*", destination: "http://127.0.0.1:5173/:path*" },
      ];
    }
    return [];
  },
};

export default nextConfig;
