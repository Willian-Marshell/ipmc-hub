---
title: PR 与 Review 流程
description: 三级 review 制度、SLA、栏目主编分工。
authors: [ipmc-hub]
cohort: 2024
tags: [贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 4
---

# PR 与 Review 流程

低门槛进，高标准过。

## 三级 Review

```
作者自查 ──→ 同届互评 ──→ 栏目主编终审 ──→ 合入 main
```

1. **作者自查**：提 PR 前对照 [PR 模板](https://github.com/Willian-Marshell/ipmc-hub/blob/main/.github/PULL_REQUEST_TEMPLATE.md)勾选清单，确保本地 build 通过
2. **同届互评**：随机抽选 1 名同届同学读一遍，重点看「读完能不能动手」
3. **栏目主编终审**：由 [CODEOWNERS](https://github.com/Willian-Marshell/ipmc-hub/blob/main/CODEOWNERS) 指定的栏目主编做事实把关与风格统一

错别字 / 链接修复类小 PR 跳过同届互评，直接进栏目主编终审。

## SLA

| 角色 | 响应时间 |
|---|---|
| 同届互评 | 5 个工作日内给反馈 |
| 栏目主编终审 | 5 个工作日内给意见或合入 |
| 紧急修复（线上 build 挂了） | 24 小时内 |

超时的 PR 由当届"开源之星运营组"代为催促或补 review。

## 栏目主编分工

通过 `.github/CODEOWNERS` 文件落实，每个一级目录配 2–3 名主编：

```
docs/courses/         @senior-1 @senior-2
docs/competitions/    @rm-captain @ec-captain
docs/ai-toolkit/      @ai-lead
docs/postgrad/        @grad-mentor
docs/contributing/    @maintainers
```

主编原则：
- 优先**已毕业或大三大四**的学长学姐
- 任期 1 学年，毕业前**主动交接**给在校生
- 主编也可以提自己负责板块的 PR，但**不能 self-merge**，必须由其他主编 review

## PR 描述模板

```markdown
## 这个 PR 做了什么

- 新增 / 修改 / 修复了 ...

## 为什么动它

简述背景：是补全旧文档？修一处错？响应一个 issue？

## 自查清单

- [ ] frontmatter 完整
- [ ] 图片放在 `static/img/<doc-slug>/`
- [ ] `npm run build` 本地通过
- [ ] 已在 `blog/authors.yml` 注册自己

## 关联 Issue

closes #xxx
```

完整模板参见仓库根的 `.github/PULL_REQUEST_TEMPLATE.md`。

## 关于 self-merge

任何文档类 PR 都**不允许 self-merge**，至少 1 名 reviewer 批准。
基础设施类 PR（CI 配置、依赖升级）由仓库 maintainer 评审。
