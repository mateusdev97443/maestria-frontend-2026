import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: { unoptimized: true },
  basePath: '/maestria-frontend-2026', // Essencial para o GitHub Pages ler as cores e fontes [5]
};

export default nextConfig;
