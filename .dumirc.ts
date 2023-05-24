import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';
import path from 'path';

const repo = 'lordaeron';
const basePath = `/${repo}/`;

const content = `(function(){
  let divs = document.createElement('div');
  divs.className = 'snow-container';
  document.querySelector('body')?.appendChild(divs);
})()`;

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  apiParser: {},
  base: process.env.NODE_ENV === 'development' ? '/' : `/${repo}`,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : basePath,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: './packages/lordaeron-react/src/components' },
      { type: 'mobile', dir: './packages/lordaeron-react-mobile/src' },
    ],
    entryFile: './packages/lordaeron-react/src/index.ts',
    codeBlockMode: 'passive',
  },
  html2sketch: {},
  alias: {
    packages: path.join(__dirname, 'packages'),
    lordaeron: path.join(__dirname, 'packages/lordaeron-react/src'),
    'lordaeron-react-mobile': path.join(__dirname, 'packages/lordaeron-react-mobile/src'),
  },
  locales: [
    // { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    name: 'lordaeron',
    carrier: 'dumi',
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
    },
    showLineNum: true,
    prefersColor: { switch: true },
    logo:
      process.env.NODE_ENV === 'development'
        ? '/images/origin.png'
        : `/${repo}/images/origin.png`,
    footer: 'lordaeron © 2020 Created by lordaeron',
    socialLinks: {
      github: 'https://github.com/eternallycyf/lordaeron',
    },
    nav: {
      'zh-CN': [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components/button',
      },
      ],
      // 'en-US': [
      //   {
      //   }
      // ]
    },
  },
  mfsu: {
    runtimePublicPath: true,
  },
  favicons: [
    process.env.NODE_ENV === 'development'
      ? '/images/favicon.ico'
      : `/${repo}/images/favicon.ico`,
  ],
  styles: [style],
  theme: { '@primary-color': '#1DA57A', '@hd': '0.02rem' },
  clickToComponent: {},
  targets: { chrome: 79 },
  codeSplitting: { jsStrategy: 'granularChunks' },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  ignoreMomentLocale: true,
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd'
    ],
  ],
  // metas: [
  //   {
  //     'http-equiv': 'Content-Security-Policy',
  //     content: 'upgrade-insecure-requests',
  //   },
  //   { 'http-equiv': 'Cache-control', content: 'no-cache' },
  //   { 'http-equiv': 'Cache', content: 'no-cache' },
  // ],
  exportStatic: {},
  hash: true,
  headScripts: [{ src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js' }],
  scripts: [
    { content, charset: 'utf-8', },
    { src: process.env.NODE_ENV === 'development' ? '/js/snow.js' : `/${repo}/js/snow.js`, },
  ],
});
