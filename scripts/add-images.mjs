#!/usr/bin/env node
// scripts/add-images.mjs — 把零散图片批量导入 IPMC Hub 仓库的标准位置
// 用法：npm run add-images -- --doc <文档路径> [--webp] <图片1> [图片2 ...]
import {existsSync, mkdirSync, readdirSync, copyFileSync, statSync} from 'node:fs';
import {basename, extname, join, resolve, dirname, relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import process from 'node:process';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function usage() {
  console.log(`
用法：
  npm run add-images -- --doc <文档路径> [--webp] <图片1> [图片2 ...]

示例：
  npm run add-images -- --doc docs/courses/embedded-systems/labs.md ~/Downloads/IMG_*.png
  npm run add-images -- --doc blog/2026-09-15-foo.md --webp shots/*.png

参数：
  --doc <path>   目标文档相对仓库根的路径（必填）
  --webp         把 PNG/JPG 转换为 WebP（需先 npm i -D sharp）
  --help, -h     显示此帮助

注意：
  - 在 npm 调用时必须用 -- 把参数传给脚本，否则 npm 会吞掉
  - 路径含空格或中文请用引号包起来
  - 脚本不会自动 git add，导入后请人工核对再 stage
`.trim());
}

function parseArgs(argv) {
  const out = {doc: null, webp: false, sources: [], help: false};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--doc') out.doc = argv[++i];
    else if (a === '--webp') out.webp = true;
    else if (a === '--help' || a === '-h') out.help = true;
    else out.sources.push(a);
  }
  return out;
}

function docToSlug(docPath) {
  let p = docPath.replace(/\\/g, '/').replace(/^\.\//, '');
  p = p.replace(/^(docs|blog)\//, '');
  p = p.replace(/\.(md|mdx)$/i, '');
  return p.replace(/\//g, '-');
}

function kebabize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function nextStartIndex(targetDir) {
  if (!existsSync(targetDir)) return 1;
  let max = 0;
  for (const f of readdirSync(targetDir)) {
    const m = /^(\d{2})-/.exec(f);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max + 1;
}

async function loadSharp() {
  try {
    return (await import('sharp')).default;
  } catch {
    console.error('✖ --webp 需要 sharp 依赖。请先：npm i -D sharp');
    process.exit(1);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { usage(); return; }
  if (!args.doc) { console.error('✖ 缺少 --doc 参数\n'); usage(); process.exit(1); }
  if (args.sources.length === 0) { console.error('✖ 至少传一张图片路径'); process.exit(1); }

  const slug = docToSlug(args.doc);
  const targetDir = join(repoRoot, 'static', 'img', slug);
  mkdirSync(targetDir, {recursive: true});

  const sharp = args.webp ? await loadSharp() : null;
  let idx = nextStartIndex(targetDir);
  const refs = [];

  for (const src of args.sources) {
    const absSrc = resolve(src);
    if (!existsSync(absSrc) || !statSync(absSrc).isFile()) {
      console.error(`✖ 跳过：${src}（文件不存在）`);
      continue;
    }
    const origExt = extname(absSrc).toLowerCase();
    const stem = kebabize(basename(absSrc, origExt)) || 'image';
    const seq = String(idx).padStart(2, '0');
    const isRaster = /\.(png|jpe?g)$/i.test(origExt);
    const outExt = args.webp && isRaster ? '.webp' : origExt;
    const outName = `${seq}-${stem}${outExt}`;
    const dest = join(targetDir, outName);

    if (args.webp && isRaster) {
      await sharp(absSrc).webp({quality: 85}).toFile(dest);
    } else {
      copyFileSync(absSrc, dest);
    }

    refs.push(`/img/${slug}/${outName}`);
    console.error(`✓ ${relative(repoRoot, dest)}`);
    idx++;
  }

  if (refs.length === 0) { console.error('没有任何图片被导入'); process.exit(1); }

  console.log('\n—— 复制以下 Markdown 到文档对应位置 ——\n');
  for (const r of refs) console.log(`![](${r})`);
  console.log('\n（提醒：把方括号里的 alt 文本补上，并把这些行移到正文里合适的位置）');
}

main().catch(err => { console.error('✖ 出错：', err.message); process.exit(1); });
