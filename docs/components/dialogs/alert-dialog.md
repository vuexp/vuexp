---
sidebarDepth: 0
---

# AlertDialog

This is an overview of the most common usage of AlertDialog.

The `alert()` method shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

## Live Demo
<DocExampleBox :liveDemoMode="true">

```html
  <Button text="Show Alert Dialog" width="200" @tap="showAlertDialog" />
```

```js
   showAlertDialog: function() {
      alert("Your title", "Your message", "OK").then(() => {
        console.log("Alert dialog closed.");
      });
    }
```

<AlertDialogDoc />
</DocExampleBox>

```js
alert("Your message").then(() => {
  console.log("Alert dialog closed.");
});
```

