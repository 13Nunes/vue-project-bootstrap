module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',

  devServer: {
    port: 8080,
    hot: true
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          $PRIMARY: ${process.env.VUE_APP_TPL_PRIMARY_COLOR};
        `
      }
    }
  }
}