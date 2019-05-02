---
sidebarDepth: 0
---

# AbsoluteLayout

The `<AbsoluteLayout>` container is the simplest layout container in NativeScript.

`<AbsoluteLayout>` has the following behavior:

* Uses a pair of absolute left/top coordinates to position its children.
* Doesn't enforce any layout constraints on its children.
* Doesn't resize its children at runtime when its size changes.


## Live Demo

The following example creates a simple grid. For more information about creating grid layouts

<DocExampleBox codeBox="https://codesandbox.io/s/lrv8061359?module=%2Fsrc%2FApp.vue">

```html
<AbsoluteLayout backgroundColor="#3c495e" height="230">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```

<AbsoluteLayoutDoc />
</DocExampleBox>

## Additional Children Props

When an element is a direct child of `<AbsoluteLayout>`, you can work with the following additional properties.

| Name | Type   | Default | Web | Mobile | Description |
| ---- | ------ | ------- | --- | ------ | ----------- |
| top  | Number |         | ✔   | ✔      | Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent. |
| left | Number |         | ✔   | ✔      | Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent. |
