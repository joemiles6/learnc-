const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../backend/src/public'),
    devServer: {
        proxy: {
         '/user': {
             target: 'http://localhost:3000'
         }
        }
    }
}