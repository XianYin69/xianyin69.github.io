---
author: XianYin69
title: 示例文章
date: 2026-09-09
---

# 示例文章

## 概述

本文用于验证 article-content.html 的 Markdown 渲染系统，覆盖全部已实现语法。

### 文本样式

这是**加粗**文字，这是*斜体*文字，这是~~删除线~~文字，这是`行内代码`。

### 列表

**无序列表：**
- 第一项
- 第二项
- 第三项

**有序列表：**
1. 第一步
2. 第二步
3. 第三步

**任务列表：**
- [x] 已完成任务
- [x] 第二个已完成任务
- [ ] 待办任务

### 代码块

JavaScript 示例：

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
console.log(fibonacci(10)); // 55
```

Python 示例：

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height
```

### 引用块

> "代码就是写给人看的，只是顺便让机器执行一下。"
> —— Harold Abelson

### 表格

| 语言 | 范式 | 典型用途 |
|------|------|----------|
| JavaScript | 动态/多范式 | Web 前端 |
| Python | 解释型/多范式 | 数据科学 |
| Rust | 编译型/系统级 | 高性能后端 |

### 图片

![示例图片](../assets/intro-ClAmIAr9.svg)

![远程图片](https://img.shields.io/badge/demo/markdown-0aefeb?style=flat-square)

### 链接

内链：[主页](../zh-CN/index.html)

外链：[GitHub](https://github.com)

### 水平线

---

### 脚注

这是一个脚注引用示例[^1]。

[^1]: 这是脚注内容，用于验证脚注渲染。

#### 四级标题

##### 五级标题

###### 六级标题
