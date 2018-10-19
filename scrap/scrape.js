const axios = require('axios')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom
// var pretty = require('pretty')
// var fs = require('fs')
// const murl = process.env.u
const murl = 'https://maps.googleapis.com/maps/api/geocode/json?&address=123%20N%20Washington%20Ave%2C%20Minneapolis%2C%20MN%2055401%2C%20USAi'
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
        console.log(response.data)
        // p=pretty(response.data);
        // console.log(p)
        // const dox = new JSDOM(response.data);
        // n(dox)
        // fs.writeFile("o", p, function(err) {
        //     if (err) {
        //         return console.err(err)
        //     }
        // })
 
    })
    
