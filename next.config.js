const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withSass(
  withLess(
    withCSS(
      withTypescript({
        webpack(config, options) {
          return config;
        }
      })
    )
  )
);
