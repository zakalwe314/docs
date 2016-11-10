var stylus = require('stylus')
var fs = require('fs')
var path = require('path')
const resolve = file => path.resolve(__dirname, file)

var str = fs.readFile(resolve('../src/stylus/_critical.styl'), 'utf-8', (err, data) => {
  err && console.log(err)

  stylus(data, { compress: true })
    .render((err, css) => {
      err && console.log(err)
      
      fs.writeFile(resolve('../dist/styles.critical'), css, 'utf-8')
    })
})