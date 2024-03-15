const path = require("path");

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
      moduleIds: "hashed",
      splitChunks: {
        chunks: "all",
        minSize: 100000,
        maxSize: 500000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 1,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            },
          },
        },
      },
      minimize: true,
    },
  },
};
