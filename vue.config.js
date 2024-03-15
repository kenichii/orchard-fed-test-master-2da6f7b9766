const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/colors";
        `,
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".mjs", ".js", ".jsx", ".vue", ".json", ".wasm", ".scss"],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false, // Removes comments
            },
          },
        }),
      ],
    },
  },
};
