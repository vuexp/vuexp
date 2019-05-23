import * as Plugins from '../../src/core/plugins'
import StackLayout from '../../src/layouts/StackLayout';
import WrapLayout from '../../src/layouts/WrapLayout';
import DockLayout from '../../src/layouts/DockLayout';
import GridLayout from '../../src/layouts/GridLayout';
import TextField from '../../src/core/components/TextField/TextField';
import ModalDialog from '../../src/core/components/ModalDialog/ModalDialog';
import Label from '../../src/core/components/Label/Label';
import Button from '../../src/core/components/Button/Button';
import SearchBar from '../../src/core/components/SearchBar/SearchBar';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    addVxpPlugins(Vue);
    Vue.component('StackLayout',StackLayout);
    Vue.component('WrapLayout',WrapLayout);
    Vue.component('GridLayout',GridLayout);
    Vue.component('DockLayout',DockLayout);
    Vue.component('TextField',TextField);
    Vue.component('ModalDialog',ModalDialog);
    Vue.component('Label',Label);
    Vue.component('Button',Button);
    Vue.component('SearchBar',SearchBar);
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
