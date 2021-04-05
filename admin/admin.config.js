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

    return config;
  },
};
