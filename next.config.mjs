/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minio-w9cs7x7mnuwctiv2hjuo6m5s.185.201.8.71.sslip.io",
        pathname: "/profile-photos/**",
      },
    ],
  },
};

export default nextConfig;
