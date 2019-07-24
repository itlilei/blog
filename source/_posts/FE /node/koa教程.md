---
title: Koa 教程
date: 2019-07-24
# tags:
#   - js
#   - node
#   - koa
categories: 前端
---

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