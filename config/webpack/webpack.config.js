// config/webpack/webpack.config.js
const { generateWebpackConfig } = require('shakapacker')

const customConfig = {
  resolve: {
    extensions: ['.css']
  }
}

module.exports = generateWebpackConfig()