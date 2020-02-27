import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import localVue from '../../local-vue';
import Label from '../../../../src/core/components/Label/Label';

describe('Fonticon Filter Testing', () => {
  const component = {
    template: `<Label :text="'fa-search' | fonticon" />`,
    components: { Label },
  };

  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
  });

  it('should have fa-search in css classes', () => {
    expect(wrapper.find('span').classes()).to.includes('fa-search');
  });
});

describe('$showModal testing', () => {
  const component = {
    template: `
          <div>
            <button class="first_button">
              Click to show AlertDialog
            </button>
            <button class="second_button">
              Click to show AlertDialog
            </button>
          </div>
        `,
  };

  mount(component, {
    localVue,
    attachToDocument: true,
  });

  it('should have $showModal as function', () => {
    localVue.prototype.$showModal(component, { fullscreen: true });

    expect(typeof localVue.prototype.$showModal).to.equal('function');
  });

  it('should have $showModal as function and uses our context', () => {
    localVue.prototype.$showModal(component, { context: {}, fullscreen: true });
    expect(typeof localVue.prototype.$showModal).to.equal('function');
  });
});
