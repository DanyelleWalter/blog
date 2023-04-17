module.exports.session = function () {
    return require("express-session")({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 800000 },
        name: 'ivan'
    })
}