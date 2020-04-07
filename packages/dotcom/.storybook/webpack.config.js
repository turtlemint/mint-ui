const path = require("path");

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: [path.resolve(__dirname, "..", "node_modules")],
        use: [
            {
                loader: require.resolve('awesome-typescript-loader')
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader')
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};