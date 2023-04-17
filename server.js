var http = require('http')
var https = require('https')


const  options = {

}



module.exports = function (app) {
    var server = https.createServer(options,app)
    var httpServer = http.createServer(app)

}

function httpPort() {
    return normalizePort(process.env.PORT || 80);
}
function httpsPort() {
    return normalizePort(process.env.PORT || 443);
}


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}