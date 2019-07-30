---
title: Node 常用模块
date: 2019-07-29
# tags:
#   - js
#   - node
categories: 前端
---

#### uuid
生成uuid唯一标识,数据库唯一标识字段常用。先安装：
`npm install --save uuid`

使用：
```javascript
const uuid =require('uuid')
let id=uuid.v1() //基于时间戳生成  （time-based）
let id2=uuid.v4() //随机生成  (random)

```
