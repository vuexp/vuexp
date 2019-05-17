import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import SideDrawer from '../../../src/components/SideDrawer';
import StackLayout from '../../../src/layouts/StackLayout';
import Label from '../../../src/components/Label';
import localVue from '../local-vue';

describe('SideDrawer Component Tests', () => {
  const Wrapper = {
    name: 'Wrapper',
    template:
      '<SideDrawer ref="drawer">\n' +
      '    <StackLayout v-view:drawerContent>\n' +
      '        <Label text="Drawer Content" />\n' +
      '    </StackLayout>\n' +
      '    <StackLayout v-view:mainContent>\n' +
      '        <Label text="Main Content" />\n' +
      '    </StackLayout>\n' +
      '</SideDrawer>',
    components: {
      SideDrawer,
      StackLayout,
      Label,
    },
  };

  const mountedWrapper = mount(Wrapper, {
    localVue,
  });

  it(`The component is shown on the document.`, () => {
    expect(
      mountedWrapper
        .findAll('.nu-sidedrawer__content')
        .at(0)
        .text(),
    ).to.not.equal('');
    expect(
      mountedWrapper
        .findAll('.nu-sidedrawer__drawer')
        .at(0)
        .text(),
    ).to.not.equal('');
  });

  it('SideDrawer Open and Close function test', () => {
    const drawerVM = mountedWrapper.find(SideDrawer).vm;
    drawerVM.showDrawer();
    expect(drawerVM.opened).to.equal(true);

    drawerVM.closeDrawer();
    expect(drawerVM.opened).to.equal(false);

    drawerVM.nativeView.showDrawer();
    expect(drawerVM.opened).to.equal(true);

    drawerVM.nativeView.closeDrawer();
    expect(drawerVM.opened).to.equal(false);
  });
});
