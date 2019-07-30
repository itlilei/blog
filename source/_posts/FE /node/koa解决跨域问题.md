---
title: koa解决跨域问题
date: 2019-07-30
tags:
  - js
  - node
  - koa
categories: 前端
---

#### 使用koa2-cors模块

先安装  `npm install --save koa2-cors`

使用方法：
```javascript
const Koa =require('koa')
const cors=require('koa2-cors')
const router = require('koa-router')(); 
var app=new Koa()
app.use(cors())

router.get('/index',ctx=>{
    ctx.body={name:'koa'}
}) 
app.use(router.routes(),router.allowedMethods())
app.listen('5000')
```
在浏览器中随便打开一个网页，控制台调用（api.jd.com 本地做了host配置映射到 127.0.0.1），也在浏览器的Network模块查看返回结果：
![20190730212113.png](https://raw.githubusercontent.com/itlilei/pic/master/20190730212113.png)

复杂用法：也可对请求添加各种个性化参数配置
```javascript
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://api.jd.com:5000'; / 这样就能只允许 http://api.jd.com:5000 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
```

#### 实现原理，即用原生node实现
```javascript
app.use(async (ctx, next) => {
    // 允许来自所有域名请求
    ctx.set("Access-Control-Allow-Origin", "*");
    // 这样就能只允许 http://localhost:8080 这个域名的请求了
    // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); 

    // 设置所允许的HTTP请求方法
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

    // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

    // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

    // Content-Type表示具体请求中的媒体类型信息
    ctx.set("Content-Type", "application/json;charset=utf-8");

    // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
    // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    ctx.set("Access-Control-Allow-Credentials", true);

    // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
    // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
    // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
    ctx.set("Access-Control-Max-Age", 300);

    /*
    CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
        Cache-Control、
        Content-Language、
        Content-Type、
        Expires、
        Last-Modified、
        Pragma。
    */
    // 需要获取其他字段时，使用Access-Control-Expose-Headers，
    // getResponseHeader('myData')可以返回我们所需的值
    ctx.set("Access-Control-Expose-Headers", "myData");

    await next();
})

```
注释掉上文中的 app.use(cors()) 部分，替换成原生node实现，调用方法同上，效果是一致的,根据实际需要，设置不同的参数配置。