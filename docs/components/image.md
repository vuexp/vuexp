---
sidebarDepth: 0
---

# Image

This is an overview of the most common usage of `<Image>`.

Displaying an image relative to the app directory

```html
<img src="~/images/logo.png " stretch="none" />
```

Displaying an image from a URL

```html
<img
  src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png"
  stretch="fill"
/>
```

<DocExampleBox codeBox="https://codesandbox.io/s/vnxyxz9553?module=%2Fsrc%2FApp.vue">

```html
<StackLayout rows="*, *" columns="*, *" style="height: 600px; width: 400px; margin:auto;">
  <StackLayout row="0" col="0" class="stack-cell">
    <Label text="none" class="label-text" />
    <!-- >> image-stretch-none -->
    <Img src="~/images/logo.png" stretch="none" />
    <!-- << image-stretch-none -->
  </StackLayout>
  <StackLayout row="1" col="0" class="stack-cell">
    <Label text="fill" class="label-text" />
    <!-- >> image-stretch-fill -->
    <Img src="~/images/logo.png" stretch="fill" />
    <!-- << image-stretch-fill -->
  </StackLayout>
  <StackLayout row="0" col="1" class="stack-cell">
    <Label text="aspectFill" class="label-text" />
    <!-- >> image-stretch-aspect-fill -->
    <Img src="~/images/logo.png" stretch="aspectFill" />
    <!-- << image-stretch-aspect-fill -->
  </StackLayout>
  <StackLayout row="1" col="1" class="stack-cell">
    <Label text="aspectFit" class="label-text" />
    <!-- >> image-stretch-aspect-fit -->
    <Img src="~/images/logo.png" stretch="aspectFit" />
    <!-- << image-stretch-aspect-fit -->
  </StackLayout>
</StackLayout>
```

<ImageDoc />
</DocExampleBox>

## Props

| Name      | Type                                      | Default | Web | Mobile |
| --------- | ----------------------------------------- | ------- | --- | ------ |
| src       | String                                    |         | ✔   | ✔      |
| tintColor | String                                    |         | ✔   | ✔      |
| stretch   | `none`, `aspectFill`, `aspectFit`, `fill` | `none`  | ✔   | ✔      |
| loadMode  | `async`, `sync`                           | `async` | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/image/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_image_.image)
