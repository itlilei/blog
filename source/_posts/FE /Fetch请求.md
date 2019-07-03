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
### 涉及到的对象
#### 1. Request对象 
```bash
const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"foo":"bar"}'});
 
const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed; // true

```
