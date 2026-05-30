---
title: 如何贡献比赛经验
description: 比赛板块的标准三件套结构与写作建议。
authors: [ipmc-hub]
cohort: 2024
tags: [比赛复盘, 贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 1
---

# 如何贡献比赛经验

每个赛事建议建一个独立子目录 `docs/competitions/<event-slug>/`，例如 `robomaster/`、`smart-car/`、`cumcm/`。

## 标准三件套

每个赛事至少包含三篇文档，形成可复用的"经验沉淀骨架"：

```
docs/competitions/robomaster/
├── _category_.json
├── getting-started.md     新人入坑指引：报名、组队、时间线
├── tech-stack.md          技术栈：硬件选型、软件框架、开发流程
└── pitfalls.md            历届踩坑合集：分工、备件、调试、规则
```

## 复盘文章放哪里

「我们队拿了 X 等奖的赛后感想」属于**个人复盘**，请放 [心得博客](/blog) 而不是 docs。

docs 的比赛文档应该是**去人格化的、可被下一届直接复用**的资料；个性化的故事和情绪适合 blog。

## 至少要回答的几个问题

1. 比赛的**赛制**与**赛程**是什么？
2. 参赛需要哪些**前置技能**？没有的话哪里补？
3. 校内**报名口径**是什么？谁负责？
4. 历届最容易**翻车**的环节？
5. 推荐的**软硬件清单**与**预算**？
