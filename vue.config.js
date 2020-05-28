const autoprefixer = require('autoprefixer')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? './' : '/',
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer()
        ]
      }
    }
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 9696,
    https: false,
    open: false
  }
}
