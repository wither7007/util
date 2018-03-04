// fs = require('fs')
// fs.rename('a', 'b', (err) => {
//   if (err) throw err;
//   fs.stat('b', (err, stats) => {
//     if (err) throw err;
//     console.log(`stats: ${JSON.stringify(stats)}`);
//   });
// });

// var fs = require("fs");

// console.log("Going to get file info!");
// fs.stat('p2.json', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("Got file info successfully!");
   
//    // Check file type
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });
var path=require('path')
var fs = require('fs')
// var directoryPath=path.join(__dirname, './')
var directoryPath="c:\\"
console.log(directoryPath)
fs.readdir(directoryPath, (err, files)=>{
    if (err) {
        return console.log('unable to scan')
    }
    files.forEach(element => {
        console.log(element)
        
    });
    
})