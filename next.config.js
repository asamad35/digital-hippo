/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digital-hippo-ecom.up.railway.app',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'digital-hippo-2375.onrender.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'digital-hippo.netlify.app',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
