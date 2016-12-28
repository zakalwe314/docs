module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 3 versions']
    })
  ]
}