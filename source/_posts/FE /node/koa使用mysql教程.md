---
title: koa 使用mysql教程
date: 2019-07-30
tags:
  - js
  - node
  - koa
categories: 前端
---

#### 基础方法
安装： `npm install --save mysql`

```javascript
const Koa =require('koa')
const app =new Koa()
const mysql =require('mysql')

//创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'数据库密码',
    database:'数据库'
})

pool.getConnection((err,connection)=>{
    connection.query('select * from user',(err,res)=>{
        if(err){
            console.log(err.message)
            return 
        }
        console.log(res)
    })
    connection.release()
})

app.listen(5000)
console.log('server begin ...')
```
执行结果：
![20190730175850.png](https://raw.githubusercontent.com/itlilei/pic/master/20190730175850.png)

#### createPoolCluster 连接池集群
