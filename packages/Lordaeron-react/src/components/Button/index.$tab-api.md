---
title: API
toc: content
group:
  title: General
  order: -1
demo:
  cols: 2
---

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | Disabled state of button | boolean | false |  |
| htmlType | Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| size | Set the size of button | `lg` \| `small` \ |  |
| target | Same as target attribute of a, works when href is specified | string | - |  |
| type | Can be set to `primary` `danger` `link` `default` | string | `default` |  |
| onClick | Set the handler to handle `click` event | (event) => void | - |  |

It accepts all props which native buttons support.

## FAQ
