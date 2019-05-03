---
sidebarDepth: 0
---

# WebView

`<WebView>` is a UI component that lets you show web content in your app. You can pull and show content from a URL or a local HTML file, or you can render static HTML content.

> Note: If provided src starts with "~/", it will be stripped and new path will be relative to the root "/".

```html
<WebView src="http://nativescript-vue.org/" />
```

```html
<WebView src="<div><h1>Some static HTML</h1></div>" />
```

```html
<WebView html="<div><h1>Some static HTML</h1></div>" />
```

> Note: If src and html properties are used together, remember that src property has precedence over html property.

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/o4zv94romq?module=%2Fsrc%2FApp.vue">
```html
<WebView src="<div><h1>WebView</h1></div>" />
<WebView html="<div><p>WebView</p></div>" />
```
<WebViewDoc />
</DocExampleBox>

## Props

| Name          | Type                                              | Default | Web | Mobile | Description |
| ------------- | ------------------------------------------------- | ------- | --- | ------ | ----------- |
| src          | String                                            |         | ✔   | ✔      | Gets or sets the displayed web content. Valid values: an absolute URL, the path to a local HTML file, or static HTML. |
| html          | String                                            |         | ✔   | ✔      | The HTML content to be shown. |

## Events

| Name        | Web | Mobile | Description |
| ----------- | --- | ------ | ----------- |
| loadStarted  | ✔   | ✔      | Emitted when the page has started loading in the \<WebView\>. |
| loadFinished | ✔   | ✔      | Emitted when the page has finished loading in the \<WebView\>. |
