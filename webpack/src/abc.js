const fs = require('fs');
var shell = require('shelljs');
console.log('abc')
// fs.readFile('/etc/passwd', 'utf8', (err, data,) => {
//   if (err) console.log(err);
//   console.log(data);
// });
//shell.rm('-rf', '/home/steff007/p/util/webpack/del');

var source = fs.createReadStream('/home/steff007/p/util/webpack/del');
var dest = fs.createWriteStream('/home/steff007/p/util/webpack/del2');

source.pipe(dest);
source.on('end', function() { console.log('copied')});
source.on('error', function(err) { /* error */ });

function buildTree(startPath) {
   fs.readdir(startPath, (err, entries) => {
     console.log(entries);
   });
}

// buildTree("/home/steff007/p");