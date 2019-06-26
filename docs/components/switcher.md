---
sidebarDepth: 0
---

# Switcher

This is an overview of the most common usage of `<Switcher>`.

```html
<Switcher :checked="true" />
```

`Switcher` provides two-way data binding using v-model.

```html
<Switcher v-model="itemEnabled" />
```

<DocExampleBox codeBox="https://codesandbox.io/s/p7wyk8xl3x?module=%2Fsrc%2FApp.vue">

```html
<Switcher width="75" height="75" v-model="value" @checkedChange="switchValueChange" />
```

```js
switchValueChange: event => console.log(event);
```

<SwitcherDoc />
</DocExampleBox>

## Props

| Name    | Type    | Default | Web | Mobile | Description                                                             |
| ------- | ------- | ------- | --- | ------ | ----------------------------------------------------------------------- |
| checked | Boolean | `false` | ✔   | ✔      | Gets or sets the value of the switch selection. Default value: `false`. |

## Events

| Name          | Web | Mobile | Description                                |
| ------------- | --- | ------ | ------------------------------------------ |
| checkedChange | ✔   | ✔      | Emitted when the switch selection changes. |
