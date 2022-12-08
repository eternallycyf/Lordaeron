---
title: Button
order: 0
toc: content
group:
  title: General
  order: -1
demo:
  cols: 2
---

# Button

To trigger an operation.

## Example

<code src='./demo/base.tsx'  description='There are primary button, default button, danger button and link button in loraderon'>Type</code>
<code src='./demo/disabled.tsx'  description='To mark a button as disabled, add the disabled property to the Button'>Disabled</code>
<code src='./demo/size.tsx' description='loraderon supports a default button size as well as a lg and sm size. If a lg or sm button is desired, set the size property to either lg or sm respectively. Omit the size property for a button with the default size'>Size</code>

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