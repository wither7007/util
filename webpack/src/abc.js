const path = require('path');
const fs = require('fs');
const shell = require('shelljs')
const exec = require('child_process').exec
async function foo() {
await  exec("git config --global user.name", (err, stdout, stderr) => console.log(stdout))
await  console.log('dir name ', __dirname);
await  shell.echo('hello world');
}
foo();






  // k = true;
  // if (k === true) {
  //   for (i = 0; i < 10; i++) {

  //     fs.writeFile('mynewfile' + i + '.txt', 'Hello content!', function (err) {
  //       if (err) throw err;
  //       // console.log('Saved!');
  //     });
  //   }
  // }
  // fs.readdir('./', (err, files) => {
  //   if (err) {
  //     return console.log('error')
  //   }
  //   console.log()
  //   files.forEach((file) => {
  //     console.log(file)
  //     // a=shell.cat(file)
  //     //console.log(a)
  //   }
  //   )
  // })