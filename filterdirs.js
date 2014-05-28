var fs = require('fs');
var path = require('path');
module.exports = function (dir, extension, callback ) {
	fs.readdir(dir, function (err,list) {
		if (err) {
			return callback(err);
		}	
		var files = [];
		for (var i=0; i < list.length; ++i) {
			if (path.extname(list[ i ] ) === "." + extension) {
				files.push(list[i]);
			}
		}
		callback(null,files);
	});
}
