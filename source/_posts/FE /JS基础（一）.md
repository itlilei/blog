---
title: JS基础（一）变量 闭包 作用域
date: 2019-07-06
tags: js
categories: 前端
---

#### <label style="color:#1E90FF">let、const、var 的区别</label>
|声明方式|变量提升|暂时性死区|重复声明|块作用域有效|初始值|重新赋值|
|:----:||:----:||:----:||:----:||:----:||:----:||:----:|
|var|会	|不存在	|允许	|不是	|非必须	|允许|
|let|不会	|存在	|不允许	|是	|非必须	|允许|
|const|不会	|存在	|不允许	|是	|必须	|不允许|

块级作用域有效的解释：let/const 声明的变量仅在块级作用域中有效。而 var 声明的变量在块级作用域外仍能访问到。
```javascript
{
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a); //ReferenceError
console.log(b); //ReferenceError
console.log(c); //30
```
看一个例子,a[0] 到a[9] 的结果都是 10 ：
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
```
解决这个问题，可以使用闭包：
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = (function(j){
        return function () {
            console.log(j);
        }
    })(i)
}
a[6](); // 6
```
或者使用let：
```javascript
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
```
贴一张babel转义后的截图，看着会更容易理解一些。
![20190711170815.png](https://raw.githubusercontent.com/itlilei/pic/master/20190711170815.png)


暂时性死区的解释：使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）

“暂时性死区”也意味着typeof不再是一个百分之百安全的操作

![20190711172237.png](https://raw.githubusercontent.com/itlilei/pic/master/20190711172237.png)

#### <label style="color:#1E90FF">闭包</label>

#### <label style="color:#1E90FF">可遍历对象 Iterator</label>

#### <label style="color:#1E90FF">new 实现原理</label>
#### <label style="color:#1E90FF">双向数据绑定实现原理</label>