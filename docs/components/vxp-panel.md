---
sidebarDepth: 0
---

# VxpPanel

`<VxpPanel>` can be used for render components with a title

## Live Demo

<DocExampleBox>

```html
    <VxpPanel :title="title">
      <FlexBoxLayout justifyContent="flex-end" slot="topbar">
        <VxpPanelItem
          v-for="(child, index) in children"
          :key="index"
          @tap="onPanelIconClick($event)"
          :webIcon="'fa ' + child.icon"
        />
      </FlexBoxLayout>
      <StackLayout slot="content"> 
        <VxpLabel text="Label 1"></VxpLabel>
        <VxpLabel text="Label 2"></VxpLabel>
      </StackLayout>
    </VxpPanel>
```

```js
    addPanelIcon() {
      if (this.children.length == 2) {
        alert('You can add 2 icons');
        return;
      }
      this.children.push({ icon: 'fa-share-alt' });
    },
```

<VxpPanelLiveDemo />
</DocExampleBox>


## Props

| Name  | Type   | Default | Web | Mobile | Desctiption                  |
|-------|--------|---------|-----|--------|------------------------------|
| title | String |         | ✔   | ✔      | Sets the title of the panel. |

