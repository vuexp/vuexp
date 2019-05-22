---
sidebarDepth: 0
---

# ModalBase

This is an overview of the most common usage of ModalBase.

The `alert()` method shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

## Live Demo
<DocExampleBox :liveDemoMode="true">

```html
  <Button text="Show Modal Base" width="200" @tap="showModalBase" />
```

```js
   showAlertBase: function() {
      alert({title: "Your title", message: "Your message", okButtonText: "Your OK button text"}).then(() => {
        console.log("Modal Base closed.");
      });
    }
```

<ModalBaseDoc />
</DocExampleBox>

```js
alert("Your message").then(() => {
  console.log("Modal Base closed.");
});
```

