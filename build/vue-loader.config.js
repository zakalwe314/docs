module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 4 versions']
    })
  ]
}