
import FlexboxLayout from '../../src/layouts/FlexboxLayout'
import StackLayout from '../../src/layouts/StackLayout'
import ScrollView from '../../src/core/components/ScrollView/ScrollView'
import VTemplate from '../../src/components/VTemplate'

import * as Plugins from '../../src/core/plugins'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    addVxpPlugins(Vue);
  }

  Vue.component('FlexboxLayout', FlexboxLayout);
  Vue.component('StackLayout', StackLayout);
  Vue.component('ScrollView', ScrollView);
  Vue.component('v-template', VTemplate);

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
