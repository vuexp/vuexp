# SideDrawer

Side Drawer Component


## Live Demo

<DocExampleBox>
```html
  <VxpSideDrawer ref="drawer" class="sidedrawer-doc-container">
    <FlexboxLayout flexDirection="column" slot="drawerContent" class="sidedrawer-doc-container__drawer">
		  <FlexboxLayout class="sidedrawer-doc-container__drawer__title">
			  <Label text="Navigation Menu"></Label>
			</FlexboxLayout>
			<StackLayout>
				<Label text="Home" class="sidedrawer-doc-container__drawer__label"></Label>
				<Label text="Social" class="sidedrawer-doc-container__drawer__label"></Label>
				<Label text="Promotions" class="sidedrawer-doc-container__drawer__label"></Label>
				<Label text="Starred" class="sidedrawer-doc-container__drawer__label"></Label>
				<Label text="Drafts" class="sidedrawer-doc-container__drawer__label"></Label>
			</StackLayout>
			<Button @tap="closeDrawer" primary text="CLOSE DRAWER"></Button>
    </FlexboxLayout>
    <StackLayout slot="mainContent">
      <Label :textWrap="true" class="sidedrawer-doc-container__text" text="Main Content Area" />
			<Button @tap="showDrawer" primary text="SHOW DRAWER"></Button>
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
		width: 200px;
		height: 100%;

  	&__title {
	  	text-align: center;
	  	font-weight: bold;
	  	color: #ebebeb;
	  }

	  &__label {
		  line-height: 36px;
		  border-bottom: solid 1px #393c41;
	  }
  }

	&__text {
	  text-align: center;
	  margin-bottom: 20px;
	}
}
```

<VxpSideDrawerDoc />
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

Side Drawer does not take explicit props nor emits custom events. The key point is to use named slots `slot="drawerContent"` and `slot="mainContent"` to place drawer content and main content inside the component.

To open/close drawer, implement `showDrawer` and `closeDrawer` methods as `this.$refs.drawer.showDrawer();` and `this.$refs.drawer.closeDrawer();`