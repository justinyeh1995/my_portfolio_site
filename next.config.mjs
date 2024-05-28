/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        loader: 'custom',
        unoptimized: true,
    },
};

export default nextConfig;
