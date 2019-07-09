---
title: 解决hexo无法提交备份theme主题目录
tags: 
- hexo
- git
date: 2019-07-09
categories: 工具
---
#### 问题描述：
提交代码到github后，在新的电脑clone项目时发现之前配置的样式丢失，然后才发现主题文件是空的。
![20190709175746.png](https://raw.githubusercontent.com/itlilei/pic/master/20190709175746.png)
#### 解决办法：
``` bash 
git rm --cached themes/next #next为你的主题名
```
然后重新提交即可
#### 问题原因：
因为我的项目是clone的官方项目，相当于一个子项目，这里用到了git 的子模块（git submodule）功能，子模块只是一个 HEAD 指针，指向子模块的 commit。
相当于把一个大项目分成多个小项目，尽可能减少项目之间的关联，方便调试和修改。
>关于子模块的详细描述，参考文档： https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97
