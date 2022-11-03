// 引入 express 框架 -> 需 npm 安装
const express = require('express');

/**
 * 初始化框架,并将初始化后的函数给予 '当前页面'全局变量 app
 * 也就是说, app 是 express
 */
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.send('Hello World');
})

const server = app.listen(8080, function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log("The service is running in " + host + ":" + port);
});
