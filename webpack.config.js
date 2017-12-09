const path = require("path");
const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new FlowStatusWebpackPlugin({ failOnError: true }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "eslint-loader",
            options: {
              fix: true,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["react-svg-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "src")
  }
};
