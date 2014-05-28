var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var lines = str.split("\n");
console.log(lines.length-1);
