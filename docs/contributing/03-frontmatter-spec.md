---
title: frontmatter 规范
description: 每篇文档头部 YAML 的字段定义、必填项与 status 流转。
authors: [ipmc-hub]
cohort: 2024
tags: [贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 3
---

# frontmatter 规范

每篇 docs 文档与 blog 文章顶部都必须带一段 YAML frontmatter。这段元数据决定它在站点上如何被检索、归类、退役。

## 标准模板

```yaml
---
title: 嵌入式系统课程通关笔记
description: 一句话摘要，会出现在搜索结果和首页卡片里
authors: [zhangsan]
cohort: 2024
course: embedded-systems
tags: [课程心得, 嵌入式, grade-2024]
status: stable
last_reviewed: 2026-05-30
reviewers: [lisi]
sidebar_position: 2
---
```

## 字段说明

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | 是 | 显示标题。**不要**与 `# 一级标题` 重复 |
| `description` | 是 | 一句话摘要，建议 30–80 字 |
| `authors` | 是 | YAML 列表，引用 `blog/authors.yml` 里的 key（用你的 GitHub ID） |
| `cohort` | 是 | 作者**入学**年份，例如 2024 级写 `2024` |
| `course` | 否 | 关联课程的 slug（仅 docs/courses/ 下使用） |
| `tags` | 是 | 至少包含 1 个**类型轴**标签 + 1 个 `grade-<year>` 标签 |
| `status` | 是 | `draft` / `stable` / `outdated` / `archived` |
| `last_reviewed` | 是 | 最近审核日期，`YYYY-MM-DD` |
| `reviewers` | 否 | 终审人 GitHub ID 列表 |
| `sidebar_position` | 否 | 同目录内的排序，仅 docs 用 |

## status 流转

```
draft ──作者完成→ stable ──18个月未review→ outdated ──完全失效→ archived
                          ↑                       │
                          └────── 重新 review ─────┘
```

- **draft**：正在写，可以提 PR 但 reviewer 会标注未完成
- **stable**：可以放心引用
- **outdated**：仍可读，但页头会自动加横幅提醒
- **archived**：移入 `docs/archive/<year>/`，从主侧栏折叠（仍可搜）

CI 会扫描 `last_reviewed` 字段，超过 18 个月自动改为 `outdated`。这一点详见 [退役策略](./archival-policy)。

## 标签三轴

每篇内容至少打两个标签，覆盖以下两轴：

- **类型轴**：`课程心得` / `比赛复盘` / `升学经验` / `AI实践` / `生活感悟` / `贡献指南`
- **届数轴**：`grade-2024` / `grade-2025` …
- **主题轴（可选）**：`嵌入式` / `RoboMaster` / `保研` / `考研` / `留学` …

新加标签前**先看 [`blog/tags.yml`](https://github.com/Willian-Marshell/ipmc-hub/blob/main/blog/tags.yml) 是否已存在**，避免重复（"保研" 和 "推免" 是同一件事）。

## 作者注册

第一次贡献前，请在 [`blog/authors.yml`](https://github.com/Willian-Marshell/ipmc-hub/blob/main/blog/authors.yml) 自助注册：

```yaml
zhangsan:
  name: 张三
  title: 2024 级 IPMC 微专业
  url: https://github.com/zhangsan
  image_url: https://github.com/zhangsan.png
  page: true
  socials:
    github: zhangsan
```
