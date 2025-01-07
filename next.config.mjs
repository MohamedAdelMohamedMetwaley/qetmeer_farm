/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uliriqhyjshyioctjfwk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/productsImages/**",
      },
    ],
  },
};

export default nextConfig;
