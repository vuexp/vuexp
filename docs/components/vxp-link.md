---
sidebarDepth: 0
---

# VxpLink

`<VxpLink>` component is used for jumping to another internal or external link.

## Live Demo

<DocExampleBox>

```html
  <StackLayout style="margin-top:20px" class="demo-panel">
      <Label text="Live example" class="demo-panel__title"/>
      <VxpLink :text="text" :externalUrl="externalUrl"></VxpLink>
    </StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Manage Link Button Properties" class="demo-panel__title"/>
      <StackLayout orientation="horizontal" class="m-b-10">
        <Label text="Text:"></Label>
        <TextField id="linkButton__text__textfield" v-model="text" :editable="true"/>
      </StackLayout>
      <StackLayout orientation="horizontal" class="m-b-10">
        <Label text="External Url:"></Label>
        <TextField id="linkButton__externalUrl__textfield" v-model="externalUrl" :editable="true"/>
      </StackLayout>
    </StackLayout>
```

<VxpLinkLiveDemo />
</DocExampleBox>



## Example Usages

```html
<VxpLink :text="text" :externalUrl="externalUrl"></VxpLink>
```
    

## Props

| Name        | Type      | Default | Web | Mobile | Description                                  |
|-------------|-----------|---------|-----|--------|----------------------------------------------|
| text        | `String`  |         | ✔   | ✔      | Link text is visible part of the link button |
| externalUrl | `String`  |         | ✔   | ✔      | Destination address                          |

## Events

| Name | Type  | Web | Mobile | Description                                                                                  |
|------|-------|-----|--------|----------------------------------------------------------------------------------------------|
| tap  | Event | ✔   | ✔      | Outputs and event object when link button is clicked and only if externalUrl is not provided |
