---
sidebarDepth: 0
---

# TabView

This is an overview of the most common usage of `<TabView>` and `<TabViewItem>`.

<DocExampleBox codeBox="https://codesandbox.io/s/30vr9xw6nm?module=%2Fsrc%2FApp.vue">

```html
<TabView :selectedIndex="selectedIndex" @selectedIndexChanged="changed">
    <TabViewItem title="Tab 1" webIcon="fa fa-eye">
        <StackLayout>
            <Label text="Content for Tab 1"/>
        </StackLayout>
    </TabViewItem>
    <TabViewItem title="Tab 2">
        <Label text="Content for Tab 2"/>
    </TabViewItem>
    <TabViewItem title="Tab 3">
        <Label text="Content for Tab 3"/>
    </TabViewItem>
</TabView>
```

<TabViewDoc />
</DocExampleBox>

## TabView Props

| Name          | Type   | Default | Web | Mobile |
| ------------- | ------ | ------- | --- | ------ |
| selectedIndex | Number | 0       | ✔   | ✔      |

## TabView Events

| Name                 | Web | Mobile |
| -------------------- | --- | ------ |
| selectedIndexChanged | ✔   | ✔      |

## TabViewItem Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| id      | String |         | ✔   | ✔      |
| title   | String |         | ✔   | ✔      |
| webIcon | String |         | ✔   | ✘      |

> NOTE: *TabView only accept TabViewItem as child.*
 > _Be Aware limitations of NativeScript-Vue and NativeScript before using this component._

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/tab-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/ui/ns-ui-widgets/tab-view)