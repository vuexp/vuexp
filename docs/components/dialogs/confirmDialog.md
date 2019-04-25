---
sidebarDepth: 0
---

# ConfirmDialog

This is an overview of the most common usage of ConfirmDialog.

The `confirm()` method shows a confirmation message and Cancel and OK buttons.

```js
confirm("Your message").then(result => {
  console.log(result);
});
```

<DocExampleBox codeBox="https://codesandbox.io/s/m7xmj8xnxj?module=%2Fsrc%2FApp.vue">

```html
<Button text="Show Confirm Dialog" width="200" @tap="showConfirmDialog" />
```

```js
showConfirmDialog: function() {
     confirm({ title: 'Your title',message: 'Your message',okButtonText: 'OK',cancelButtonText: 'Cancel'})
       .then((
         result
       ) => {
        this.result= result ? 'ok' : 'cancel';
       })
    }
```

<ConfirmDialogDoc />
</DocExampleBox>

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/dialogs/confirm/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm)