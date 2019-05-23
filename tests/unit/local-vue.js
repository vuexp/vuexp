import { createLocalVue } from '@vue/test-utils';
import Button from '../../src/core/components/Button/Button';
import Img from '../../src/core/components/Img/Img';
import Label from '../../src/core/components/Label/Label';
import Page from '../../src/core/components/Page/Page';
import Progress from '../../src/core/components/Progress/Progress';
import ScrollView from '../../src/core/components/ScrollView/ScrollView';
import Frame from '../../src/core/components/Frame/Frame';
import SearchBar from '../../src/core/components/SearchBar/SearchBar';
import SegmentedBar from '../../src/core/components/SegmentedBar/SegmentedBar';
import SegmentedBarItem from '../../src/core/components/SegmentedBarItem/SegmentedBarItem';
import Slider from '../../src/core/components/Slider/Slider';
import Switcher from '../../src/core/components/Switcher/Switcher';
import TextField from '../../src/core/components/TextField/TextField';
import TextView from '../../src/core/components/TextView/TextView';
import ActionItem from '../../src/core/components/ActionItem/ActionItem';
import NavigationButton from '../../src/core/components/NavigationButton/NavigationButton';
import ActionBar from '../../src/core/components/ActionBar/ActionBar';
import TabView from '../../src/core/components/TabView/TabView';
import TabViewItem from '../../src/core/components/TabViewItem/TabViewItem';
import AlertDialog from '../../src/core/dialogs/AlertDialog';
import ConfirmDialog from '../../src/core/dialogs/ConfirmDialog';
import AbsoluteLayout from '../../src/layouts/AbsoluteLayout';
import StackLayout from '../../src/layouts/StackLayout';
import DockLayout from '../../src/layouts/DockLayout';
import FlexboxLayout from '../../src/layouts/FlexboxLayout';
import GridLayout from '../../src/layouts/GridLayout';
import WrapLayout from '../../src/layouts/WrapLayout';
import VxpLink from '../../src/components/VxpLink';

const localVue = createLocalVue();
localVue.component('Button', Button);

localVue.component('Img', Img);
localVue.component('Label', Label);
localVue.component('Page', Page);
localVue.component('Progress', Progress);
localVue.component('ScrollView', ScrollView);
localVue.component('Frame', Frame);
localVue.component('SearchBar', SearchBar);
localVue.component('SegmentedBar', SegmentedBar);
localVue.component('SegmentedBarItem', SegmentedBarItem);
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
localVue.component('AlertDialog', AlertDialog);
localVue.component('ConfirmDialog', ConfirmDialog);
localVue.component('AbsoluteLayout', AbsoluteLayout);
localVue.component('StackLayout', StackLayout);
localVue.component('DockLayout', DockLayout);
localVue.component('FlexboxLayout', FlexboxLayout);
localVue.component('GridLayout', GridLayout);
localVue.component('WrapLayout', WrapLayout);

export default localVue;
