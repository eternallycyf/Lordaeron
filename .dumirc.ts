import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';
import path from 'path';

const repo = 'Lordaeron';

export default defineConfig({
  // favicons: [''],
  base: process.env.APP_ENV === 'development' ? '/' : `/${repo}`,
  publicPath: process.env.APP_ENV === 'development' ? '/' : `/${repo}/`,
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  hash: true,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: './packages/Lordaeron-react/src' },
      { type: 'mobile', dir: './packages/Lordaeron-react-mobile/src' },
    ],
    codeBlockMode: 'passive',
  },
  alias: {
    packages: path.join(__dirname, 'packages'),
    Lordaeron: path.join(__dirname, 'packages/Lordaeron-react/src'),
    'Lordaeron-react-mobile': path.join(__dirname, 'packages/Lordaeron-react-mobile/src'),
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: 'zh-CN' },
  ],
  themeConfig: {
    name: 'Lordaeron',
    carrier: 'dumi',
    hd: true,
    // logo: '',
    footer: 'Lordaeron © 2020 Created by Lordaeron',
    nav: [
      {
        title: '指南',
        link: '/guide/introduce',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/fengxinhhh/Lordaeron',
      },
    ],
  },
  styles: [style],
});
