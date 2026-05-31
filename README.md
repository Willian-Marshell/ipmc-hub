# IPMC Hub

深圳大学「智能感知与运动控制」本科微专业的学生开源知识库。

每届学生把课程笔记、比赛复盘、AI 工具心得、升学攻略沉淀下来，代代接力。

线上站点：<https://ipmc-hub.org.cn>

## 我想读资料

直接访问线上站点即可。如果想反馈错别字或过时内容，欢迎在每页底部的「Edit this page」直接提 PR。

## 我想贡献内容

新贡献者请先读 [docs/contributing/01-quickstart.md](docs/contributing/01-quickstart.md)，10 分钟带你提出第一个 PR。

完整规范见 `docs/contributing/` 目录下的六篇必读文档。

## 本地开发

环境要求：Node.js >= 20，包管理器使用 npm。

```bash
npm ci              # 安装依赖
npm run start       # 本地开发，默认 3000 端口
npm run build       # 生产构建
npm run typecheck   # TypeScript 类型检查
npm run serve       # 预览构建产物
```

提交前请确保 `npm run build` 通过——`onBrokenLinks` 设为 `throw`，断链会让构建失败。

## 部署

push 到 `main` 分支即由 GitHub Actions 自动部署到 `gh-pages` 分支，无需手动操作。

## 技术栈

- [Docusaurus 3.10](https://docusaurus.io/) + TypeScript + React 19
- 部署：GitHub Pages

## License

待定。在 license 确定前，所有贡献默认遵循「校内学习用途、署名转载」原则。
