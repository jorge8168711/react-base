const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    postcssCustomProperties({ preserve: false }),
    require('cssnano')({ preset: 'default' }),
  ],
};
