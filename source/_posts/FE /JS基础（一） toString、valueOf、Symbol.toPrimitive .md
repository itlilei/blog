---
title: JS基础（一） toString、valueOf、Symbol.toPrimitive 类型转换
date: 2019-07-10
tags: js
categories: 前端
---

### <label style="color:#1E90FF">概述</label>

__javascript 中几乎所有类型都具有toString和valueOf属性，而且他们都有各自的toString或valueOf方法的实现，特殊情况下边讲到。__

```javascript
Array.prototype.hasOwnProperty('valueOf');      //false
Function.prototype.hasOwnProperty('valueOf');   //false
RegExp.prototype.hasOwnProperty('valueOf');     //false

```
只有<label style="color:red">Array,Function,RegExp</label>的原型上没有valueOf属性,他们能有该方法是因为继承了Object，所以这三个对象调用的是Object原型上的valueOf

### <label style="color:#1E90FF">valueOf 介绍</label>

__valueOf() 返回对象的原始值，如果对象没有原始值，valueOf() 就会返回对象自身。__

|对象|返回值|
|:----:|:----|
|Array|返回数组对象本身|
|Boolean|布尔值|
|Date|返回时间的毫秒数|
|Function|函数本身|
|Number|数字的值|
|Object|对象本身|
|String|字符串的值|

### <label style="color:#1E90FF">toString 介绍</label>

__toString的作用是将值转换为字符串__

|对象|返回值|
|:----:|:----|
|Array|将数组元素转换为字符串，用逗号拼接并返回(a=[1,2]=> "1,2")|
|Boolean|返回'true' 'false'|
|Date|返回日期的字符串格式 "Wed Jul 10 2019 18:21:07 GMT+0800 (中国标准时间)"|
|Function|函数本身的文本 "function a(){console.log('function')}"|
|Number|返回文本表示，可接收一个参数表示输出的进制数，默认为十进制|
|Object|返回 "[object 类型名]"|
|String|字符串的值|

### <label style="color:#1E90FF">使用场景</label>

定义一个复杂对象，具体看下他们是如何执行的
```javascript
var test = { 
 i: 10, 
 toString: function() { 
    console.log('toString'); 
    return this.i; 
 }, 
 valueOf: function() { 
    console.log('valueOf'); 
    return this.i; 
 } 
} 

alert(test);// 10 toString 
alert(+test); // 10 valueOf 
alert(''+test); // 10 valueOf 
alert(String(test)); // 10 toString 
alert(Number(test)); // 10 valueOf 
alert(test == '10'); // true valueOf 
alert(test === '10'); // false

```
结论
    1. 在进行强转字符串类型时将优先调用toString方法，强转为数字时优先调用valueOf。
    2. 在有运算操作符的情况下，valueOf的优先级高于toString。 
    3. 这两个方法一般是交由js去隐式调用，以满足不同的运算情况。 
    4. 在数值运算里，会优先调用valueOf()，如 a + b; 
    5. 在字符串运算里，会优先调用toString(),如alert(c).

### <label style="color:#1E90FF">类型转换及原则</label>


##### <label style="color:#B0C4DE">双等号 == 的比较机制</label>

__在判断的过程中会进行隐式的类型转换__

    1.是否有NaN
    首先判断双等号两边是否有NaN，如果有的话，则一律返回false。

    2.是否有boolean值
    如果有的话则将true转化为1，false转化为0。

    3.null和undefined
    遇到null或者undefined，则不会进行类型转换，它们相互的比较都返回true。

    4.有一边是字符串,分四种情况：

        1） 同样是字符串，则直接进行字符串值的比较

        2） 是数字，则需要将字符串转化为数字，然后进行比较

        3） 有布尔类型，则要将布尔类型转化为0或则1，然后进行比较

        4） 对象或者数组类型，则需要调用toString()或者valueOf()方法转化成简单类型，然后进行比较

对象转化为简单类型时会优先调用valueOf方法，如果可以与简单值进行比较则会直接比较，此时不再调用toString方法。
如果调用valueOf方法后无法与简单值进行比较，则会再调用toString方法，最终得到比对的结果。
但是需要注意的一点是Date对象不满足上述的规则，Date对象的toString和valueOf方法都是重新定义过的。默认会调用toString方法。