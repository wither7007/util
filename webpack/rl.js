var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(__dirname+'/sample.txt'),
});
var lineCounter = 0; var wantedLines = [];
lineReader.on('line', function (line) {
  lineCounter++;
  wantedLines.push(line);
  if(lineCounter==2){lineReader.close();}
});
lineReader.on('close', function() {
  console.log(wantedLines);
  process.exit(0);
});
