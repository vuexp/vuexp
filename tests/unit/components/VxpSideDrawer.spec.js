import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpSideDrawer from '../../../src/components/VxpSideDrawer/VxpSideDrawer';
import StackLayout from '../../../src/layouts/StackLayout';
import Label from '../../../src/core/components/Label/Label';
import localVue from '../local-vue';

describe('VxpSideDrawer Component Tests', () => {
  const Wrapper = {
    name: 'Wrapper',
    template:
      '<VxpSideDrawer ref="drawer">\n' +
      '    <StackLayout slot="drawerContent">\n' +
      '        <Label text="Drawer Content" />\n' +
      '    </StackLayout>\n' +
      '    <StackLayout slot="mainContent">\n' +
      '        <Label text="Main Content" />\n' +
      '    </StackLayout>\n' +
      '</VxpSideDrawer>',
    components: {
      VxpSideDrawer,
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

  it('VxpSideDrawer Open and Close function test', () => {
    const drawerVM = mountedWrapper.find(VxpSideDrawer).vm;
    drawerVM.showDrawer();
    expect(drawerVM.$refs.drawer.opened).to.equal(true);

    drawerVM.closeDrawer();
    expect(drawerVM.$refs.drawer.opened).to.equal(false);

    drawerVM.showDrawer();
    expect(drawerVM.$refs.drawer.opened).to.equal(true);

    drawerVM.closeDrawer();
    expect(drawerVM.$refs.drawer.opened).to.equal(false);
  });
});
