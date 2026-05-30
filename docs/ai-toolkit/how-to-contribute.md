---
title: 如何贡献 AI 工具心得
description: AI 工具链板块的内容范围与写作建议。
authors: [ipmc-hub]
cohort: 2024
tags: [AI实践, 贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 1
---

# 如何贡献 AI 工具心得

AI 已经深度参与到学习与科研流程中。这个板块沉淀**大家用 AI 真正解决问题的方法**，而不是泛泛"AI 很厉害"的安利。

## 推荐主题

- **Agent 评测**：Claude Code / Cursor / Copilot / Cline 等的实战体验，结合 IPMC 课程或科研场景
- **Prompt 库**：解决具体任务的可复用 Prompt（论文阅读、报告润色、代码 review、调试辅助）
- **本地部署 SOP**：Ollama / vLLM 在校内 GPU 服务器或个人电脑上的部署流程
- **RAG 实践**：用本地资料库做问答的工程经验
- **避坑清单**：API key 安全、上下文窗口、幻觉规避、版本兼容

## 写作要点

- **可复现**：贴出版本号、命令、环境
- **有边界**：明确"在什么场景下有效、什么场景下失败"
- **不夸张**：AI 不是魔法，写实际的 token 成本、出错率、人工兜底逻辑
- **隐私**：示例中不要带真实学号、姓名、未公开的课程材料

## 推荐文件结构

```
docs/ai-toolkit/
├── _category_.json
├── agents/
│   ├── claude-code-for-coursework.md
│   └── cursor-vs-copilot.md
├── prompts/
│   └── paper-reading.md
└── local-deployment/
    └── ollama-on-szu-gpu.md
```
