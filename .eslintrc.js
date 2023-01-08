module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:jest/all",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
