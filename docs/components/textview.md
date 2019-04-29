---
sidebarDepth: 0
---

# TextView

This is an overview of the most common usage of `<TextView>`.

<DocExampleBox codeBox="https://codesandbox.io/s/w61lryop88?module=%2Fsrc%2FApp.vue">
```html
<TextView text="Multi\nLine\nText" />
```
<TextViewDoc />
</DocExampleBox>

`TextView` provides two-way data binding using v-model.

```html
  <TextView v-model="textViewInput" :editable=true />
```

## Props

| Name          | Type                                              | Default | Web | Mobile |
| ------------- | ------------------------------------------------- | ------- | --- | ------ |
| text          | String                                            |         | ✔   | ✔      |
| hint          | String                                            |         | ✔   | ✔      |
| editable      | Boolean                                           |         | ✔   | ✔      |
| maxLength     | Number                                            |         | ✔   | ✔      |
| keyboardType  | `datetime` , `phone` , `number` , `url` , `email` |         | ✔   | ✔      |
| returnKeyType | `done`,`next`,`go`,`search`,`send`                |         | ✘   | ✔      |
| autocorrect   | Boolean                                           |         | ✔   | ✔      |

## Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| textChange  | ✔   | ✔      |
| returnPress | ✔   | ✔      |
| focus       | ✔   | ✔      |
| blur        | ✔   | ✔      |
