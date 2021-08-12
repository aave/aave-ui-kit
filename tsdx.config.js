const svg = require('rollup-plugin-svg');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {

    config.plugins.push(
      svg({
        base64: true,
      }),
      postcss({
        plugins: [
          cssnano({
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
            }]
          }),
          autoprefixer({ grid: true }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );

    return config;
  },
};
