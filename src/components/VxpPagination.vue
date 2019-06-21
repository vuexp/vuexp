<template>
  <StackLayout orientation="horizontal" class="pagination-container">
    <VxpLink v-if="showFirstPage" :disabled="isActionDisabled('firstPage')" text="<<" @tap="changePage(1)" class="pagination-button pagination-first-page" />
    <VxpLink
      v-if="showPreviousPage"
      size="small"
      :disabled="isActionDisabled('previousPage')"
      text="<"
      @tap="changePage(currPage - 1)"
      class="pagination-button pagination-previous-page"
    />
    <VxpLink
      v-for="(pageNr, index) in qntPages"
      :key="index"
      :disabled="isPageDisabled(pageNr)"
      @tap="changePage(pageNr)"
      :text="'' + pageNr"
      class="pagination-button pagination-first-page"
    />
    <VxpLink
      v-if="showNextPage"
      text=">"
      :disabled="isActionDisabled('nextPage')"
      @tap="changePage(currPage + 1)"
      class="pagination-button pagination-next-page"
    />
    <VxpLink
      v-if="showLastPage"
      text=">>"
      :disabled="isActionDisabled('lastPage')"
      @tap="changePage(lastPage)"
      class="pagination-button pagination-last-page"
    />
  </StackLayout>
</template>
<script>
import StackLayout from '../layouts/StackLayout';
import VxpLink from './VxpLink';

export default {
  name: 'Pagination',
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
      default: 1,
    },
    showLastPage: {
      type: Boolean,
      default: true,
    },
    showFirstPage: {
      type: Boolean,
      default: true,
    },
    showNextPage: {
      type: Boolean,
      default: true,
    },
    showPreviousPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      perPage: this.itemsPerPage,
      currPage: this.page < 1 ? 1 : this.page > this.lastPage ? this.lastPage : this.page,
    };
  },
  computed: {
    lastPage() {
      return Math.ceil(this.totalItems / this.perPage);
    },
    qntPages() {
      const nrPages = this.lastPage;
      let pages = [];

      if (nrPages > 1) {
        pages.push(1);

        if (this.currPage > 3) {
          pages.push('...');
        }

        if (this.currPage > 2) {
          pages.push(this.currPage - 1);
        }

        if (this.currPage != 1 && this.currPage != this.lastPage) {
          pages.push(this.currPage);
        }

        if (this.lastPage - this.currPage > 1) {
          pages.push(this.currPage + 1);
        }

        if (this.lastPage - this.currPage > 2) {
          pages.push('...');
        }

        pages.push(this.lastPage);
      } else {
        pages.push(nrPages);
      }

      return pages;
    },
  },
  methods: {
    pageClass(currentPage) {
      return this.currPage === currentPage ? `${this.css.paginationItem} selected` : this.css.paginationItem;
    },
    changePage(pageToMove) {
      if (pageToMove <= this.lastPage && pageToMove >= 1 && pageToMove !== this.currPage) {
        this.$emit('onPaginationUpdate', this.currPage, pageToMove);
      }
    },
    isPageDisabled(pageNr) {
      if (pageNr !== '...') {
        pageNr = parseInt(pageNr);
      }

      if (pageNr === '...' || pageNr === this.currPage || pageNr > this.lastPage) {
        return true;
      }
      return false;
    },
    isActionDisabled(action) {
      switch (action) {
        case 'firstPage':
          return this.currPage === 1;
        case 'previousPage':
          return this.currPage === 1;
        case 'lastPage':
          return this.currPage === this.lastPage || !this.totalItems || this.currPage * this.itemsPerPage >= this.totalItems;
        case 'nextPage':
          return this.currPage === this.lastPage || !this.totalItems || this.currPage * this.itemsPerPage >= this.totalItems;
      }
    },
    checkCurrentPageExist() {
      let nextPage = this.currPage;
      if (this.qntPages.indexOf(this.currPage) === -1) {
        nextPage = this.qntPages.length ? this.qntPages.length : 0;
      }

      this.currPage = nextPage < 1 ? 1 : nextPage > this.lastPage ? this.lastPage : nextPage;
      this.$emit('onUpdateCurrentPage', this.currPage);
    },
  },
  watch: {
    page(newPage) {
      this.currPage = newPage < 1 ? 1 : newPage > this.lastPage ? this.lastPage : newPage;
      if (isNaN(this.currPage)) {
        this.currPage = 1;
      }
    },
    itemsPerPage(newItemsPerPage) {
      this.perPage = newItemsPerPage;
      if (isNaN(this.perPage)) {
        this.perPage = 10;
      }
      this.checkCurrentPageExist();
    },
    totalItems() {
      this.checkCurrentPageExist();
    },
  },
  components: {
    StackLayout,
    VxpLink,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/helpers.scss';
.pagination-container {
  margin: unit(10);
}
.pagination-button {
  padding: 0 unit(10);
}
</style>
