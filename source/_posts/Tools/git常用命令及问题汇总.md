---
title: git常用命令及问题汇总
tags: 
  - git
date: 2019-07-09
categories: 工具
---

整理了一些我常用的命令及遇到的问题，供参考。
#### Git配置ssh
配置你的用户名和邮箱：
``` bash
$ git config --global user.name "name"
$ git config --global user.email "email@163.com"
```
生成ssh

```bash
ssh-keygen -t rsa -C "your_email@youremail.com"
```
<label style="color:grey">
 Creates a new ssh key using the provided email # Generating public/private rsa # key pair.
Enter file in which to save the key (/home/you/.ssh/id_rsa):
</label>

然后按两次Enter键

#### 查看生成的公钥

```bash 
cat ~/.ssh/id_rsa.pub
```

然后复制key到github或者gitlab 里

#### 验证是否正常：
 ```bash 
 ssh -T git@github.com
```


#### git commit 提交添加表情

提交引入表情 记录一目了然。使用方法：
 ```bash 
 git commit -m':tada: 提交内容说明'
 ```

![20190711153908.png](https://raw.githubusercontent.com/itlilei/pic/master/20190711153908.png)