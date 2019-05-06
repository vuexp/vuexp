---
sidebarDepth: 0
---

# TabView

`<TabView>` and its inner item `<TabViewItem>` enables switching group of contents or components.

## Live Demo

<DocExampleBox codeBox="">

```html
<TabView :selectedIndex="selectedIndex" @selectedIndexChanged="changed">
    <TabViewItem title="Tab 1" webIcon="fa fa-eye">
        <Label text="1"/>
    </TabViewItem>
    <TabViewItem title="Tab 2">
        <Label text="2"/>
    </TabViewItem>
    <TabViewItem title="Tab 3">
        <Label text="3"/>
    </TabViewItem>
</TabView>
```

<TabViewLiveDemo />
</DocExampleBox>

## Example Usages

<DocExampleBox  codeBox="">
```html
<TabView class="container" @selectedIndexChanged="changed">
    <TabViewItem title="La Liga" id="la-liga">
        <StackLayout>
            <Label text="Barcelona"/>
            <Label text="Atletico Madrid"/>
            <Label text="Real Madrid"/>
        </StackLayout>
    </TabViewItem>
    <TabViewItem title="Premier League" id="premier">
        <StackLayout>
            <Label text="Liverpool"/>
            <Label text="Man. City"/>
            <Label text="Chelsea"/>
        </StackLayout>
    </TabViewItem>
</TabView>
```

<TabViewDoc />
</DocExampleBox> 





## Props

| Name          | Type   | Default | Web | Mobile | Description                          |
|---------------|--------|---------|-----|--------|--------------------------------------|
| selectedIndex | Number | 0       | ✔   | ✔      | Index of the clicked `<TabViewItem>` |

## Events

| Name                 | Web | Mobile |
|----------------------|-----|--------|
| selectedIndexChanged | ✔   | ✔      |

## TabViewItem Props 

| Name    | Type   | Default | Web | Mobile | Description                                  |
|---------|--------|---------|-----|--------|----------------------------------------------|
| id      | String |         | ✔   | ✔      | An identifier for `<TabViewItem>`            |
| title   | String |         | ✔   | ✔      | User-friendly title                          |
| webIcon | String |         | ✔   | ✘      | Accepts css class of the icon to show in web |

> NOTE: *TabView only accept TabViewItem as child.*
 > _Be Aware limitations of NativeScript-Vue and NativeScript before using this component._
