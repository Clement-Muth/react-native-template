module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        alias: {
          components: "./src/components",
          common: "./src/common",
          routes: "./src/routes",
          types: "./src/types",
          utils: "./src/utils",
          views: "./src/views",
          libraries: "./src/libraries",
          pages: "./src/pages"
        }
      }
    ],
    "react-native-reanimated/plugin"
  ]
};
