/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "avatars.githubusercontent.com",
      "cdn.sanity.io",
    ],
  },
};
