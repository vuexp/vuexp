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

### Removing the border

By default, a border is drawn at the bottom of the `<ActionBar>`. In addition to the border, on iOS devices a translucency filter is also applied over the `<ActionBar>`.

## Props

| Name  | Type   | Default | Web | Mobile | Description                              |
| ----- | ------ | ------- | --- | ------ | ---------------------------------------- |
| title | String |         | ✔   | ✔      | Gets or sets the title shown in the bar. |
