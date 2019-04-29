---
sidebarDepth: 0
---

# ComponentName
⬇⬇⬇ Brief description of the component

<DocExampleBox codeBox="https://codesandbox.io/s/1zlq9x6954?module=%2Fsrc%2FApp.vue">

```html
⬇⬇⬇ This section will contain static usage examples of the component like following 

<DockLayout :stretchLastChild="false" backgroundColor="#3c495e" class="container">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>


<DockLayout :stretchLastChild="true" backgroundColor="#3c495e" class="container">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
  <Label text="center" backgroundColor="#1c6b48" />
</DockLayout>
```

<DockLayoutDoc />
</DocExampleBox>

## Props
⬇⬇⬇ This section will contain attribute details.

| Name             | Type    | Default | Web | Mobile |
| ---------------- | ------- | ------- | --- | ------ |
| stretchLastChild | Boolean | `false` | ✔   | ✔      |

## Additional Children Props
⬇⬇⬇ This section will contain additional props like following; ⬇


When an element is a direct child of `<DockLayout>`, you can work with the following additional properties.



| Name | Type                                        | Default | Web | Mobile |
| ---- | ------------------------------------------- | ------- | --- | ------ |
| dock | `top`, `right`, `bottom`, `left` , `center` |         | ✔   | ✔      |

---

## Live Demo
⬇⬇⬇ This section will contain interactive live demo of the component.
All attributes of the component should be able to be adjusted with a control panel.

❗️Important! Live demo of components that includes vue slots/children should let users to add/remove slots/children through demo editor panel. 

<DocExampleBox :liveDemoMode="true">
  <DockLayoutLiveDemo />
</DocExampleBox>