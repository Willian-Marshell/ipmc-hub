import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IPMC Hub',
  tagline: '深大智能感知与运动控制微专业 · 学生开源知识库',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Willian-Marshell.github.io',
  baseUrl: '/ipmc-hub/',

  organizationName: 'Willian-Marshell',
  projectName: 'ipmc-hub',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Willian-Marshell/ipmc-hub/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Willian-Marshell/ipmc-hub/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IPMC Hub',
      logo: {
        alt: 'IPMC Hub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '知识库',
        },
        {to: '/blog', label: '心得博客', position: 'left'},
        {
          to: '/docs/contributing/quickstart',
          label: '贡献指南',
          position: 'left',
        },
        {
          href: 'https://github.com/Willian-Marshell/ipmc-hub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习资源',
          items: [
            {label: '项目总览', to: '/docs/intro'},
            {label: '课程笔记', to: '/docs/category/课程笔记'},
            {label: '比赛经验', to: '/docs/category/比赛经验'},
            {label: '升学攻略', to: '/docs/category/升学就业'},
          ],
        },
        {
          title: '社区',
          items: [
            {label: '心得博客', to: '/blog'},
            {label: '贡献指南', to: '/docs/contributing/quickstart'},
            {
              label: 'GitHub',
              href: 'https://github.com/Willian-Marshell/ipmc-hub',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: '深圳大学',
              href: 'https://www.szu.edu.cn/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IPMC Hub · 由微专业学生共建 · Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
