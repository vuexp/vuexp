import ConfirmDialog from '../components/dialogs/ConfirmDialog';

const NvwPlugin = {
  install: Vue => {
    // Confirm Dialog
    const ConfirmDialogComponent = Vue.extend(ConfirmDialog);
    // Register confirm dialog to the window.
    window.confirm = async function(messageText) {
      const confirmDialog = new ConfirmDialogComponent();
      const confirmDialogDom = confirmDialog.$mount().$el;
      document.body.appendChild(confirmDialogDom);

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
    };
  },
};
export default NvwPlugin;
