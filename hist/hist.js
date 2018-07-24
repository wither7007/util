fs = require('fs')
let uniq = a => [...new Set(a)];
fs.readFile('l', function(err, data){
    if (err) {
        return console.error(error)
    }

		re = /\s?\d+\s+/g
    let nData=data.toString().replace(re,'').trim().split('\n')
		uData=(uniq(nData))
    fData=uData.map(x=>x.trim())
    fData=fData.sort()
		fData.forEach(a=>console.log(a.trim()))
})
