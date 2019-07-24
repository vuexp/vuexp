import Vue from 'nativescript-vue';

Vue.registerElement('Switcher', function() {
  return require('tns-core-modules/ui/switch').Switch; //eslint-disable-line
});

export default null;
