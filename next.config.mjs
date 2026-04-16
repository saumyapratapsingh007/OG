/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pond5.com",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
}

export default nextConfig