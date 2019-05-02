---
sidebarDepth: 0
---

# Slider

This is an overview of the most common usage of `<Slider>`.

`Slider` is a UI component that displays a line and indicator that provides value selection in a value range.

`Slider` provides two-way data binding using v-model.

```html
<Slider v-model="value" />
```

## Props

| Name     | Type   | Default | Web | Mobile | Description |
| -------- | ------ | ------- | --- | ------ | ----------- |
| value    | Number | `0`     | ✔   | ✔      | Current value of slider. |
| minValue | Number | `0`     | ✔   | ✔      | Minimum value that slider can take. |
| maxValue | Number | `100`   | ✔   | ✔      | Maximum value that slider can take. |

## Events

| Name        | Web | Mobile | Description |
| ----------- | --- | ------ | ----------- |
| valueChange | ✔   | ✔      | Emitted after slider indicator slid and released. |

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/8l36nz28p8?module=%2Fsrc%2FApp.vue">

```html
<Slider :value="80" @valueChange="onValueChanged($event)" />
```

```js
onValueChanged(event)
{
    console.log("Current Slider value: ", event.target.value);
}
```

<SliderDoc />
</DocExampleBox>
