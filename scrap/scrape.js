const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
var pretty = require('pretty')
var fs = require('fs')
const murl = "https://example.com"

axios.get(murl)
    .then(function (response) {
        // console.log(pretty(response.data))
        let myText=new JSDOM(response.data)
       n(myText) 

        // console.log(myText.window.document.querySelector("p").innerHTML)
    }
    )
n=(l)=>{ }
console.log('done')

