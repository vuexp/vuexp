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

| Name          | Type                                              | Default | Web | Mobile | Description |
| ------------- | ------------------------------------------------- | ------- | --- | ------ | ----------- |
| text          | String                                            |         | ✔   | ✔      | Gets or sets the value of the field.  |
| hint          | String                                            |         | ✔   | ✔      | Gets or sets the placeholder text. |
| editable      | Boolean                                           |         | ✔   | ✔      | When true, indicates that the user can edit the value of the field. |
| maxLength     | Number                                            |         | ✔   | ✔      | Limits input to the spcified number of characters. |
| secure        | Boolean                                           | `false` | ✔   | ✔      | Hides the entered text when true. Use this property to create password input fields. |
| keyboardType  | `datetime` , `phone` , `number` , `url` , `email` |         | ✔   | ✔      | Shows a custom keyboard for easier text input. |
| returnKeyType | `done`,`next`,`go`,`search`,`send`                |         | ✘   | ✔      | Gets or sets the label of the return key. |
| autocorrect   | Boolean                                           |         | ✔   | ✔      | Enables or disables autocorrect. |

## Events
⬇⬇⬇ This section will contain detailed information about events 

| Name        | Web | Mobile | Description |
| ----------- | --- | ------ | ----------- |
| textChange  | ✔   | ✔      | Emitted when the text changes. |
| returnPress | ✔   | ✔      | Emitted when the return key is pressed. |
| focus       | ✔   | ✔      | Emitted when the field is in focus. |
| blur        | ✔   | ✔      | Emitted when the field loses focus. |

## Additional Children Props
⬇⬇⬇ This section will contain additional props. Like dock attribute that DockLayout's children needs to include.

---

## Live Demo
⬇⬇⬇ This section will contain interactive live demo of the component.
All attributes of the component should be able to be adjusted with a control panel.

❗️Important! Live demo of components that includes vue slots/children should let users to add/remove slots/children through demo editor panel. 

<DocExampleBox :liveDemoMode="true">
  <TextFieldLiveDemo />
</DocExampleBox>