---
title: Koa 教程
date: 2019-07-24
# tags:
#   - js
#   - node
#   - koa
categories: 前端
---

### koa入门
1.初始化package.json
`npm init`

2.安装koa2
`npm install koa`

3.新建index.js（入口）文件
``` javascript
const Koa =require('koa')
const app =new Koa()
app.use(async (ctx)=>{
    ctx.body='hello'
})
app.listen(5000)
console.log('node of koa server is starting at port 5000')

```
4.启动服务
`node index.js `

5.浏览器访问 http://localhost:5000

### koa http
1.koa request

```javascript
// header
ctx.request.headers  
ctx.request. protocol
ctx.request.type
ctx.request.charset

// method
ctx.request.method
ctx.request.query // get
ctx.request.body // post | 依赖 koa-bodyparse 第三方模块，后面章节有描述

// path
ctx.request.url // path/?get=
ctx.request.path // path

// host
ctx.request.host // hostname:port
ctx.request.hostname // hostname
ctx.request.ip
crx.request.subdomains 

// cookie
ctx.cookies.get('name') // 获取 cookie
ctx.cookies.set(name, value, { // 设置 cookie
  'expires': new Date() // 时间
  'path' : '/' // 路径
  'domain': '0.0.0.0' // 域
  'httpOnly': false // 禁止js获取
})
```

2.koa response 

```javascript
// header
ctx.set({})

// status
ctx.response.status = 200

// type
ctx.response.type = 'text/html; charset=utf-8' // defaule

// redirect
ctx.response.redirect(url)
```

### 中间件 koa-router

```javascript
const Koa =require('koa')
const app =new Koa()
const router= require('koa-router')()
router.get('/',(ctx,next)=>{
    ctx.body='get success'
})
router.post('/list',(ctx,next)=>{
    ctx.body='list success'
})
//注册路由
//app.use(router.routes())
app.use(router.routes(),router.allowedMethods())
app.listen(5000)
console.log('node of koa server is starting at port 5000')

```

如果是多个模块的路由，可将路由拆成独立的js文件
```javascript
// 路由模块使用前需要先安装和实例化
const Router = require('koa-router')
const router = new Router()

// 首页
app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
      ctx.response.status = 200
      ctx.response.body = 'index'
    }
    await next()
})

// 其他页面通过 router 加载
let urls = fs.readdirSync(__dirname + '/urls')
urls.forEach((element) => {
    let module = require(__dirname + '/urls/' + element)
    /*
      urls 下面的每个文件负责一个特定的功能，分开管理
      通过 fs.readdirSync 读取 urls 目录下的所有文件名，挂载到 router 上面
    */
    router.use('/' + element.replace('.js', ''), module.routes(), module.allowedMethods())
})
app.use(router.routes())
```
根据代码配置，例如在 urls下新建home.js 路由模块 urls/home.js
```javascript
const Router = require('koa-router')
const home = new Router()

// /home
home.get('/', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'home'
    await next()
})

// home/list
home.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'home-list'
    await next()
})

module.exports = home
```

注：其中router.allowedMethods()可加可不加，它的作用是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头，参考 其源码内容

```javascript
Router.prototype.allowedMethods = function (options) {
  options = options || {};
  var implemented = this.methods;

  return function allowedMethods(ctx, next) {
    return next().then(function() {
      var allowed = {};

    //重点代码
    //当后续所有中间件执行完成之后,判断ctx的status,如果next中间件已经正确处理了response响应,则直接略过
      if (!ctx.status || ctx.status === 404) {
        ctx.matched.forEach(function (route) {
          route.methods.forEach(function (method) {
            allowed[method] = method;
          });
        });

        var allowedArr = Object.keys(allowed);

        if (!~implemented.indexOf(ctx.method)) {
          if (options.throw) {
            var notImplementedThrowable;
            if (typeof options.notImplemented === 'function') {
              notImplementedThrowable = options.notImplemented(); // set whatever the user returns from their function
            } else {
              notImplementedThrowable = new HttpError.NotImplemented();
            }
            throw notImplementedThrowable;
          } else {
            ctx.status = 501;
            ctx.set('Allow', allowedArr);
          }
        } else if (allowedArr.length) {
          if (ctx.method === 'OPTIONS') {
            ctx.status = 200;
            ctx.body = '';
            ctx.set('Allow', allowedArr);
          } else if (!allowed[ctx.method]) {
            if (options.throw) {
              var notAllowedThrowable;
              if (typeof options.methodNotAllowed === 'function') {
                notAllowedThrowable = options.methodNotAllowed(); // set whatever the user returns from their function
              } else {
                notAllowedThrowable = new HttpError.MethodNotAllowed();
              }
              throw notAllowedThrowable;
            } else {
              ctx.status = 405;
              ctx.set('Allow', allowedArr);
            }
          }
        }
      }
    });
  };
};
```

### koa-static 静态文件处理
```javascript
const Koa =require('koa')
const app =new Koa()
const _static = require('koa-static')

app.use(_static(__dirname, './static'))
app.listen(5000)
```
static 下的资源就可以直接访问了
