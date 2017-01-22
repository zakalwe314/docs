module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 4 versions']
    })
  ],
  buble: {
    objectAssign: 'Object.assign',
  },
}