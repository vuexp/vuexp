import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import localVue from '../../../local-vue';

describe('Action Dialog Plugin Testing', () => {
  const title = 'Some title.';
  const cancelButtonText = 'cancel';
  const options = ['First Option', 'Second Option'];
  const { action } = window;
  const tap = () => action(title, cancelButtonText, options);
  const component = {
    methods: {
      tap,
    },
    template: `
          <div>
            <button class="first_button" @click="tap">
              Click to show ActionDialog
            </button>
          </div>
        `,
  };

  describe('ActionDialog is visible in the document.', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(component, {
        localVue,
        attachToDocument: true,
      });
    });

    it(`The ActionDialog is shown on the document.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.vxp-action-dialog')).to.not.be.null;
        document.querySelector('.vxp-modal-dialog').click();
        done();
      }, 500);
    });
    it(`The title inside the header slot of the element equals to ${title}.`, done => {
      wrapper.find('.first_button').trigger('click');
      setTimeout(() => {
        expect(document.querySelector('.vxp-action-dialog__footer__cancel-button').textContent.trim()).to.equal(cancelButtonText);
        expect(document.querySelector('.vxp-action-dialog__header').firstChild.textContent.trim()).to.equal(title);
        document.querySelector('.vxp-modal-dialog').click();
        done();
      }, 500);
    });
  });
});
