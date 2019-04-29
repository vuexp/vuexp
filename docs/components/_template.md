---
sidebarDepth: 0
---

# ComponentName
⬇⬇⬇ Brief description of the component

<DocExampleBox>

```html
⬇⬇⬇ This section will contain static usage examples of the component like following 

<TextField
v-model="textFieldInput"
hint="This is placeholder"
:editable="true"
@returnPress="textFieldreturnPress"
@textChange="textFieldtextChange" />
```

  <TextFieldDoc />
</DocExampleBox>

## Props

| Name          | Type                                              | Default | Web | Mobile |
| ------------- | ------------------------------------------------- | ------- | --- | ------ |
| text          | String                                            |         | ✔   | ✔      |
| hint          | String                                            |         | ✔   | ✔      |
| editable      | Boolean                                           |         | ✔   | ✔      |
| maxLength     | Number                                            |         | ✔   | ✔      |
| secure        | Boolean                                           | `false` | ✔   | ✔      |
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


## Additional Children Props
⬇⬇⬇ This section will contain additional props 

---

## Live Demo
⬇⬇⬇ This section will contain interactive live demo of the component.
All attributes of the component should be able to be adjusted with a control panel.

❗️Important! Live demo of components that includes vue slots/children should let users to add/remove slots/children through demo editor panel. 

<DocExampleBox :liveDemoMode="true">
  <TextFieldLiveDemo />
</DocExampleBox>