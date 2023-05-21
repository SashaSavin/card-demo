/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === "production" ? "/card-demo" : ""

const nextConfig = {
  basePath,
  assetPrefix: `${basePath}/`,
  reactStrictMode: true,
  // output: "export",
  images: { unoptimized: true },
}

module.exports = nextConfig
