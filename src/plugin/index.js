import AlertDialog from '../components/dialogs/AlertDialog';

const NvwPlugin = {
  install: Vue => {
    if (typeof window !== 'undefined') {
      // Alert Dialog
      const AlertDialogComponent = Vue.extend(AlertDialog);
      // Register alert dialog to the window.
      window.alert = function(messageText) {
        const alertDialog = new AlertDialogComponent();
        const alertDialogDom = alertDialog.$mount().$el;
        document.body.appendChild(alertDialogDom);

        return new Promise(resolve => {
          if (typeof messageText === 'string') {
            alertDialog.message = messageText;
          } else {
            const { title, message, okButtonText } = messageText;
            alertDialog.title = title;
            alertDialog.message = message;
            alertDialog.okButtonText = okButtonText;
          }
          alertDialog.isModalVisible = true;
          alertDialog.$once('submit', $event => {
            alertDialog.isModalVisible = false;
            resolve($event);
          });
        });
      };
    }
  },
};
export default NvwPlugin;
