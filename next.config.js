const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')


module.exports = withCSS(
  withSass({
    distDir: "_next",
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID;
      } else {
        return `${new Date().getTime()}`;
      }
    },
    webpack: (config, {isServer}) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }

      return config
    }
  })
);
