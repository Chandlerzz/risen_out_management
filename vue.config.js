const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.export = {
  lintOnSave:false,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 当引入文件时默认先找.js后缀的文件，没找到再从左往右继续
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
  },
}
