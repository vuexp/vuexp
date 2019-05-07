---
sidebarDepth: 0
---

# Page

`<Page>` is a UI component that represents an application screen.

---

## Live Demo

<DocExampleBox :liveDemoMode="true" >

```html
<Page :actionBarHidden="actionBarHidden">
  <ActionBar title="My App" />
  <StackLayout class="page-wrapper">
    <StackLayout>
      <Label text="My Content" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <Label text="actionBarHidden:" />
      <input type="checkbox" v-model="actionBarHidden" id="Page_actionBarHidden_input" />
    </StackLayout>
  </StackLayout>
</Page>
```

```js
export default {
  name: 'PageDoc',
  data() {
    return {
      actionBarHidden: false,
      backgroundSpanUnderStatusBar: false,
      statusBarStyle: 'light',
    };
  },
  methods: {
    navigatedFrom(event) {
      console.log('Emitted after the app has navigated away from the current page.');
    },
    navigatedTo(event) {
      console.log('Emitted after the app has navigated to the current page.');
    },
    navigatingFrom(event) {
      console.log('Emitted before the app has navigated away from the current page.');
    },
    navigatingTo(event) {
      console.log('Emitted before the app has navigated to the current page.');
    },
  },
  components: {
    StackLayout,
    Page,
    ActionBar,
    Label,
  },
};
```

```scss
.page-wrapper * {
  margin: 3px;
}
```

<PageDoc />
</DocExampleBox>

## Example Usages

NativeScript apps typically consist of one or more `<Page>` that
wrap content such as an `<ActionBar>` and other UI widgets.

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content" />
  </GridLayout>
</Page>
```

## Props

| Name                         | Type    | Default   | Web | Mobile | Description                                                                                                                                                                           |
| ---------------------------- | ------- | --------- | --- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actionBarHidden              | Boolean | `false`   | ✔   | ✔      | Shows or hides the `<ActionBar>` for the page.                                                                                                                                        |
| backgroundSpanUnderStatusBar | Boolean | `false`   | x   | ✔      | Gets or sets whether the background of the page spans under the status bar.                                                                                                           |
| androidStatusBarBackground   | Color   | `#4DBA87` | x   | ✔      | (Android-only) Gets or sets the color of the status bar on Android devices. (Web) This field should set in `public/index.html` for web. `<meta name="theme-color" content="#4DBA87">` |
| enableSwipeBackNavigation    | Boolean | `true`    | x   | ✔      | (iOS-only) Gets or sets whether the page can be swiped back on iOS.                                                                                                                   |
| statusBarStyle               | String  | `light`   | x   | ✔      | Gets or sets the style of the status bar. Valid values: `light` or `dark`                                                                                                             |

## Events

| Name           | Web | Mobile | Description                                                      |
| -------------- | --- | ------ | ---------------------------------------------------------------- |
| navigatedFrom  | ✔   | ✔      | Emitted after the app has navigated away from the current page.  |
| navigatedTo    | ✔   | ✔      | Emitted after the app has navigated to the current page.         |
| navigatingFrom | ✔   | ✔      | Emitted before the app has navigated away from the current page. |
| navigatingTo   | ✔   | ✔      | Emitted before the app has navigated to the current page.        |
