//   Utility to switch windows backslash \ to linux forward 


fs = require("fs")
const argv = require('yargs').argv
// console.log(argv)
fs.readFile('path', 'utf-8', function read(err, data) {
    if (err) { throw err }
    if (argv._[0]) {
        content = argv._[0]
    }
    else {
        content = data
    }
    const regex = /\\/g;
    const subst = `/`;
    const regex1 = /C:/g;
    const subst1 = `/c`;

    const result = content.replace(regex, subst).replace(regex1, subst1);
    console.log(result)
}
)