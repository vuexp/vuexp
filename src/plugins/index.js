import ConfirmDialog from '../components/dialogs/ConfirmDialog';
import AlertDialog from '../components/dialogs/AlertDialog';
import ActionDialog from '../components/dialogs/ActionDialog';

const VxpPlugin = {
  install: Vue => {
    if (typeof window !== 'undefined') {
      // Action Dialog
      const ActionDialogComponent = Vue.extend(ActionDialog);
      // Register action dialog to the window.
      window.action = async function(title, cancelButtonText, options) {
        const actionDialog = new ActionDialogComponent();
        const actionDialogDom = actionDialog.$mount().$el;
        document.body.appendChild(actionDialogDom);

        return new Promise(resolve => {
          actionDialog.title = title;
          actionDialog.cancelButtonText = cancelButtonText;
          actionDialog.options = options;
          actionDialog.isModalVisible = true;
          actionDialog.$once('submit', value => {
            actionDialog.isModalVisible = false;
            resolve(value);
          });
        });
      };

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

    Vue.filter('fonticon', function(value) {
      return value + ' | fonticon';
    });
  },
};

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

export default VxpPlugin;
