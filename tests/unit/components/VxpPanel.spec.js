/* eslint-disable no-console */
import { expect } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import VxpPanel from '../../../src/components/VxpPanel';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpIconButton from '../../../src/components/VxpIconButton';
// import StackLayout from '../../../../src/layouts/StackLayout.vue';

describe('ActionItem', () => {
  const title = 'Panel title';
  const newTitle = 'New Panel Title';
  //   const iconBtnClass = '';

  const VxpIconButtonWrapper = {
    render(h) {
      return h(VxpIconButton, {
        props: {
          iconName: 'fa',
          icon: 'fa-share',
        },
      });
    },
  };

  const VxpLabelWrapper = {
    render(h) {
      return h(VxpLabel, {
        props: {
          text: String,
          textWrap: String,
        },
        propsData: {
          text: 'Label',
        },
      });
    },
  };

  const VxpPanelWrapper = shallowMount(VxpPanel, {
    name: 'VxpPanel',
    props: {
      title: String,
    },
    propsData: {
      title,
    },
    slots: {
      default: [VxpIconButtonWrapper, VxpLabelWrapper],
      topbar: VxpIconButtonWrapper,
      content: VxpLabelWrapper,
    },
    components: {
      VxpLabelWrapper,
      VxpIconButtonWrapper,
    },
  });

  it(`should has text prop equal to: ${title}.`, () => {
    expect(VxpPanelWrapper.props().title).to.equal(title);
  });

  it(`should change title prop to new text: ${newTitle}.`, () => {
    VxpPanelWrapper.setProps({ title: newTitle });
    expect(VxpPanelWrapper.props().title).to.equal(newTitle);
  });

  it(`should child component length of topbar equal to 1.`, () => {
    expect(VxpPanelWrapper.vm.$slots.topbar.length).to.equal(1);
  });

  it(`should show only title, if it has not child component, `, () => {
    const VxpPanelWrapper2 = mount(VxpPanel, {
      name: 'ActionBar',
      props: {
        title: String,
      },
      propsData: {
        title,
      },
    });
    expect(Object.keys(VxpPanelWrapper2.vm.$slots).length).to.equal(0);
  });
});
