var fs = require('fs');
fs.readFile(process.argv[2],function (err,res) {
	console.log(res.toString().split("\n").length-1);
});
