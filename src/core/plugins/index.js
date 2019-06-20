import ActionDialog from '../dialogs/ActionDialog';
import ConfirmDialog from '../dialogs/ConfirmDialog';
import AlertDialog from '../dialogs/AlertDialog';
import ViewDirective from '../directives/ViewDirective';
import Modal from '../components/Modal/Modal';

const VxpPlugin = {
  install: (Vue, pluginOptions) => {
    // Show Modal
    Vue.prototype.$showModal = function(component, options = { context: null, fullscreen: false }) {
      return new Promise(resolve => {
        // eslint-disable-line
        const ContentComponent = Vue.extend(component);
        const ModalComponent = Vue.extend(Modal);
        const globalContext = typeof pluginOptions === 'object' && typeof pluginOptions.context === 'object' ? pluginOptions.context : null;
        let localContext;
        if (options && options.context && typeof options.context === 'object') {
          localContext = options.context;
        } else {
          localContext = globalContext;
        }
        const ModalInstance = new ModalComponent(localContext);
        ContentComponent.prototype.$modal = {
          close(data) {
            ModalInstance.closeModal();
            resolve(data);
          },
        };
        const modalDom = ModalInstance.$mount();
        document.body.appendChild(modalDom.$el);
        ModalInstance.isModalVisible = true;
        ModalInstance.contentComponent = ContentComponent;
        if (options && options.fullscreen) {
          ModalInstance.fullscreen = options.fullscreen;
        }
      });
    };
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

    Vue.directive('view', ViewDirective);
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
