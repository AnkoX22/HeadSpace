import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: true,
    webpack: (config, { isServer, dev }) => {
        // Enable source maps in development
        if (!isServer && dev) {
            config.devtool = 'source-map'
        }
        return config
    }
}

export default nextConfig