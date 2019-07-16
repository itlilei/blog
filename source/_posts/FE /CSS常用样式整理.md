---
title: Fetch请求
date: 2019-07-15
tags: css
categories: 前端
---

#### input消除默认值，取消在手机上的点击高亮效果
```css
    input{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
        -webkit-appearance:none;
        outline: none;
        border: none;
    }
```