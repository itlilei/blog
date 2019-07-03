---
title: Fetch请求
date: 2019-07-03
tags: js
categories: 前端
---

### 基本的fetch请求

``` bash
const options = {
    method: "POST", // 请求参数
    headers: { "Content-Type": "application/json"}, // 设置请求头   或者通过：new Headers({'Content-Type': 'application/json' })
    body: JSON.stringify({name:'123'}), // 请求参数
    credentials: "same-origin", // cookie设置
    mode: "cors", // 跨域
}
fetch('url'，options)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson); // 响应数据
    })
.catch(function(err){
    console.log(err); // 异常处理
    })

```
>fetch 请求返回promise对象 默认情况下，fetch 不会从服务端发送或接收任何 cookies，如果需发送cookie，必须设置 credentials 对象（下面会详细介绍）

### 涉及到的对象
#### 1. Request对象 
```bash
const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"foo":"bar"}'});
 
const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed; // true

```
>##### credentials有三个可选值（官方文档说现在的默认值修改为：same-origin）
>omit: 从不发送cookies.
>same-origin: 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息.(浏览器默认值,在旧版本浏览器，例如safari 11依旧是omit，safari 12已更改)
>include: 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息
