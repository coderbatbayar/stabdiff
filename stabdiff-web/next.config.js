/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "picsum.photos",
      "upload.wikimedia.org",
      "upload.wikimedia",
      "upload"
    ]
  }
};

module.exports = nextConfig;
