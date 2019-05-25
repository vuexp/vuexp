---
sidebarDepth: 0
---



## Live Demo

<DocExampleBox :liveDemoMode="true">
<tableviewdoc />
</DocExampleBox>


## Props

| Name     | Type   | Default | Web | Mobile | Description |
| -------- | ------ | ------- | --- | ------ | ----------- |
| value    | Number | `0`     | ✔   | ✔      | Current value of slider. |
| minValue | Number | `0`     | ✔   | ✔      | Minimum value that slider can take. |
| maxValue | Number | `100`   | ✔   | ✔      | Maximum value that slider can take. |

## Events

| Name        | Web | Mobile | Description |
| ----------- | --- | ------ | ----------- |
| valueChange | ✔   | ✔      | Emitted after slider indicator slid and released. |
