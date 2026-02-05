import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc", "picsum.photos"],
  },
}

module.exports = nextConfig

export default nextConfig;


