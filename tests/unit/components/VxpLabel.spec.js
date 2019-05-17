import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VxpLabel from '../../../src/components/VxpLabel.vue';
import Label from '../../../src/components/Label.vue';

describe('VxpLabel.vue', () => {
  const visibleVxpLabel = mount(VxpLabel);
  const inVisibleVxpLabel = mount(VxpLabel, {
    props: {
      visibility: Boolean,
    },
    propsData: {
      visibility: false,
    },
  });
  it('display:none css rule is NOT applied when visible prop is not provided', () => {
    const hasInvisibleClass = visibleVxpLabel.find(Label).element.className.indexOf('vpx-label-invisible') != -1;
    expect(hasInvisibleClass).to.equal(false);
  });
  it('display:none css rule is applied when visible prop is not provided', () => {
    const hasInvisibleClass = inVisibleVxpLabel.find(Label).element.className.indexOf('vpx-label-invisible') != -1;
    expect(hasInvisibleClass).to.equal(true);
  });
});
