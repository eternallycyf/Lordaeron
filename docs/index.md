---
title: Lordaeron - 轻量级组件库
hero:
  title: Lordaeron
  description: A high-performance, lightweight UI library for quickly building React applications
  actions:
    - text: Start
      link: /guide/introducezh-CN
    - text: Components
      link: /components/buttonzh-CN
---

<code src="./components/home-page.tsx" inline="true"></code>

<code src="./components/Loading.tsx" inline="true"></code>

```tsx | demo
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';
export default () => (
  <Section
    title="Experience the ultimate in Lordaeron online"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold', fontSize: 50, textAlign: 'center' }}
  >
      <iframe
        className="codesandbox"
        src="https://codesandbox.io/s/musing-noether-nww6ol?file=/src/App.js"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
  </Section>
);
```

```tsx | demo
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import Contributor from './site/Contributor';
import './site/styles.less';

export default () => (
  <Section
    title="Thanks to all contributors~"
    style={{ marginTop: 140 }}
    titleStyle={{ paddingBottom: 20, fontWeight: 'bold', fontSize: 50, textAlign: 'center' }}
  >
    <Contributor/>
  </Section>
);
```
