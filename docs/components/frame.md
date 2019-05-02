---
sidebarDepth: 0
---

# Frame

`<Frame>` is a UI component used to display `<Page>` elements.

A frame with a default page

```html
<Frame>
  <Page>
    <ActionBar title="Default Page Title" />
    <GridLayout>
      <Label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```

Multiple Frames

<DocExampleBox codeBox="https://codesandbox.io/s/yjmjyny5jx?module=%2Fsrc%2FApp.vue">

```html
<Frame />
  <TextView v-model="textViewInput" :editable="true" />
  <Frame />
    <WebView src="<div><h1>Some static HTML</h1></div>" />
  <!--A frame with a default page -->
  <Frame>
    <Page>
      <ActionBar title="Default Page Title" />
      <GridLayout columns="*, *" rows="*, *">
        <Label text="Default Page Content" />
      </GridLayout>
    </Page>
</Frame>
```

```js
webViewLoadStarted(event) {
  console.log("WebView Loading Started");
},
webViewLoadFinished(event) {
  console.log("WebView Loading finished.");
},
```

<FrameDoc />
</DocExampleBox>

