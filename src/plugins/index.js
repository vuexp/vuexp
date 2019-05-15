import ConfirmDialog from '../components/dialogs/ConfirmDialog';
import AlertDialog from '../components/dialogs/AlertDialog';

const VxpPlugin = {
  install: Vue => {
    if (typeof window !== 'undefined') {
      // Alert Dialog
      const AlertDialogComponent = Vue.extend(AlertDialog);
      // Register alert dialog to the window.
      window.alert = function(messageText) {
        const alertDialog = new AlertDialogComponent();
        const alertDialogDom = alertDialog.$mount().$el;
        document.body.appendChild(alertDialogDom);

        return alertWrapper(messageText, alertDialog);
      };

      // Confirm Dialog
      const ConfirmDialogComponent = Vue.extend(ConfirmDialog);
      // Register confirm dialog to the window.
      window.confirm = async function(messageText) {
        const confirmDialog = new ConfirmDialogComponent();
        const confirmDialogDom = confirmDialog.$mount().$el;
        document.body.appendChild(confirmDialogDom);

        return confirmWrapper(messageText, confirmDialog);
      };
    }
  },
};

export default VxpPlugin;
function confirmWrapper(messageText, confirmDialog) {
  return new Promise(resolve => {
    if (typeof messageText === 'string') {
      confirmDialog.message = messageText;
    } else {
      const { title, message, okButtonText, cancelButtonText } = messageText;
      confirmDialog.title = title;
      confirmDialog.message = message;
      confirmDialog.okButtonText = okButtonText;
      confirmDialog.cancelButtonText = cancelButtonText;
    }
    confirmDialog.isModalVisible = true;
    confirmDialog.$once('submit', val => {
      confirmDialog.isModalVisible = false;
      resolve(val);
    });
  });
}

function alertWrapper(messageText, alertDialog) {
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
}
