---
sidebarDepth: 0
---

# Frame

`<Frame>` is a UI component used to display `<Page>` elements.

---

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/l764j9p8pl?module=%2Fsrc%2FApp.vue">

```html
<StackLayout>
  <Frame id="Frame" />
    <Label id="Frame_label" text="FRAME" />
  <Frame />
</StackLayout>
```

```js
export default {
  name: 'FrameDoc',
  data() {
    return {
      textViewInput: 'default \n value',
    };
  },
  methods: {
    webViewLoadStarted(event) {
      console.log('WebView Loading Started');
    },
    webViewLoadFinished(event) {
      console.log('WebView Loading finished.');
    },
  },
  components: {
    StackLayout,
    Frame,
    Label,
  },
};
```

<FrameDoc />
</DocExampleBox>

## Example Usages

`Frame` with a default `Page`

```html
<Frame>
  <Page>
    <ActionBar title="Default Page Title" />
    <GridLayout>
      <label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```

`Frames` can be multiple

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
      <label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```
