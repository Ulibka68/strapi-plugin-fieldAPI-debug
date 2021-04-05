module.exports = {
  webpack: (config, webpack) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Allow scss modules
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".scss"],
    };

    // Configure a SASS loader
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: "sass-loader",
          options: {
            // eslint-disable-next-line global-require
            implementation: require("sass"),
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: true,
          presets: [
            require.resolve("@babel/preset-env"),
            require.resolve("@babel/preset-react"),
          ],
          plugins: [
            require.resolve("@babel/plugin-proposal-class-properties"),
            require.resolve("@babel/plugin-syntax-dynamic-import"),
            require.resolve("@babel/plugin-transform-modules-commonjs"),
            require.resolve("@babel/plugin-proposal-async-generator-functions"),
            [
              require.resolve("@babel/plugin-transform-runtime"),
              {
                helpers: true,
                regenerator: true,
              },
            ],
          ],
        },
      },
    });

    console.log(config.module.rules);

    return config;
  },
};
