---
title: 退役与归档策略
description: 内容只搬不删 —— 状态流转、过期检测、归档目录。
authors: [ipmc-hub]
cohort: 2024
tags: [贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 5
---

# 退役与归档策略

知识库的天敌是"看起来还在线但其实已经过时"。本策略保证：**过时的内容显眼地标过时，但不删除**。

## 核心原则

- **只搬不删**。删除是最后手段，需要 maintainer 批准
- **显眼地标过时**。过时内容页头自动挂提示横幅
- **可追溯**。归档区保留全部历史版本，搜索仍可命中

## 状态流转

```
draft ──作者完成→ stable ──18个月未review→ outdated ──完全失效→ archived
                          ↑                       │
                          └────── 重新 review ─────┘
```

### draft

作者标记为草稿。reviewer 看到 `status: draft` 时优先反馈结构与方向，不纠语病。

### stable

通过 review 的可信内容。**默认每学年 review 一次**：作者或栏目主编更新 `last_reviewed` 字段。

### outdated

满足以下任一条件即转为 outdated：

- `last_reviewed` 距今 > 18 个月（CI 自动转）
- 课程改革、赛规变更、政策调整等场景下任何贡献者发起转换 PR
- 该方向已有更新版本时由作者主动转换

outdated 文档**仍出现在主侧栏**，但页头自动渲染提示横幅。

### archived

完全失效或被替代的内容转为 archived：

- 移入 `docs/archive/<year>/` 目录（year = 转档当年）
- 保留原文件名与 frontmatter，仅修改 `status` 字段
- 主侧栏不再展示，但 `/docs/archive/` 与全文搜索可访问

## 自动化检测

CI 会按计划任务每月扫描所有 docs：

- `last_reviewed` 距今 > 18 个月：自动开 PR 把 `status` 改为 `outdated`
- 转 archived 必须**人工 PR**，不自动化（避免误归档）

## 谁能发起退役

- **作者本人**：随时可以
- **同届同学**：发起退役 PR，需作者本人或栏目主编同意
- **栏目主编**：可直接合入退役 PR，但需在评论中说明依据

## 归档目录约定

```
docs/archive/
├── _category_.json          折叠展示
├── index.md                 关于归档区的说明
├── 2025/
│   ├── _category_.json
│   └── outdated-rm-rules.md
└── 2026/
    └── ...
```

每年开新目录，不混在一起。
