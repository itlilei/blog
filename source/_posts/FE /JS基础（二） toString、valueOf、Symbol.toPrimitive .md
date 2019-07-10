---
title: JS基础（二） toString、valueOf、Symbol.toPrimitive 类型转换
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
只有<label style="color:red">Array,Function,RegExp</label>的原型上没有valueOf属性,他们能有该方法是因为继承了Object，所以这三个对象调用的是Object原型上的valueOf。

<label style="color:red;">
特殊情况:null和undefined不能转换为字符串,null和undefined调用toString()方法会报错。
转字符串的另一种方法：String(),他可以将null和undefined转换为字符串。
</label>

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
|Number|返回文本表示，<label style="color:red">可接收一个参数表示输出的进制数，默认为十进制</label>|
|Object|返回 <label style="color:red">"[object 类型名]"</label>|
|String|字符串的值|

### <label style="color:#1E90FF">valueOf toString 使用场景</label>

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


### <label style="color:#1E90FF">Symbol.toPrimitive</label>

ES6 的详细介绍：
>对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

>Symbol.toPrimitive被调用时，会接受一个字符串参数，表示当前运算的模式，一共有三种模式。

>    1. Number：该场合需要转成数值
>    2. String：该场合需要转成字符串
>    3. Default：该场合可以转成数值，也可以转成字符串
```javascript
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
```
可以通过一个例子看下三者的优先级
```javascript
let ab = {
    valueOf() {
        return 0;
    },
    toString() {
        return '1';
    },
    [Symbol.toPrimitive]() {
        return 2;
    }
}
console.log(1+ab);  //3
console.log('1'+ab); //12
```
结论：在转换基本类型的时候，Symbol.toPrimitive 的优先级最高。
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

### <label style="color:#1E90FF">灵活运用：如何实现 (a == 1 && a == 2 && a == 3) 的值为true</label>
分析：== 操作符在左右数据类型不一致时，会先进行隐式转换。a == 1 && a == 2 && a == 3 的值意味着其不可能是基本数据类型。因此 a 是复杂数据类型，JS 中复杂数据类型只有 object，根据上边讲到的object转换类型的方法，得出答案。

Symbol.toPrimitive实现（其他两种亦可）： 
```javascript
let a = {
    [Symbol.toPrimitive]: (function(hint) {
            let i = 1;
            //闭包的特性之一：i 不会被回收
            return function() {
                return i++;
            }
    })()
}
console.log(a == 1 && a == 2 && a == 3); //true
```
还有一种更简单的实现，上边讲到数组的toString 接口默认调用数组的 join 方法，所以可以重写数组的 join 方法（奇淫巧技）：

```javascript
let a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); //true
```

当然该问题还有很多其他的实现方式，后续讲到其他基础知识时再列举。