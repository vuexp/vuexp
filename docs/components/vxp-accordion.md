---
sidebarDepth: 0
---

# VxpAccordion

This is an overview of the most common usage of `<VxpAccordion>`.

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/n5y3lym66p?module=%2Fsrc%2FApp.vue">

```html
<VxpAccordion text="Button" size="medium" primary @tap="onButtonTap" />
```

```js
 onButtonTap() {
      console.log("clicked");
    }
```

<VxpAccordionDoc />
</DocExampleBox>

`VxpAccordion` is a UI component that displays a button which reacts to a user gesture.

## Props

| Name      | Type    | Default  | Web | Mobile | Desctiption                                                                                                    |
| --------- | ------- | -------- | --- | ------ | -------------------------------------------------------------------------------------------------------------- |
| initialExpandedItems      | Array  |  []        | ✔   | ✔      | Sets the initial expanded items with indexes.                                                                                  |
| autoCollapse  | Boolean | `false`  | ✔   | ✔      | Single expanded item at a time |
                                     |
## Events

| Name | Web | Mobile | Description                        |
| ---- | --- | ------ | ---------------------------------- |
| collapsed  | ✔   | ✔      | Emitted when an accordion item is collapsed |
| expanded  | ✔   | ✔      | Emitted when an accordion item is expanded |

## VxpAccordionItem Props

| Name      | Type    | Default  | Web | Mobile | Desctiption                                                                                                    |
| --------- | ------- | -------- | --- | ------ | -------------------------------------------------------------------------------------------------------------- |
| title      | String  |          | ✔   | ✔      | Sets the title of the accordion item.                                                                                  |
