---
sidebarDepth: 0
---

# VxpHtmlView

This is an overview of the most common usage of `<VxpHtmlView>`.

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/o4zv94romq?module=%2Fsrc%2FApp.vue">

```html
<VxpHtmlView src="<div><h1>VxpHtmlView</h1></div>" />
```
<VxpHtmlViewDoc />
</DocExampleBox>

## Example Usages


```html
<VxpHtmlView src="http://nativescript-vue.org/" />
```

```html
<VxpHtmlView src="<div><h1>Some static HTML</h1></div>" />
```

## Props

| Name | Type | Web | Mobile | Description |
| --- | --- | --- | --- | --- |
| src | String | ✔ | ✔ | Gets or sets the displayed web content. Valid values: an absolute URL, the path to a local HTML file, or static HTML. |
