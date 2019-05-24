<template>
  <Frame>
    <Page>
      <ActionBar :title="''">
        <ActionItem @tap="$modal.close" android.systemIcon="ic_menu_save" ios.systemIcon="15" ios.position="right" />
      </ActionBar>
      <StackLayout class="vxp-multiselectdropdown-native-modal">
        <WrapLayout>
          <WrapLayout orientation="horizontal">
            <StackLayout
              class="vxp-multiselectdropdown-native-modal__selected-items"
              orientation="horizontal"
              v-for="(selectedItemIndex, index) in selected"
              @tap="removeSelection(items[selectedItemIndex])"
              :key="index"
            >
              <Label class="vxp-multiselectdropdown-native-modal__selected-item" :text="items[selectedItemIndex][labelProp] + '  ×'"></Label>
            </StackLayout>
          </WrapLayout>
          <SearchBar
            class="vxp-multiselectdropdown-native-modal__search-input"
            width="100%"
            :hint="hint"
            v-model="searchText"
            @textChange="searchTextChanged(searchText)"
            ref="searchInput"
          ></SearchBar>
        </WrapLayout>
        <StackLayout>
          <StackLayout v-if="displayItems.length">
            <ListView for="item in displayItems" height="100%">
              <v-template>
                <Label class="vxp-multiselectdropdown-native-modal__selectable-item" @tap="selectItem(item)" :text="item[labelProp]"></Label>
              </v-template>
            </ListView>
          </StackLayout>
          <StackLayout v-else-if="emptySuggestionsLabel">
            <Label :text="emptySuggestionsLabel"></Label>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </Page>
  </Frame>
</template>

<script>
import VxpMultiSelectDropdownMixins from './vxpMultiSelectDropdownMixins';

export default {
  mixins: [VxpMultiSelectDropdownMixins],
};
</script>

<style lang="scss">
@import '../../../assets/styles/helpers.scss';

.vxp-multiselectdropdown-native-modal {
  padding: unit(2);
  &__selected-items {
    padding: unit(3);
  }

  &__selected-item {
    padding: unit(10);
    border-style: solid;
    border-color: #666666;
    border-width: unit(1);
    border-radius: 50%;
    background: #2e1efe;
    color: #ffffff;
    margin-left: unit(3);
    ::after {
      content: '&times;';
    }
  }

  &__selectable-item {
    padding: unit(10);
  }

  &__pill {
    &-remove-search {
      right: unit(30);
      top: unit(15);
      font-size: unit(16);
      font-weight: 800;
    }
  }
}
</style>
