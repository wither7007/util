fs = require('fs')
let uniq = a => [...new Set(a)]; //function to unique a
fs.readFile('l', function(err, data){
    if (err) {
        return console.error(error)
    }

		re = /\s?\d+\s+/g // replace blanks
    let nData=data.toString().replace(re,'').trim().split('\n')
    fData=nData.map(x=>x.trim())
		uData=(uniq(fData))
    uData=uData.sort()
		uData.forEach(a=>console.log(a.trim()))
})
