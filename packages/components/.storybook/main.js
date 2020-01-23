module.exports = {
  stories: ['../src/**/*.stories.(js|tsx|mdx)'],
  addons: [{
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {}
      },
  }]
}