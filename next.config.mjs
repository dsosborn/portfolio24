/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["localhost", "cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
