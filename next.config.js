const path = require('path')


module.exports = {
    distDir: "_next",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
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
  };
