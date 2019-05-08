---
sidebarDepth: 0
---

# TabView

`<TabView>` and its inner item `<TabViewItem>` enables switching group of contents or components.
`<TabView>` is a navigation component that shows content grouped into tabs and lets users switch between tabs.

---

## Live Demo

<DocExampleBox :liveDemoMode="true">

```html
<TabView :selectedIndex="selectedIndex" @selectedIndexChanged="changed">
  <TabViewItem title="Tab 1" webIcon="fa fa-eye">
    <label text="1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <label text="2" />
  </TabViewItem>
  <TabViewItem title="Tab 3">
    <label text="3" />
  </TabViewItem>
</TabView>
```

<TabViewLiveDemo />
</DocExampleBox>

## Example Usages

<DocExampleBox  :liveDemoMode="true">

```html
<TabView class="container" @selectedIndexChanged="changed">
  <TabViewItem title="La Liga" id="la-liga">
    <StackLayout>
      <label text="Barcelona" />
      <label text="Atletico Madrid" />
      <label text="Real Madrid" />
    </StackLayout>
  </TabViewItem>
  <TabViewItem title="Premier League" id="premier">
    <StackLayout>
      <label text="Liverpool" />
      <label text="Man. City" />
      <label text="Chelsea" />
    </StackLayout>
  </TabViewItem>
</TabView>
```

<TabViewDoc />
</DocExampleBox>

## Props

| Name                 | Type     | Default   | Web | Mobile | Description                                                                            |
| -------------------- | -------- | --------- | --- | ------ | -------------------------------------------------------------------------------------- |
| selectedIndex        | `Number` | `0`       | ✔   | ✔      | Gets or sets the currently selected tab.                                               |
| tabTextColor         | `Color`  | `#000000` | ✔   | ✔      | (Style property) Gets or sets the text color of the tabs titles.                       |
| tabBackgroundColor   | `Color`  | `#f9f9f9` | ✔   | ✔      | (Style property) Gets or sets the background color of the tabs.                        |
| selectedTabTextColor | `Color`  | `#000000` | ✔   | ✔      | (Style property) Gets or sets the text color of the selected tab title.                |
| androidTabsPosition  | `String` | `top`     | ✘   | ✔      | Sets the position of the TabView in Android platform. Valid values: `top` or `bottom`. |

## Events

| Name                 | Web | Mobile | Description                                                                                                                                                         |
| -------------------- | --- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| selectedIndexChanged | ✔   | ✔      | Emits an event object containing an newIndex property with the index of the tapped `<TabViewItem>` (and an `oldIndex` property with the index of the previous tab). |

## TabViewItem Props

| Name    | Type   | Default | Web | Mobile | Description                                  |
| ------- | ------ | ------- | --- | ------ | -------------------------------------------- |
| id      | String |         | ✔   | ✔      | An identifier for `<TabViewItem>`            |
| title   | String |         | ✔   | ✔      | User-friendly title                          |
| webIcon | String |         | ✔   | ✘      | Accepts css class of the icon to show in web |

> NOTE: _TabView only accept TabViewItem as child._ > _Be Aware limitations of NativeScript-Vue and NativeScript before using this component._
