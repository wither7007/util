const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
var pretty = require('pretty')
var fs = require('fs')
const murl = process.env.u
console.log(murl)

n = (l) => {
    m = [...l.window.document.querySelectorAll('*')]
    debugger
    n = m.reduce((acc, item) => {


    }
        , {})
    // m.forEach(element => {
    //     console.log(element.tagName)
    // });
    // console.log(l)
    console.log('done')
}
axios.get(murl)
    .then(function (response) {
        p=pretty(response.data);
        const dox = new JSDOM(response.data);
        n(dox)
        fs.writeFile("o", p, function(err) {
            if (err) {
                return console.err(err)
            }
        })
 
    })
    
