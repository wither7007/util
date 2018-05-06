const fs = require('fs');

function buildTree(startPath) {
  fs.readdir(startPath, (err, entries) => {
    console.log(entries);
  });
}

buildTree("c:/projects");