var fs = require('fs');

var sample = fs.readFileSync('sample.txt','utf8');
// utf8 is encoding format
console.log(sample);

// this line of code creates an another file output.txt and writes the data in sample into the log.
fs.writeFileSync('output.txt',sample);