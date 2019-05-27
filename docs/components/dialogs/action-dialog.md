---
sidebarDepth: 0
---

# ActionDialog

This is an overview of the most common usage of ActionDialog.

The `action()` method is available globally. You can call it anywhere in your app.

The `action()` method shows a list of selectable options and a cancellation button. Use it to let the user choose between options or dismiss the selection.

```js
action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
  result => {
    console.log(result);
  }
);
```

<DocExampleBox codeBox="https://codesandbox.io/s/24oz9vqnlp?module=%2Fsrc%2FApp.vue">

```html
  <Button text="Show Action Dialog" width="200" @tap="showActionDialog" />
```

```js
  showActionDialog: function() {
      action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
        result => {
          console.log(result);
        }
      );
    }
```

<ActionDialogDoc />
</DocExampleBox>

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/dialogs/action/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action)
