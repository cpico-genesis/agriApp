module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            app: "./src/app",
            assets: "./src/assets",
            features: "./src/features",
            services: "./src/services",
            theme: "./src/theme",
            typescript: "./src/typescript",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["./src"],
        },
      ],
    ],
  };
};
