import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
