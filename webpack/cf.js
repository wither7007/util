var crf = function (path, fileName, message) {
    var fs = require('fs');
    var stream = fs.createWriteStream(path + fileName);
    stream.once('open', function (fd) {
        stream.write(message);
        stream.end();
    });

};
debugger
console.log('done')
