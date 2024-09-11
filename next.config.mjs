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
                source: '/bundles/:component',
                destination: '/components/:component/index.html',
            },
            {
                source: '/bundles/:component*',
                destination: '/components/:component*',
            },

        ]
    }
}

export default nextConfig
