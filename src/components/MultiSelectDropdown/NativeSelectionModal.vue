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
              v-for="selectedItemIndex in selected"
              @tap="removeSelection(items[selectedItemIndex])"
              :key="items[selectedItemIndex][keyProp]"
            >
              <Label class="vxp-multiselectdropdown-native-modal__selected-item" :text="items[selectedItemIndex][labelProp]"></Label>
            </StackLayout>
          </WrapLayout>
          <StackLayout flexGrow="1">
            <TextField class="vxp-multiselectdropdown-native-modal__search-input" ref="searchInput" v-model="searchText" :hint="hint" width="100%"></TextField>
          </StackLayout>
        </WrapLayout>
        <StackLayout>
          <StackLayout v-if="displayItems.length">
            <ListView for="item in displayItems">
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
import MultiSelectDropdownMixins from './multiSelectDropdownMixins';

export default {
  mixins: [MultiSelectDropdownMixins],
};
</script>

<style lang="scss">
@import '../../assets/styles/helpers.scss';

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
}
</style>
