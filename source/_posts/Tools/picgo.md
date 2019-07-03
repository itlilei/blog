---
title: [VS Code] 插件-图片自动上传工具  picgo
tags: VS Code
categories: 工具
---

#### 搜索 安装  picgo后 ，点击小齿轮配置github上传如下：

![1.jpg](https://raw.githubusercontent.com/itlilei/pic/master/1.jpg?token=AEM2KM4SNFMKIYHOV7E4PDC5DRNC6)

#### 也可以再settings.json中配置：

![2.jpg](https://raw.githubusercontent.com/itlilei/pic/master/2.jpg?token=AEM2KMYYCSKFCHUUJYV3VVC5DRNEA)

``` bash
"picgo.picBed.github.repo": "itlilei/name", // 仓库名，格式是username/reponame
"picgo.picBed.github.token":"***", 
"picgo.picBed.github.branch": "master",// 分支名，默认是master
"picgo.picBed.current": "github"
```

> 详细参数配置介绍可参考官方文档：https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A

#### 快捷键参考：

![4.jpg](https://raw.githubusercontent.com/itlilei/pic/master/4.jpg?token=AEM2KM6T5EX2RK4P6L4KL2C5DRLUK)

* 配置过程中遇到一个坑，github生成的token复制到onenote中，粘贴时默认首字母转换成大写了，导致一直上传失败，怀疑人生 /(ㄒoㄒ)/~~

![3.jpg](https://raw.githubusercontent.com/itlilei/pic/master/3.jpg?token=AEM2KM2RN4Z6JDKJBDODWBC5DRM6O)