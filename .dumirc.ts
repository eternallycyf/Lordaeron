import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';
import path from 'path';

const repo = 'Lordaeron';
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
  base: process.env.NODE_ENV === 'development' ? '/' : `/${repo}`,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : basePath,
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
  mfsu: {
    runtimePublicPath: true,
  },
  // favicons: [''],
  // styles: [style],
  theme: { '@primary-color': '#1DA57A' },
  clickToComponent: {},
  targets: { chrome: 79 },
  codeSplitting: { jsStrategy: 'granularChunks' },
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
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
    ],
  ],
  exportStatic: {},
  hash: true,
  // links: [{ rel: 'stylesheet', type: 'text/css', href: `/${repo}/css/global.less` }],
  // headScripts: [{ src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js' }],
  // externals: {
  //   react: 'window.React',
  //   'react-dom': 'window.ReactDOM',
  //   moment: 'window.moment',
  //   echarts: 'window.echarts',
  //   d3: 'window.d3',
  //   exceljs: 'window.exceljs',
  // },
  // scripts: [
  //   { content, charset: 'utf-8', },
  //   { src: `/${repo}/js/show.js`, },
  //   'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
  //   'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
  //   'https://unpkg.com/moment@2.29.4/moment.js',
  //   'https://unpkg.com/echarts@5.3.3/dist/echarts.js',
  //   'https://unpkg.com/d3@7.6.1/dist/d3.min.js',
  //   'https://unpkg.com/exceljs@4.3.0/dist/exceljs.min.js',
  // ],
});
