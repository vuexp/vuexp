---
sidebarDepth: 0
---

# ModalDialog

This is an overview of the most common usage of ModalDialog.

The `alert()` method shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

## Live Demo
<DocExampleBox :liveDemoMode="true">

```html
  <Button text="Show Modal Dialog" width="200" @tap="showModalDialog" />
```

```js
   showAlertDialog: function() {
      alert({title: "Your title", message: "Your message", okButtonText: "Your OK button text"}).then(() => {
        console.log("Modal dialog closed.");
      });
    }
```

<ModalDialogDoc />
</DocExampleBox>

```js
alert("Your message").then(() => {
  console.log("Modal dialog closed.");
});
```

