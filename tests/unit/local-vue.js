import { createLocalVue } from '@vue/test-utils';

// Components
import ActionBar from '../../src/components/ActionBar';
import ActionItem from '../../src/components/ActionItem';
import Button from '../../src/components/Button';
import Frame from '../../src/components/Frame';
import Img from '../../src/components/Img';
import Label from '../../src/components/Label';
import ModalDialog from '../../src/components/ModalDialog';
import NavigationButton from '../../src/components/NavigationButton';
import Page from '../../src/components/Page';
import Progress from '../../src/components/Progress';
import ScrollView from '../../src/components/ScrollView';
import SearchBar from '../../src/components/SearchBar';
import SegmentedBar from '../../src/components/SegmentedBar';
import SegmentedBarItem from '../../src/components/SegmentedBarItem';
import SideDrawer from '../../src/components/SideDrawer';
import Slider from '../../src/components/Slider';
import Switcher from '../../src/components/Switcher';
import TabView from '../../src/components/TabView';
import TabViewItem from '../../src/components/TabViewItem';
import TextField from '../../src/components/TextField';
import TextView from '../../src/components/TextView';
import WebView from '../../src/components/WebView';

// Dialogs
import AlertDialog from '../../src/components/dialogs/AlertDialog';
import ConfirmDialog from '../../src/components/dialogs/ConfirmDialog';

// Layouts
import AbsoluteLayout from '../../src/layouts/AbsoluteLayout';
import DockLayout from '../../src/layouts/DockLayout';
import FlexboxLayout from '../../src/layouts/FlexboxLayout';
import GridLayout from '../../src/layouts/GridLayout';
import StackLayout from '../../src/layouts/StackLayout';
import WrapLayout from '../../src/layouts/WrapLayout';

// Directives
import ViewDirective from '../../src/directives/ViewDirective';

const localVue = createLocalVue();

// Components
localVue.component('ActionBar', ActionBar);
localVue.component('ActionItem', ActionItem);
localVue.component('Button', Button);
localVue.component('Frame', Frame);
localVue.component('Img', Img);
localVue.component('Label', Label);
localVue.component('ModalDialog', ModalDialog);
localVue.component('NavigationButton', NavigationButton);
localVue.component('Page', Page);
localVue.component('Progress', Progress);
localVue.component('ScrollView', ScrollView);
localVue.component('SearchBar', SearchBar);
localVue.component('SegmentedBar', SegmentedBar);
localVue.component('SegmentedBarItem', SegmentedBarItem);
localVue.component('SideDrawer', SideDrawer);
localVue.component('Slider', Slider);
localVue.component('Switcher', Switcher);
localVue.component('TabView', TabView);
localVue.component('TabViewItem', TabViewItem);
localVue.component('TextField', TextField);
localVue.component('TextView', TextView);
localVue.component('WebView', WebView);

// Dialogs
localVue.component('AlertDialog', AlertDialog);
localVue.component('ConfirmDialog', ConfirmDialog);

// Layouts
localVue.component('AbsoluteLayout', AbsoluteLayout);
localVue.component('DockLayout', DockLayout);
localVue.component('FlexboxLayout', FlexboxLayout);
localVue.component('GridLayout', GridLayout);
localVue.component('StackLayout', StackLayout);
localVue.component('WrapLayout', WrapLayout);

// Directives
localVue.directive('view', ViewDirective);

export default localVue;
