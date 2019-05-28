---
sidebarDepth: 0
---

# VxpDropdownMenu

The `<VxpDropdownMenu>` component can be used to generate Dropdown Menus inside any component.

This component is a UI component that provides an interface for a single-select menu. The component is displayed as ActionDialog in Native environment.

## Live Demo

<DocExampleBox :liveDemoMode="true">
<VxpDropdownMenuDoc />
</DocExampleBox>

## Example Usage

```html
<VxpDropdownMenu 
    :iconClass="fa fa-pencil" 
    :items="items" 
    :title="dropdownTitle" 
    :disabled="dropdownDisable">
</VxpDropdownMenu>
```

```js
data() {
    return {
      dropdownTitle: 'Dropdown',
      dropdownDisable: false,
      items: [
        { icon: 'fa-trash', title: 'Delete Selected Lead(s)', iconClass: 'fa' },
        { icon: 'fa-plus-circle', title: 'Clone Selected Lead(s)', iconClass: 'fa' },
        { icon: 'fa-calendar', title: 'Schedule Appointment', iconClass: 'fa' },
      ]
    };
}
```

## Props

| Name                | Type    | Default    | Web | Mobile | Description                                                     |
| ------------------- | ------- | ---------- | --- | ------ | --------------------------------------------------------------- |
| title               | String  | ` `        | ✔   | ✔      | Sets the title shown in the dropdown menu.                      |
| icon                | String  | ` `        | ✔   | ✔      | Sets the icon shown in the dropdown menu.                       |
| iconClass           | String  | ` `        | ✔   | ✔      | Sets the icon class in the dropdown menu. Ex: `fa`              |
| items               | Array   | `() => []` | ✔   | ✔      | Sets the dropdown items in the dropdown menu.                   |
| disabled            | Boolean | `false`    | ✔   | ✔      | Sets the dropdown menu enable or disable.                       |
| selectedIndex       | Number  | `null`     | ✔   | ✔      | Returns dropdown item index when click on an dropdown menuitem. |
| nativeCancelBtnText | String  | `'Cancel'` | ✘   | ✔      | Adjusts the cancel button text on platform native.              |

## Events

| Name                 | Type   | Default           | Web | Mobile | Description                                              |
| -------------------- | ------ | ----------------- | --- | ------ | -------------------------------------------------------- |
| selectedIndexChanged | Object | `{ index, item }` | ✔   | ✔      | Emitted when the dropdown menu item is clicked / tapped. |
