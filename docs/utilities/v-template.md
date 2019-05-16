---
sidebarDepth: 0
---

# v-template

The `<v-template>` component lets you define markup that you can reuse as a template.

## Props

| Name | Type   | Default | Web | Mobile | Description |
| ---- | ------ | ------- | --- | ------ | ------------ |
| if   | String |         | ✔   | ✔      | The condition for using this template. |
| name | String |         | ✔   | ✔      | The name of the template, auto-generated if omitted. |

## Basic Usage

The `<v-template>` component is used internally by the ListView component to iterate over its list items.

## Advanced Usage

You can use `v-template` to implement custom components that require a template or multiple templates.

`v-template` does not render anything when placed in the template. Instead, it adds a `$templates` property to the parent element. This `$templates` property is a TemplateBag instance.

Next, `v-template` registers itself as an available template in the respective `TemplateBag` instance for the parent element. Any existing TemplateBag instance on the parent element is reused.

### The TemplateBag class

The `TemplateBag` class lets you register multiple templates and select the correct template based on the item and the conditions provided for each template.

Templates are stored as objects conforming to the KeyedTemplate interface.

### The selectorFn property

The `selectorFn` property returns a function that accepts a single parameter. This parameter is the item whose template is selected.

The single-parameter function goes through all templates registered in the `TemplateBag` instance and returns the first one where the `if` condition is met. If none of the templates match, returns `default`.
