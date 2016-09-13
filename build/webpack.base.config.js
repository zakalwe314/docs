const path = require('path')

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'firebase', 'lru-cache', 'es6-promise']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.js'
  },
  resolveLoader: {
    root: path.join(__dirname, '../node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, '../../vuetify/src/index'),
          path.resolve(__dirname, '../src')
        ],
        query: {
          presets: [['es2015', { modules: false }], 'stage-2']
        }
      },
      {
        test: /\.styl$/,
        loader: ['style', 'css', 'stylus']
      }
    ]
  },
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  }
}