/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory, so we need to set basePath if your repo name isn't your username
  // basePath: '/your-repo-name',
}

module.exports = nextConfig