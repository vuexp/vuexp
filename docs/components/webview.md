---
sidebarDepth: 0
---

# WebView

`<WebView>` is a UI component that lets you show web content in your app. You can pull and show content from a URL or a local HTML file, or you can render static HTML content.

<DocExampleBox codeBox="https://codesandbox.io/s/o4zv94romq?module=%2Fsrc%2FApp.vue">
```html
<WebView src="<div><h1>WebView</h1></div>" />
```
<WebViewDoc />
</DocExampleBox>

> Note: If provided src starts with "~/", it will be stripped and new path will be relative to the root "/".

```html
<WebView src="http://nativescript-vue.org/" />
```

```html
<WebView src="<div><h1>Some static HTML</h1></div>" />
```

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/web-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview)
