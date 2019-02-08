module.exports = {
  mode: "production",
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "b.js"
  },
  node: {
    fs: "empty"
  },
  target: "node"
}