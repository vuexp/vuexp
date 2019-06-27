import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VxpPagination from '../../../src/components/VxpPagination';
import StackLayout from '../../../src/layouts/StackLayout';

describe('VxpPagination', () => {
  const localVue = createLocalVue();
  localVue.component('StackLayout', StackLayout);

  const propsData = {
    totalItems: 100,
    itemsPerPage: 10,
    page: 1,
    showLastPage: true,
    showFirstPage: true,
    showNextPage: true,
    showPreviousPage: true,
  };

  const wrapper = shallowMount(VxpPagination, {
    propsData,
    localVue,
  });

  describe('Initializing phase', () => {
    it('checks defaults', () => {
      expect(wrapper.vm.lastPage).to.equal(10);
      expect(wrapper.vm.perPage).to.equal(10);
      expect(wrapper.vm.currPage).to.equal(1);
    });

    it('checks pages', () => {
      const pages1 = [1, 2, '...', 10];
      expect(wrapper.vm.qntPages).to.deep.equal(pages1);

      wrapper.setProps({ page: 5 });
      const pages2 = [1, '...', 4, 5, 6, '...', 10];
      expect(wrapper.vm.qntPages).to.deep.equal(pages2);

      wrapper.setProps({ page: 10 });
      const pages3 = [1, '...', 9, 10];
      expect(wrapper.vm.qntPages).to.deep.equal(pages3);
    });
  });

  describe('Component Events', () => {
    it('checks onPaginationUpdate', () => {
      wrapper.vm.changePage(1);
      expect(wrapper.emitted().onPaginationUpdate.length).to.equal(1);
      expect(wrapper.emitted().onPaginationUpdate[0]).to.deep.equal([10, 1]);

      wrapper.vm.changePage(-1);
      expect(wrapper.emitted().onPaginationUpdate.length).to.equal(1);
    });

    it('checks onUpdateCurrentPage', () => {
      wrapper.setProps({ itemsPerPage: 20 });
      expect(wrapper.emitted().onUpdateCurrentPage[0]).to.deep.equal([5]);
    });
  });

  describe('Functionality', () => {
    it('checks css classes', () => {
      wrapper.vm.css = { paginationItem: 'pgItem' };
      expect(wrapper.vm.pageClass(1)).to.equal('pgItem');
      expect(wrapper.vm.pageClass(5)).to.equal('pgItem selected');
    });

    it('checks methods', () => {
      expect(wrapper.vm.isPageDisabled(1)).to.equal(false);
      expect(wrapper.vm.isPageDisabled(5)).to.equal(true);
      expect(wrapper.vm.isPageDisabled('...')).to.equal(true);

      expect(wrapper.vm.isActionDisabled('firstPage')).to.equal(false);
      expect(wrapper.vm.isActionDisabled('previousPage')).to.equal(false);
      expect(wrapper.vm.isActionDisabled('lastPage')).to.equal(true);
      expect(wrapper.vm.isActionDisabled('nextPage')).to.equal(true);

      expect(wrapper.vm.boundaryCheckPage(-1)).to.equal(1);
      expect(wrapper.vm.boundaryCheckPage(2)).to.equal(2);
      expect(wrapper.vm.boundaryCheckPage(100)).to.equal(5);
    });

    it('checks boundary values', () => {
      wrapper.setProps({ totalItems: 200 });
      expect(wrapper.emitted().onUpdateCurrentPage[0][0]).to.deep.equal(5);

      wrapper.setProps({ itemsPerPage: 'asd' });
      expect(wrapper.vm.perPage).to.equal(10);

      wrapper.setProps({ totalItems: 0 });
      expect(wrapper.vm.qntPages).to.deep.equal([0]);
      wrapper.setProps({ totalItems: 100 });

      wrapper.setProps({ page: 'asd' });
      expect(wrapper.vm.currPage).to.equal(1);

      wrapper.setProps({ page: -1 });
      expect(wrapper.vm.currPage).to.equal(1);

      wrapper.setProps({ page: 100 });
      expect(wrapper.vm.currPage).to.equal(10);
    });
  });
});
