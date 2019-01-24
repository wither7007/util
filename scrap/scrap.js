// const fs = require('fs')
const axios = require('axios')
const {
  groupBy
} = require('./groupBy')
const {
  shuffle
} = require('./groupBy')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const jsdom = require('jsdom')
const {
  JSDOM
} = jsdom
var pretty = require('pretty')
const murl = 'https://www.nytimes.com'
console.log(murl)
let n = (l) => {
  let m = [...l.window.document.querySelectorAll('*')]
  let rs = shuffle(m)
  let rss = rs.slice(0, 4)
  let n = groupBy(m, 'tagName')
  let tags = []
  for (let key in n) {
    tags.push(key + ": " + n[key].length)
  }
  debugger
  console.log(tags)
  require("fs").writeFile(
    murl.replace(/^https:\/\/www\./, ''),
    murl + '\n' +
    tags.sort().map(x => x + '\n').join(""),
    function (err) {
      console.log(err ? 'Error :' + err : 'ok')
    }
  );
  require('fs').writeFile(

    './my.json',

    JSON.stringify(tags),

    function (err) {
      if (err) {
        console.error('Crap happens');
      }
    }
  );
  let o = m.filter(x => x.tagName != 'SCRIPT')
  debugger
}
axios.get(murl)
  .then(function (response) {
    const dox = new JSDOM(response.data);
    n(dox)

  })