---
sidebarDepth: 0
---

# VxpLabel

This is an overview of the most common usage of `<VxpLabel>`.
`VxpLabel` is a UI component that displays read-only text.

## Live Demo

<DocExampleBox :liveDemoMode="true">
```html
<VxpLabel text="Label" />
```
<VxpLabelLiveDemo />
</DocExampleBox>

## Styling the label

If you need to style parts of the text, you can use a combination of a `FormattedString` and `Span` elements.

```html
<VxpLabel :textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</VxpLabel>
```

## Props

| Name     | Type    | Default | Web | Mobile | Description                                |
| -------- | ------- | ------- | --- | ------ | ------------------------------------------ |
| text     | String  |         | ✔   | ✔      | Gets or sets the text of the label.        |
| textWrap | Boolean | `false` | ✔   | ✔      | Gets or sets whether the label wraps text. |
