---
sidebarDepth: 0
---

# VxpAccordion

This is an overview of the most common usage of `<VxpAccordion>`.

`VxpAccordion` is used to show (and hide) HTML content.

## Live Demo

<DocExampleBox codeBox="https://codesandbox.io/s/n5y3lym66p?module=%2Fsrc%2FApp.vue">

```html
<VxpAccordion autoCollapse @collapsed="onCollapsed" @expanded="onExpanded" />
```

```js
 onCollapsed() {
      console.log("collapsed");
    }
 onExpanded() {
      console.log("expanded");
    }
```

<VxpAccordionDoc />
</DocExampleBox>

## Example Usages

```html
<VxpAccordion autoCollapse>
    <VxpAccordionItem title="Just a title"> </VxpAccordionItem>
    <VxpAccordionItem title="A title with content">
        <VxpButton text="Sample Button" />
    </VxpAccordionItem>
</VxpAccordion>
```

## Props

| Name      | Type    | Default  | Web | Mobile | Desctiption                                                                                                    |
| --------- | ------- | -------- | --- | ------ | -------------------------------------------------------------------------------------------------------------- |
| initialExpandedItems      | Array  |  []        | ✔   | ✔      | Sets the initial expanded items with indexes.                                                                                  |
| autoCollapse  | Boolean | `false`  | ✔   | ✔      | Single expanded item at a time |

## Events

| Name | Web | Mobile | Description                        |
| ---- | --- | ------ | ---------------------------------- |
| collapsed  | ✔   | ✔      | Emitted when an accordion item is collapsed |
| expanded  | ✔   | ✔      | Emitted when an accordion item is expanded |

## VxpAccordionItem Props

| Name      | Type    | Default  | Web | Mobile | Desctiption                                                                                                    |
| --------- | ------- | -------- | --- | ------ | -------------------------------------------------------------------------------------------------------------- |
| title      | String  |          | ✔   | ✔      | Sets the title of the accordion item.                                                                                  |
