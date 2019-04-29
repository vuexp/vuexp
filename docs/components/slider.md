---
sidebarDepth: 0
---

# Slider

This is an overview of the most common usage of `<Slider>`.

<DocExampleBox codeBox="https://codesandbox.io/s/8l36nz28p8?module=%2Fsrc%2FApp.vue">

```html
<Slider :value="80" @valueChange="onValueChanged" />
```

<SliderDoc />
</DocExampleBox>

`Slider` provides two-way data binding using v-model.

```html
<Slider v-model="value" />
```

## Props

| Name     | Type   | Default | Web | Mobile |
| -------- | ------ | ------- | --- | ------ |
| value    | Number | `0`     | ✔   | ✔      |
| minValue | Number | `0`     | ✔   | ✔      |
| maxValue | Number | `100`   | ✔   | ✔      |

## Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| valueChange | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/slider/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider)
