<template>
  <StackLayout orientation="horizontal" class="pagination-container">
    <VxpLink v-if="moveFirstPage" :disabled="isActionDisabled('firstPage')" text="<<" @tap="changePage(1)" class="pagination-button pagination-first-page" />
    <VxpLink
      v-if="movePreviousPage"
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
      v-if="moveNextPage"
      text=">"
      :disabled="isActionDisabled('nextPage')"
      @tap="changePage(currPage + 1)"
      class="pagination-button pagination-next-page"
    />
    <VxpLink
      v-if="moveLastPage"
      text=">>"
      :disabled="isActionDisabled('lastPage')"
      @tap="changePage(lastPage)"
      class="pagination-button pagination-last-page"
    />
  </StackLayout>
</template>
<script>
import StackLayout from '../../../layouts/StackLayout';
import VxpLink from '../../../components/VxpLink';

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
    moveLastPage: {
      type: Boolean,
      default: true,
    },
    moveFirstPage: {
      type: Boolean,
      default: true,
    },
    moveNextPage: {
      type: Boolean,
      default: true,
    },
    movePreviousPage: {
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
      if (nrPages > 3) {
        if (this.currPage === 1 || this.currPage < 1) {
          pages = [1, 2, 3, '...'];
        } else if (this.currPage > nrPages || this.currPage === nrPages) {
          pages = ['...'];
          pages.push(nrPages - 2);
          pages.push(nrPages - 1);
          pages.push(nrPages);
        } else {
          pages.push('...');
          pages.push(this.currPage); // TODO check if exceeds to nrPages
          if (this.currPage + 1 < nrPages) {
            pages.push(this.currPage + 1);
          }
          if (this.currPage + 2 < nrPages) {
            pages.push(this.currPage + 2);
            pages.push('...');
          } else {
            pages.push(nrPages);
          }
        }
        return pages;
      } else {
        return Array.apply(null, { length: nrPages }).map((_, index) => index + 1);
      }
    },
  },
  methods: {
    pageClass(currentPage) {
      return this.currPage === currentPage ? `${this.css.paginationItem} selected` : this.css.paginationItem;
    },
    changePage(pageToMove) {
      if (pageToMove <= this.lastPage && pageToMove >= 1 && pageToMove !== this.currPage) {
        this.$emit('onPaginationUpdate', pageToMove);
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
      if (this.qntPages.indexOf(this.currPage) === -1) {
        const nextPage = this.qntPages.length ? this.qntPages.length : 0;
        this.$emit('updateCurrentPage', nextPage);
      }
    },
  },
  watch: {
    page(newPage) {
      this.currPage = newPage;
    },
    itemsPerPage(newItemsPerPage) {
      this.perPage = newItemsPerPage;
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
@import '../../../assets/styles/helpers.scss';
.pagination-container {
  margin: unit(10);
}
.pagination-button {
  padding: 0 unit(10);
}
</style>
