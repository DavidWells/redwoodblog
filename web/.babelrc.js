module.exports = {
  extends: "../babel.config.js",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        useBuiltIns: "usage",
        corejs: 3,
        modules: false
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "babel-plugin-module-resolver",
      {
        alias: {
          src: "./src"
        }
      }
    ],
  ]
};
