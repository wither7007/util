const axios=require('axios')
const jsdom = require('jsdom')
const {JSDOM} = jsdom
var pretty = require('pretty')
var fs=require('fs')

axios.get('https://umn.edu')
    .then(response=>console.log(pretty(response.data)))
// var text=fs.readFileSync('wal','utf8')
// const dom = new JSDOM(text)
// console.log(pretty(dom.window.document.querySelector('script').innerHTML))
//console.log(pretty(text))
// let username = 'wither7007'
// axios.get('https://api.github.com/users/' + username)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });  