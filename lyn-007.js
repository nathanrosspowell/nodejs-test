var http = require('http');
http.get(process.argv[2], function (responce) {
    responce.setEncoding("utf8");
    responce.on("data", console.log );
});
