// right at the top of the file where you are declaring all other plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      "../../theme.config$": path.join(__dirname, "/semantic-ui/theme.config"),
      "../semantic-ui/site": path.join(__dirname, "/semantic-ui/site")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        }),
        test: /\.less$/
      }
    ]
  }
};