---
sidebarDepth: 0
---

# ConfirmDialog

This is an overview of the most common usage of ConfirmDialog.

## Live Demo

<DocExampleBox>

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

## Example Usages

The `confirm()` method shows a confirmation message and Cancel and OK buttons.

```js
confirm("Your message").then(result => {
  console.log(result);
});
```
