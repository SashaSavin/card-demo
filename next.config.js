/** @type {import('next').NextConfig} */

// const basePath = "/card-demo"

const basePath = process.env.NODE_ENV === "production"

const nextConfig = {
  // basePath,
  assetPrefix: basePath ? "/card-demo/" : "",
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
}

module.exports = nextConfig
