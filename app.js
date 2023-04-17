// 引入外部模块
var express = require('express')
var app = express()

// 设置模板属性
app.set('views', 'themes');
app.set('view engine', 'ejs');

// 引入中间件
require('./middleware')(app)

// 部署静态资源
app.use(express.static('static'))

// 载入路由
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))


// 开启服务
require('./server')(app)