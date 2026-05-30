---
title: 写作风格指南
description: IPMC Hub 的语气、结构、术语、引用规范。
authors: [ipmc-hub]
cohort: 2024
tags: [贡献指南]
status: stable
last_reviewed: 2026-05-30
sidebar_position: 2
---

# 写作风格指南

写得好不一定写得长。这份指南帮你避开几个最常见的坑。

## 语气

- 友好、可操作、不堆黑话
- 不用浮夸营销话术（"完美"、"史上最强"、"秒懂"）
- 涉及具体课程、老师、机构时**保持客观**，避免主观贬损
- 转述他人观点必须**注明来源**

## 标题

- 用动词或问句，例如「如何调通 STM32 串口？」而非「STM32 串口」
- 尽量不超过 4 级。需要 5 级标题说明结构需要拆文档

## 段落与列表

- 一段表达一个意思，不要一段塞五件事
- 三件事以上用列表
- 步骤性内容用有序列表，并列性内容用无序列表

## 代码块

```` 
```python
# 好：标了语言，会高亮
print("hello")
```
````

不要写成裸代码段。常用语言标记：`python` `bash` `ts` `tsx` `js` `c` `cpp` `yaml` `json` `md`。

命令行示例统一用 `bash`，包含 Windows-only 命令请单独说明。

## 图片

### 为什么不用图床

代代接力的项目寿命以年计。任何外部图床（QQ、SM.MS、知乎、个人云盘）一两年内都可能限速、防盗链、跑路或停服，链接断了等于变相删除文章。所有图片**随仓库走**，配合 GitHub Pages 的 CDN 已足够快。

唯一例外：通过 GitHub 网页编辑器拖图上传的 `user-images.githubusercontent.com` 链接——它属于 GitHub 自家服务、不会跑路，所以网页路径贡献者可以临时使用。但这类链接最终仍要由栏目主编迁移到仓库内 `static/img/`，避免文档归档时图丢失。详见 [10 分钟提出第一个 PR · 网页路径下要加图怎么办](./quickstart#网页路径下要加图怎么办)。

### 目录与命名

图片放在 `static/img/<doc-slug>/`，`<doc-slug>` 与文档源文件路径对应（去掉 `docs/`/`blog/` 前缀，路径分隔符换成 `-`）：

- `docs/courses/embedded-systems/labs.md` → `static/img/courses-embedded-systems-labs/`
- `blog/2026-09-15-rm-vision-recap.md` → `static/img/2026-09-15-rm-vision-recap/`

文件名规范：

- 用英文小写 + 连字符：`uart-wiring.png`、`02-pid-tuning-curve.png`
- 推荐加两位数字前缀控制顺序：`01-overview.png`、`02-...`
- 禁止：中文名、空格、`IMG_20260530_142357.jpg` 这种相机原始名

### 引用写法

统一用站点绝对路径（Docusaurus 会自动加 `baseUrl`）：

```markdown
![串口接线](/img/embedded-uart/uart-wiring.png)
```

### 多图导入用 `npm run add-images`

写一篇有十几张图的文章时，手动 mkdir、改名、写引用很痛苦。仓库提供了批量导入脚本：

```bash
# 把 ~/Downloads 下的截图批量导入嵌入式实验文档
npm run add-images -- --doc docs/courses/embedded-systems/labs.md ~/Downloads/IMG_*.png
```

脚本会自动建目录、按 `01- 02- 03-` 重命名、并把可粘贴的 Markdown 引用块输出到终端。详见 [脚本帮助](https://github.com/Willian-Marshell/ipmc-hub/blob/main/scripts/add-images.mjs)（运行时加 `--help` 也能看）。

### 体积与格式

不设硬性上限，但请**导出前自觉压缩**——单图最好控制在 1 MB 以内：

- 屏幕截图：用 [Squoosh.app](https://squoosh.app) 在线压一下，或导出时选 WebP（体积常常 -50% 到 -70%）
- 加 `--webp` 标志可让脚本自动转：`npm run add-images -- --doc <file> --webp <imgs>`（需 `npm i -D sharp`）
- 拍照原图先在系统里"调整大小"到 1920px 宽以内再导入

GIF 演示动图超过 5 MB 建议改传 B 站/YouTube 用 iframe 嵌入；硬件演示**视频不进 git**。

### 截图前隐去无关信息

学号、姓名、QQ 号、邮箱、私聊上下文都要打码或裁掉。涉及他人头像/名字的截图先获得对方同意。

## 引用与署名

- 转述学长经验时**写明届数与 GitHub ID**，例如「据 @zhangsan（2022 级）经验」
- 引用外部资料附**链接**，避免「网上有篇文章说...」
- 引用论文请给标题、作者、年份

## 术语

为了方便检索，统一用法：

| 推荐 | 不推荐 |
|---|---|
| 微专业 | OE01 / 智控微 |
| 嵌入式系统 | 嵌入式 / 单片机课 |
| RoboMaster | RM / 机甲大师 |
| 保研 | 推免 |

特殊缩写首次出现时给出全称，例如「智能感知与运动控制（IPMC）」。

## 不要做的事

- 不要直接搬运受版权保护的教材原文
- 不要上传内部考题或未公开的实验答案
- 不要在公开页面贴 API key、私钥、个人手机号
- 不要把私聊截图当作"证据"贴出
