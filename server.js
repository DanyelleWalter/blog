var http = require('http')
var https = require('https')
var fs = require('fs')

var privateKey = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('crt.pem', 'utf8');
var options = { key: privateKey, cert: certificate };

module.exports = function (app) {
    http.createServer(httpRedirect).listen(process.env.PORT || 80)
    https.createServer(options, app).listen(process.env.PORT || 443)
}

function httpRedirect(req, res) {
    res.writeHead(301, { 'Location': 'https://www.mixiaomu.com/' });
    console.log(res._header);
    res.end();
}