---
sidebarDepth: 0
---

# AbsoluteLayout

The `<AbsoluteLayout>` container is the simplest layout container in NativeScript.

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

| Name | Type   | Default | Web | Mobile |
| ---- | ------ | ------- | --- | ------ |
| top  | Number |         | ✔   | ✔      |
| left | Number |         | ✔   | ✔      |

## References

For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/absolute-layout/)
or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_)
