const express=require('express');
//引入路由器
const productRouter=require('./user.js');
var app=express();//创建服务器
app.listen(8080);
//使用路由器
//路由器访问形式
app.use('/user',productRouter);