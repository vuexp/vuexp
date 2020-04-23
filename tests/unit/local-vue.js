import { createLocalVue } from '@vue/test-utils';
import Button from '../../src/core/components/Button/Button';
import Img from '../../src/core/components/Img/Img';
import Label from '../../src/core/components/Label/Label';
import Page from '../../src/core/components/Page/Page';
import SideDrawer from '../../src/core/components/SideDrawer/SideDrawer';
import Progress from '../../src/core/components/Progress/Progress';
import ScrollView from '../../src/core/components/ScrollView/ScrollView';
import Frame from '../../src/core/components/Frame/Frame';
import SearchBar from '../../src/core/components/SearchBar/SearchBar';
import SegmentedBar from '../../src/core/components/SegmentedBar/SegmentedBar';
import SegmentedBarItem from '../../src/core/components/SegmentedBarItem/SegmentedBarItem';
import Slider from '../../src/core/components/Slider/Slider';
import Switcher from '../../src/core/components/Switcher/Switcher';
import TextField from '../../src/core/components/TextField/TextField';
import ActionItem from '../../src/core/components/ActionItem/ActionItem';
import NavigationButton from '../../src/core/components/NavigationButton/NavigationButton';
import ActionBar from '../../src/core/components/ActionBar/ActionBar';
import TabView from '../../src/core/components/TabView/TabView';
import TabViewItem from '../../src/core/components/TabViewItem/TabViewItem';
import AlertDialog from '../../src/core/dialogs/AlertDialog';
import ConfirmDialog from '../../src/core/dialogs/ConfirmDialog';
import AbsoluteLayout from '../../src/layouts/AbsoluteLayout';
import DockLayout from '../../src/layouts/DockLayout';
import FlexboxLayout from '../../src/layouts/FlexboxLayout';
import GridLayout from '../../src/layouts/GridLayout';
import StackLayout from '../../src/layouts/StackLayout';
import WrapLayout from '../../src/layouts/WrapLayout';
import ViewDirective from '../../src/core/directives/ViewDirective';
import ModalDialog from '../../src/core/components/BaseModal/ModalBase';
import VxpWebView from '../../src/components/VxpWebView';
import VxpLink from '../../src/components/VxpLink';
import VxpDropdownMenu from '../../src/components/menus/VxpDropdownMenu';
import VxpDropdownItem from '../../src/components/menus/VxpDropdownItem';
import VxpImage from '../../src/components/VxpImage';
import ActionDialog from '../../src/core/dialogs/ActionDialog';
import TextView from '../../src/core/components/TextView/TextView';
import VxpPlugin from '../../src/core/plugins/index';

const localVue = createLocalVue();
// Register Filters
localVue.filter('fonticon', function(value) {
  return value + ' | fonticon';
});

// Register Components
localVue.component('Button', Button);
localVue.component('VxpImage', VxpImage);
localVue.component('VxpDropdownMenu', VxpDropdownMenu);
localVue.component('VxpDropdownItem', VxpDropdownItem);
localVue.component('Img', Img);
localVue.component('Label', Label);
localVue.component('ModalDialog', ModalDialog);
localVue.component('NavigationButton', NavigationButton);
localVue.component('Page', Page);
localVue.component('Progress', Progress);
localVue.component('ScrollView', ScrollView);
localVue.component('Frame', Frame);
localVue.component('SearchBar', SearchBar);
localVue.component('SegmentedBar', SegmentedBar);
localVue.component('SegmentedBarItem', SegmentedBarItem);
localVue.component('SideDrawer', SideDrawer);
localVue.component('Slider', Slider);
localVue.component('Switcher', Switcher);
localVue.component('TextField', TextField);
localVue.component('TextView', TextView);
localVue.component('ActionItem', ActionItem);
localVue.component('NavigationButton', NavigationButton);
localVue.component('ActionBar', ActionBar);
localVue.component('VxpLink', VxpLink);
localVue.component('TabView', TabView);
localVue.component('TabViewItem', TabViewItem);
localVue.component('VxpWebView', VxpWebView);
localVue.component('AlertDialog', AlertDialog);
localVue.component('ConfirmDialog', ConfirmDialog);
localVue.component('ActionDialog', ActionDialog);
localVue.component('AbsoluteLayout', AbsoluteLayout);
localVue.component('DockLayout', DockLayout);
localVue.component('FlexboxLayout', FlexboxLayout);
localVue.component('GridLayout', GridLayout);
localVue.component('StackLayout', StackLayout);
localVue.component('WrapLayout', WrapLayout);

// Register Directives
localVue.directive('view', ViewDirective);

// Register Plugins
localVue.use(VxpPlugin, { context: {} });

export default localVue;
