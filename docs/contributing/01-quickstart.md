---
title: 10 分钟提出第一个 PR
description: 新贡献者的快速上手指南，从 fork 到合入全流程。
authors: [ipmc-hub]
cohort: 2024
tags: [贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 1
---

# 10 分钟提出第一个 PR

不需要懂 Docusaurus、不需要会 React。会 GitHub、会写 Markdown 就够了。

## 准备

- GitHub 账号
- 本地装好 Node.js >= 20 与 npm（仅本地预览需要；只改一两个文件可以直接在 GitHub 网页上编辑）

## 路径 A：网页直改（最快）

适合改错别字、补一段文字、修个链接。

1. 打开你想改的文档页面，拉到底部点 **Edit this page**
2. GitHub 会自动 fork 仓库并打开网页编辑器
3. 改完点底部 **Propose changes** → **Create pull request**
4. 标题写清楚改了什么，例如 `docs(courses/embedded): 修正第3章公式笔误`
5. 等 reviewer 合入

### 网页路径下要加图怎么办？

GitHub 网页编辑器**支持直接把图片拖进编辑框**，会自动上传并生成 `https://user-images.githubusercontent.com/...` 形式的链接。

这条路径的局限要先讲明白：

- 图片**不在仓库里**，是托管在 GitHub 自家图床
- `git clone` 后离线看不到图，文档归档时图无法跟随
- 严格来说违反"图片随仓库走"的原则，但**比私人图床安全得多**——GitHub 不跑路

所以推荐做法：**网页直改可以这样加图，但请在 PR 描述里留一句**：

> 本 PR 含 N 张图通过 GitHub 网页拖图上传，麻烦栏目主编合入后帮忙迁移到 `static/img/<doc-slug>/`。

栏目主编合入前后会用 `npm run add-images` 把图落到仓库，并把链接换成 `/img/<doc-slug>/...`。这样既不堵新贡献者门槛，最终图也能进归档。

**如果你这次要加 5 张以上的图**——直接走路径 B，本地编辑省事得多。

## 路径 B：本地编辑（推荐贡献新文档）

```bash
# 1. fork 仓库后克隆到本地
git clone https://github.com/<your-id>/ipmc-hub.git
cd ipmc-hub

# 2. 安装依赖
npm ci

# 3. 创建分支
git checkout -b docs/embedded-systems-notes

# 4. 启动本地预览（http://localhost:3000）
npm run start

# 5. 编辑或新建文档，浏览器实时刷新
# 6. 提交前先 build 一遍，确保不会有断链
npm run build

# 7. 推送 + 提 PR
git add .
git commit -m "docs(courses/embedded): 新增嵌入式系统通关笔记"
git push -u origin docs/embedded-systems-notes
```

到 GitHub 网页上把分支提为 PR 即可。

## 第一次贡献的清单

- [ ] 在 [`blog/authors.yml`](https://github.com/Willian-Marshell/ipmc-hub/blob/main/blog/authors.yml) 注册自己（key 用 GitHub ID）
- [ ] 文档放在正确的目录（参考 [内容归属判定](../intro#这里有什么)）
- [ ] frontmatter 完整（参考 [frontmatter 规范](./frontmatter-spec)）
- [ ] 图片放在 `static/img/<doc-slug>/` 而不是图床（多图用 `npm run add-images`，详见 [写作风格](./writing-style#图片)）
- [ ] 如果是网页拖图上传的，PR 描述里已注明请栏目主编合入后迁移
- [ ] `npm run build` 本地通过
- [ ] PR 描述写清楚：动了什么、为什么动

## 我卡住了

- 看不懂 Docusaurus 报错？把报错贴到 PR 评论里，reviewer 会帮你看
- 不确定该写在 docs 还是 blog？先在 issue 里问，不要默默纠结
- 想贡献但没思路？看看 [Issue 列表](https://github.com/Willian-Marshell/ipmc-hub/issues) 里 `good-first-issue` 标签的任务
