const admin = require('firebase-admin')
const serviceAccount = require('./serviceKey.json')

fs = require('fs')
let uniq = a => [...new Set(a)];

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore()

let dbRef= db.collection('History').doc('first')
fs.readFile('l', function(err, data){
    if (err) {
        return console.error(error)
    }

		re = /\s?\d+\s+/g
    let nData=data.toString().replace(re,'').trim().split('\n')
		uData=(uniq(nData))
    fData=uData.map(x=>x.trim())
    fData=fData.sort()
        // fData.forEach(a=>console.log(a.trim()))
    
    var quoteData = {
        arrayExample: fData 
        }
    dbRef
    .set(quoteData).then(()=> {
        console.log('new quote written '+Date())
    })
    })
    fs.readFile('temp.html', function(err, data){
        if (err) {
        return console.error(error)
        }
        console.log(data.toString())
    })
    dbRef
    .get().then((doc)=>{
        myArr=doc.data().arrayExample
        myArr.forEach(a=>console.log(`<div class="grid-item">${a}</div>`))
})
console.log('</div>')