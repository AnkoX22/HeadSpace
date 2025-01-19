import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: true,
    webpack: (config, { isServer, dev }) => {
        // Enable source maps in development
        if (!isServer && dev) {
            config.devtool = 'source-map'
        }

        // Add support for importing SVGs as React components
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config
    }
}

export default nextConfig