<template>
  <StackLayout>
    <SearchBar 
      :text="searchPhrase" 
      :hint="hint" 
      :textFieldBackgroundColor="background"
      :textFieldHintColor="hintColor"
      @submit="onSubmit" 
      @textChange="onTextChange($event)"
      @clear="onClear"
      @input="searchPhrase = $event"
      id="searchbar__docs"
      />
    <div class="flex m-t-10">
      <Label text="Hint:" class="label"></Label>
      <input v-model="hint" class="form-input" id="searchbar__hint__input">
    </div>
    <div class="flex m-t-10">
      <Label text="Text:" class="label"></Label>
      <input v-model="searchPhrase" class="form-input" id="searchbar__text__input">
    </div>
        <div class="flex m-t-10">
      <Label text="Hint Color:" class="label"></Label>
      <input v-model="hintColor" class="form-input" type="color" id="searchbar__textFieldHintColor__input">
    </div>
    <div class="flex m-t-10">
      <Label text="Background:" class="label"></Label>
      <input v-model="background" class="form-input" type="color" id="searchbar__textFieldBackgroundColor__input">
    </div>
    <div class="flex m-t-10">
      <Label text="Last Event:" class="label"></Label> 
      <Label :text="eventLabelText" class="form-input"></Label>
    </div>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import SearchBar from '../../../src/components/SearchBar';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SearchBarDoc',
  data() {
    return {
      searchPhrase: '',
      hint: 'Search hint',
      hintColor: '',
      background: '',
      eventLabelText: '-'
    };
  },
  methods: {
    onSubmit() {
      this.eventLabelText = 'submit';
    },
    onTextChange(text) {
      this.eventLabelText = 'textChangeEvent: ' + text; 
    },
    onClear() {
      this.eventLabelText = 'clear';
    }
  },
  components: {
    StackLayout,
    Label,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.m-t-10 {
  margin-top: 10px;
}

.flex {
  display: flex;

  .label {
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
  }

  .form-input {
    border-radius: 5px;
    flex: 1;
    margin-left: 5px;
    border: 2px solid #ccc;
  }
}
</style>
