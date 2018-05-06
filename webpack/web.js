const fs=require('fs')
module.exports ={
    mode: 'production',
    entry: './src/abc.js',
    output: {
        path:  __dirname,
        filename: 'b.js'
    },
    node: {
        fs: 'empty'
      },
      target: 'node'
}