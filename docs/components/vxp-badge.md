---
sidebarDepth: 0
---

# VxpBadge

This is an overview of the most common usage of `<VxpBadge>`.
`VxpBadge` is a UI component that displays read-only text which are small status descriptors for UI elements. It will be hidden if there isnt any badge.

## Live Demo

<DocExampleBox :liveDemoMode="false">
```html
<VxpBadge badge="2" width="35" primary />
```
<VxpBadgeLiveDemo />
</DocExampleBox>

## Props

| Name   | Type          | Default | Web | Mobile | Minimum Value | Description                   |
| ------ | ------------- | ------- | --- | ------ | ------------- | ----------------------------- |
| badge  | String/Number | -       | ✔   | ✔      | -             | Sets the text of the badge.   |
| width  | Number        | 18      | ✔   | ✔      | 18            | Sets the width of the badge.  |
| height | Number        | 18      | ✔   | ✔      | -             | Sets the height of the badge. |