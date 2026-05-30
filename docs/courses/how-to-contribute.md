---
title: 如何贡献课程笔记
description: 课程板块的写作模板与建议结构，新作者从这里开始。
authors: [ipmc-hub]
cohort: 2024
tags: [课程心得, 贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 1
---

# 如何贡献课程笔记

每门课程建议建一个独立子目录 `docs/courses/<course-slug>/`，slug 用英文小写连字符（如 `embedded-systems`、`signal-processing`）。

## 推荐文件结构

```
docs/courses/embedded-systems/
├── _category_.json        课程显示名与排序
├── overview.md            课程概览（教材、考核、给分）
├── syllabus-notes.md      章节要点
├── labs.md                实验避坑
├── exam-tips.md           复习建议
└── resources.md           推荐书 / 视频 / 开源资料
```

## 至少要回答的几个问题

1. 这门课的**核心目标**是什么？读完一学期能干什么？
2. 哪些章节是**重点**？哪些可以略过？
3. 实验最容易踩的**三个坑**是什么？
4. 期末/期中怎么考？给分**慷慨**还是严格？
5. 推荐什么**外部资料**作补充？

## 写作风格

参考 [写作风格指南](../contributing/writing-style)。
具体到课程笔记：**直接、可操作、不空泛**。「这门课很难」不算信息，「第 5 章傅里叶变换需要熟练手算」才算。

## frontmatter 模板

```yaml
---
title: 嵌入式系统课程通关笔记
description: 一句话摘要
authors: [your-id]
cohort: 2024
course: embedded-systems
tags: [课程心得, 嵌入式]
status: draft
last_reviewed: 2026-05-30
---
```
