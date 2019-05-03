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
<Img src="/docs/.vuepress/public/images/logo.png" stretch="none" />
```

Displaying an image from a URL

```html
<Img src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="fill"/>
```


## Props

| Name      | Type                                      | Default | Web | Mobile | Description |
| --------- | ----------------------------------------- | ------- | --- | ------ | ----------- |
| src       | String                                    |         | ✔   | ✔      | Path of the image resource. It can be a full URL or starting with '~' for project asset. |
| tintColor | String                                    |         | ✘   | ✔      | tint color |
| stretch   | `none`, `aspectFill`, `aspectFit`, `fill` | `none`  | ✔   | ✔      | How should image be streched inside its container? |
| loadMode  | `async`, `sync`                           | `async` | ✘   | ✔      | load mode |
