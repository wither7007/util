const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
var pretty = require('pretty')
var fs = require('fs')
const murl = "https://www.example.com"

n = (l) => {
    m=[...l.window.document.querySelectorAll('*')]
    n=m.reduce((acc, item)=>{
        

    }
    ,{})
    m.forEach(element => {
        console.log(element.tagName)
    });
    // console.log(l)
    console.log('done')
}
axios.get(murl)
    .then(function (response) {
        // console.log(pretty(response.data))
        let myText = new JSDOM(response.data)
        n(myText)

        // console.log(myText.window.document.querySelector("p").innerHTML)
    }
    )