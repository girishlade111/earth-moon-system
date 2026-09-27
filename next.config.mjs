/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/earth-moon-system",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig