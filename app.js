// 引入外部模块
var express = require('express')
var app = express()
var middleware = require('./middleware')
var createError = require('http-errors')
// 设置模板属性
app.set('views', 'themes');
app.set('view engine', 'ejs');

// 使用session中间件
app.use(middleware.session())

// 处理JSON请求
app.use(express.json())

// 序列化字符串
app.use(express.urlencoded({ extended: false }))

// 部署静态资源
app.use(express.static('static'))

// 载入路由
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

// 开启服务
require('./server')(app)

// 错误处理
app.use(function (req, res, next) {
    next(createError(404))
})
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // production 
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
})