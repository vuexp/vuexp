---
sidebarDepth: 0
---

# VxpDatePicker

This is an overview of the most common usage of `<VxpDatePicker>`.

## Live Demo

<DocExampleBox>

<VxpDatePickerDoc />

</DocExampleBox>

### Props

| Name             | Type    | Default        | Web | Mobile | Description                               |
| ---------------- | ------- | -------------- | --- | ------ | ----------------------------------------- |
| dayPlaceholder   | String  | Day            | ✔   | ✔      | Set dayPlaceholder of the datePicker.     |
| monthPlaceholder | String  | Month          | ✔   | ✔      | Set monthPlaceholder of the datePicker.   |
| yearPlaceholder  | String  | Year           | ✔   | ✔      | Set yearPlaceholder of the datePicker.    |
| disabled         | Boolean | `false`        | ✔   | ✔      | Set enable or disabled of the datePicker. |
| day              | String  | null           | ✔   | ✔      | Set day of the datePicker.                |
| month            | Number  | null           | ✔   | ✔      | Set month of the datePicker.              |
| months           | Array   | English Months | ✔   | ✔      | Set months of the datePicker.             |
| year             | Number  | null           | ✔   | ✔      | Set year of the datePicker.               |
| minYear          | Number  | 1900           | ✔   | ✔      | Set minYear of the datePicker.            |
| maxYear          | Number  | 2018           | ✔   | ✔      | Set maxYear of the datePicker.            |
| label            | String  | ''             | ✔   | ✔      | Set label of the datePicker.              |
| errors           | Array   | []             | ✔   | ✔      | Set errors of the datePicker.             |

### Events

| Name       | Web | Mobile | Description                                                     |
| ---------- | --- | ------ | --------------------------------------------------------------- |
| dateChange | ✔   | ✔      | Event occurs whenever dropDown item changes by user interaction |
