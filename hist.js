fs = require('fs')
let uniq = a => [...new Set(a)];
fs.readFile('l', function(err, data){
    if (err) {
        return console.error(error)
    }

		re = /\s?\d+\s+/g
    let nData=data.toString().replace(re,'').trim().split('\n')
		uData=(uniq(nData))
//		nData=mData.replace(re,'').trim().split('\n').trim()
		uData.forEach(a=>console.log(a.trim()))
   // console.log(uniq(nData))
})
