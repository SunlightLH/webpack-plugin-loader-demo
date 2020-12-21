const path = require("path");
const LogPlugin = require("./plugins/LogPlugin");
module.exports = {
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:path.resolve(__dirname,"./loaders/changeDeclare-loader.js"),
        options:{
          abc:123,
          dd:"456"
        }
      }
    ]
  },
  plugins:[
    new LogPlugin()
  ]
}