if (process.argv[2]) {
  murl = process.argv[2]
} else {
  // murl = 'https://www.nytimes.com'
  murl = 'https://www.mnlottery.com/winners/unclaimed-prizes'
}

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
console.log(murl)

//processing function
let n = (l) => {
  let m = [...l.window.document.querySelectorAll('*')]
  let rs = shuffle(m)
  let rss = rs.slice(0, 4)
  let n = groupBy(m, 'tagName')
  let tags = []
  for (let key in n) {
    tags.push(key + ": " + n[key].length)
  }
  console.log(tags)
  debugger
  let fileName = murl.replace(/^https:\/\/www\./, '')
  let wData = murl + '\n' + tags.sort().map(x => x + '\n').join("")
  require("fs").writeFile(
    fileName,
    murl + '\n' +
    tags.sort().map(x => x + '\n').join(""),
    function (err) {
      console.log(err ? 'Error :' + err : 'ok')
    }
  );
  // require('fs').writeFile(
  //   JSON.stringify(tags),
  //   function (err) {
  //     if (err) {
  //       console.error('Crap happens');
  //     }
  //   }
  // );
  let o = m.filter(x => x.tagName != 'SCRIPT')
  debugger
}

axios.get(murl)
  .then(function (response) {
    const dox = response.data;
    require("fs").writeFile('text.html', pretty(dox), err => {
      if (err) console.log(err)
    })
    const doxDom = new JSDOM(response.data);
    n(doxDom)
  })
  .catch(function (error) {
    console.log(error)
  })