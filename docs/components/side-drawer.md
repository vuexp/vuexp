# SideDrawer

Side Drawer Component


## Live Demo

<DocExampleBox>
```html
  <VxpSideDrawer ref="drawer" class="sidedrawer-doc-container">
    <StackLayout v-view:drawerContent class="sidedrawer-doc-container__drawer">
      <StackLayout class="sidedrawer-doc-container__drawer__title">
        <Label text="Navigation Menu"></Label>
      </StackLayout>
      <StackLayout>
        <Label text="Home" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Social" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Promotions" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Starred" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Drafts" class="sidedrawer-doc-container__drawer__label"></Label>
      </StackLayout>
      <Button @tap="closeDrawer" primary text="CLOSE DRAWER"></Button>
    </StackLayout>
    <StackLayout v-view:mainContent>
      <Label :textWrap="true" class="sidedrawer-doc-container__text" text="Main Content Area" />
      <Button @tap="openDrawer" primary text="OPEN DRAWER"></Button>
    </StackLayout>
  </VxpSideDrawer>
```

```scss
.sidedrawer-doc-container {
  height: 340px;

  &__drawer {
    background-color: #282b30;
    color: #ffffff;
    padding: 20px;

    &__title {
      text-align: center;
      font-weight: bold;
      color: #ebebeb;
    }

    &__label {
      font-size: 16px;
      line-height: 3em;
      border-bottom: solid 1px #393c41;
    }
  }

  &__text {
    text-align: center;
    margin-bottom: 20px;
  }
}
```

<SideDrawerDoc />
</DocExampleBox>

## Example Usages

```html
  <VxpSideDrawer ref="drawer" class="sidedrawer-doc-container">
    <StackLayout v-view:drawerContent class="sidedrawer-doc-container__drawer">
      <StackLayout class="sidedrawer-doc-container__drawer__title">
        <Label text="Navigation Menu"></Label>
      </StackLayout>
      <StackLayout>
        <Label text="Home" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Social" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Promotions" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Starred" class="sidedrawer-doc-container__drawer__label"></Label>
        <Label text="Drafts" class="sidedrawer-doc-container__drawer__label"></Label>
      </StackLayout>
      <Button @tap="closeDrawer" primary text="CLOSE DRAWER"></Button>
    </StackLayout>
    <StackLayout v-view:mainContent>
      <Label :textWrap="true" class="sidedrawer-doc-container__text" text="Main Content Area" />
      <Button @tap="openDrawer" primary text="OPEN DRAWER"></Button>
    </StackLayout>
  </VxpSideDrawer>
```

Side Drawer does not take explicit props nor emits custom events. It takes advantage of `v-view` directive in order to work as intended. The key point is to use `v-view` with `mainContent` and `drawerContent` templates.

To open/close drawer, implement `nativeView.showDrawer` and `nativeView.closeDrawer` methods on component instance.