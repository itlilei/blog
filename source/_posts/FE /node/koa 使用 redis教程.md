---
title: koa 使用redis教程
date: 2019-07-25
tags:
  - js
  - node
  - koa
categories: 前端
---

### 安装教程

1.安装redis
`brew install redis`

2.启动服务端 
`redis-server`

启动成功后如下图所示：
![20190725151443.png](https://raw.githubusercontent.com/itlilei/pic/master/20190725151443.png)

3.mac 下安装redis管理工具 rdm  （安装包网上很多，搜索下载即可，windows下同理）

安装完成后： name自己取一个，host 为本机host，点击ok即可

![20190725151823.png](https://raw.githubusercontent.com/itlilei/pic/master/20190725151823.png)

redis命令及教程可参考：https://www.runoob.com/redis/redis-keys.html

### koa 中使用redis 

1.安装redis
`npm install redis koa-redis --save`

2.使用redis
```javascript
const Koa =require('koa')
const app =new Koa()
const redis=require('redis')
const redisStore =require('koa-redis')

//服务器的ip和端口号 
var client=redis.createClient(6379,'127.0.0.1')
var store=redisStore({
    client:client,
    db:'db0'
})

app.use(async (ctx)=>{
    await store.client.set('word','first success')
    ctx.body=await store.client.get('word')
})

app.listen(5000)
console.log('node of koa server is starting at port 5000')
```
浏览器中访问 localhost:5000，在rdm中查看存储的值“word”

![20190725170311.png](https://raw.githubusercontent.com/itlilei/pic/master/20190725170311.png)

Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)

操作其他数据类型参考上面的教程链接