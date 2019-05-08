---
sidebarDepth: 0
---

# Slider

This is an overview of the most common usage of `<Slider>`.

`Slider` is a UI component that displays a line and indicator that provides value selection in a value range.

---

## Live Demo

<DocExampleBox :liveDemoMode="true">
<SliderDoc />
</DocExampleBox>

## Example Usages
`Slider` provides two-way data binding using v-model.

```html
<Slider v-model="value" />
```

`Slider` can be initialized with minimum, maximum and initial values.

```html
<Slider :minValue="-100" :maxValue="100" :value="70" />
```

`Slider` emits `valueChange` event, which can be sent to a function

```html
<Slider @valueChange="onValueChanged($event)" />
```
```js
onValueChanged(event) {
    console.log("Current slider value: " + event.target.value);
}
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
