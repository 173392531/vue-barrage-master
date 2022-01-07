module.exports = {
  lintOnSave: false,
  publicPath: '/vue-barrage',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}