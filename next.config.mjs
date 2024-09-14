/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/stories',
                destination: '/stories/index.html',
            },
            {
                source: '/stories/:path*',
                destination: '/stories/:path*',
            },
            {
                source: '/bundles/gallery-slider',
                destination: '/bundles/gallery-slider/index.html',
            },
            {
                source: '/bundles/gallery-slider/:path*',
                destination: '/bundles/gallery-slider/:path*',
            },

        ]
    }
}

export default nextConfig
