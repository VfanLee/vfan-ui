const glob = require('glob')
const path = require('path')
const { VueloadePlugin, VueLoaderPlugin } = require('vue-loader')

const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log('files: ', files)
  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component: ', component)
    list[component] = `./${file}`
  }
  console.log('list: ', list)
}

makeList('packages/lib', list)

module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}
