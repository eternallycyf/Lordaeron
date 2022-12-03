<div align="center">
  <a href="https://wangxince.site/Lordaeron" target="_blank">
   loraaeron
  </a>
</div>

<div align="center">
  <h1>loraaeron</h1>
</div>

<div align="center">

High-performance, lightweight UI library for rapidly building React applications.

<img src="https://img.shields.io/github/stars/eternallycyf/Lordaeron" alt="stars">
<img src="https://img.shields.io/badge/react-v18.2.0%2B-%23407fbc" alt="react">
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="licence">

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Features

## Comprehensive

With more than 50 crafted components that you can use out of the box.

## Customizable theme

Extensive design tokens can be customized to build your own theme. the way of customization are supported:

- [With colors-system]()
- [Dark mode & theme color dual support]()

## TypeScript friendly

All components are written in TypeScript so it's type friendly.

# Installation

Available as an [npm package](https://www.npmjs.com/package/loraaeron)

```bash
// with npm
npm install loraaeron@latest

// with yarn
yarn add loraaeron@latest
```

# Examples

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'concis';

function App() {
  return <Button type="primary">Hello loraaeron!</Button>;
}

ReactDOM.render(<App />, document.getElementById('app'));
```

# Local experience

In the examples folder, there is a `vite` + `react` project runtime environment, in which you can experience the `concis` component, run the command in the project root directory:

```tsx pure
pnpm examples:dev
```

Visit `http://localhost:5173`.

# Useful Links

- [Documentation website](https://wangxince.site/Lordaeron)
- [Components documentation](https://wangxince.site/Lordaeron/components)
- [Guide introduce](https://wangxince.site/Lordaeron/guide)
- [Get started quickly](https://wangxince.site/Lordaeron/guide/start)

# Browser Support

| [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/08095282566ac4e0fd98f89aed934b65.png~tplv-uwbnlip3yd-png.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/40ad73571879dd8d9fd3fd524e0e45a4.png~tplv-uwbnlip3yd-png.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/4f59d35f6d6837b042c8badd95871b1d.png~tplv-uwbnlip3yd-png.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/eee2667f837a9c2ed531805850bf43ec.png~tplv-uwbnlip3yd-png.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3240334d3967dd263c8f4cdd2d93c525.png~tplv-uwbnlip3yd-png.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f2454685df95a1a557a61861c5bec256.png~tplv-uwbnlip3yd-png.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge 16                                                                                                                                                                                                                                 | 31                                                                                                                                                                                                                                  | 49                                                                                                                                                                                                                                | 31                                                                                                                                                                                                                                | 36                                                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                                       |
