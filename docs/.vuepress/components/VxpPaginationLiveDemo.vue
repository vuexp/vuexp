<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <VxpLabel text="Properties" class="demo-panel__title"/>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Total Items" class="option-label"/>
        <VxpTextField id="vxppagination_totalitems_input" v-model="totalItems" class="option-input"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Items Per Page" class="option-label"/>
        <VxpTextField id="vxppagination_itemsperpage_input" v-model="itemsPerPage" class="option-input"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Current Page" class="option-label"/>
        <VxpTextField id="vxppagination_currentpage_input" v-model="currentPage" class="option-input"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Show First Page" class="option-label"/>
        <VxpCheckbox id="vxppagination_showfirstpage_cb" v-model="showFirstPage"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Show Last Page" class="option-label"/>
        <VxpCheckbox id="vxppagination_showlastpage_cb" v-model="showLastPage"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Show Next Page" class="option-label"/>
        <VxpCheckbox id="vxppagination_shownextpage_cb" v-model="showNextPage"/>
      </FlexboxLayout>
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Show Previous Page" class="option-label"/>
        <VxpCheckbox id="vxppagination_showpreviouspage_cb" v-model="showPreviousPage"/>
      </FlexboxLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Pagination Component" class="demo-panel__title"/>
      <VxpPagination
        id="vxppagination_component"
        :totalItems="parseInt(totalItems)"
        :itemsPerPage="parseInt(itemsPerPage)"
        :page="parseInt(currentPage)"
        :showLastPage="showLastPage"
        :showFirstPage="showFirstPage"
        :showNextPage="showNextPage"
        :showPreviousPage="showPreviousPage"
        @onPaginationUpdate="onPaginationUpdate"
        @onUpdateCurrentPage="onUpdateCurrentPage"
      />
    </StackLayout>

    <StackLayout class="demo-panel">
      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Component Events" class="demo-panel__title"/>
        <VxpButton
          id="vxppagination_clearevents_button"
          text="Clear"
          @tap="paginationEvents = []"
        />
      </FlexboxLayout>
      <VxpLabel :id="'vxppagination_event'+index+'_label'" v-for="(item, index) in paginationEvents" v-bind:key="index" :text="item" :textWrap="true"/>
    </StackLayout>

  </StackLayout>
</template>

<script>
import VxpPagination from '../../../src/components/VxpPagination';
import StackLayout from '../../../src/layouts/StackLayout';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import VxpLabel from '../../../src/components/VxpLabel';
import VxpButton from '../../../src/components/VxpButton';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpTextField from '../../../src/components/VxpTextField';

export default {
  name: 'VxpPaginationLiveDemo',
  data() {
    return {
      totalItems: '100',
      itemsPerPage: '10',
      currentPage: '3',
      showLastPage: true,
      showFirstPage: true,
      showNextPage: true,
      showPreviousPage: true,
      paginationEvents: [],
    };
  },
  components: {
    VxpPagination,
    StackLayout,
    FlexboxLayout,
    VxpLabel,
    VxpButton,
    VxpCheckbox,
    VxpTextField,
  },
  methods: {
    onPaginationUpdate(currentPage, targetPage) {
      this.paginationEvents.push('onPaginationUpdate currentPage:' + currentPage + ", targetPage: " + targetPage);
    },
    onUpdateCurrentPage(currentPage) {
      this.paginationEvents.push('onUpdateCurrentPage currentPage:' + currentPage);
    }
  },
};
</script>

<style lang="scss" scoped>
.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.editor-param-input {
  width: 50px;
}

.option-label {
  margin-right: 10px;
  margin-bottom: 5px;
  width: 130px;
}

.option-input {
  width: 130px;
}

.option-row {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 100%;
}

.editor-param-title {
  margin: 0 5px 0 5px;
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}
</style>