import * as Plugins from '../../src/plugins'
import StackLayout from '../../src/layouts/StackLayout';
import WrapLayout from '../../src/layouts/WrapLayout';
import DockLayout from '../../src/layouts/DockLayout';
import TextField from '../../src/components/TextField';
import ModalDialog from '../../src/components/ModalDialog';
import Label from '../../src/components/Label';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    addVxpPlugins(Vue);
    Vue.component('StackLayout',StackLayout);
    Vue.component('WrapLayout',WrapLayout);
    Vue.component('DockLayout',DockLayout);
    Vue.component('TextField',TextField);
    Vue.component('ModalDialog',ModalDialog);
    Vue.component('Label',Label);
  }
};
function addVxpPlugins(Vue) {
  Object.keys(Plugins).forEach(addPlugin(Vue));
}

function addPlugin(Vue) {
  return function (key) {
    if (Plugins[key].name) {
      // Component registration
      Vue.component(key, Plugins[key]);
    }
    else if (Plugins[key].install) {
      // Plugin registration
      Vue.use(Plugins[key]);
    }
  };
}
