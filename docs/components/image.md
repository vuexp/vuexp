---
sidebarDepth: 0
---

# Image

This is an overview of the most common usage of `<Image>`.

`Image` is a UI component that displays an image resource .

---

## Live Demo

<DocExampleBox :liveDemoMode="true">
<ImageDoc />
</DocExampleBox>

## Example Usages

Displaying an image relative to the app directory

```html
<Img src="~/images/logo.png"/>
```

Displaying an image from a URL

```html
<Img src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png"/>
```

Displaying an image stretched to fill its container and with alternate text to be displayed when image can not be displayed.

```html
<Img src="~/images/logo.png" stretch="fill" placeholder="VueXP Logo"/>
```

Displaying an image with width an height value.

```html
<Img src="~/images/logo.png" width="640" height="480"/>
```

## Props

| Name        | Type                                      | Default | Web | Mobile | Description |
| ----------- | ----------------------------------------- | ------- | --- | ------ | ----------- |
| src         | String                                    |         | ✔   | ✔      | Path of the image resource. Full URL for external image, relative URL starting with '~' for application asset. |
| tintColor   | String                                    |         | ✘   | ✔      | Tint color shown over image. |
| stretch     | `none`, `aspectFill`, `aspectFit`, `fill` | `none`  | ✔   | ✔      | Image stretching strategy inside image container. |
| loadMode    | `async`, `sync`                           | `async` | ✘   | ✔      | Image loading strategy. `async` fetches and loads image in background. |
| placeholder | String                                    |         | ✔   | ✔      | Placeholder text displayed when image can not be displayed. |



## Events

| Name        | Web | Mobile |  Description |
| ----------- | --- | ------ | ------------ |
| onLoad      | ✔   | ✔      | Emitted when image load is completed successfully. |
| onLoadError | ✔   | ✔      | Emitted when image load has encountered an error. |
