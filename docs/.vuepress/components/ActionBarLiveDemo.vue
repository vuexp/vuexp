<template>
  <StackLayout>
    <StackLayout class="result-container">
      <Label text="Result" style="margin-bottom: 20px;"></Label>
      <ActionBar :title="title">
        <ActionItem @tap="onTapShare($event)" :webIcon="'fa ' + selectedShareIcon"/>
        <ActionItem @tap="onTapDelete($event)" :webIcon="'fa ' + selectedDeleteIcon"/>
      </ActionBar>
      <ActionBar style="margin-top:15px">
        <ActionItem
          v-if="child.type === 'ActionItem'"
          v-for="(child, index) in children"
          :key="index"
          @tap="onTapDelete($event)"
          :webIcon="'fa ' + child.icon"
        />
        <NavigationButton
          v-if="child.type === 'NavigationButton'"
          v-for="(child, index) in children"
          :key="index + Math.floor(Math.random() * 100000)"
          @tap="goBack($event)"
          :webIcon="'fa ' + child.icon"
          text="Go back"
        />
      </ActionBar>
    </StackLayout>
    <StackLayout class="prop-container">
      <Label text="Properties"></Label>
      <StackLayout style="margin-top:15px" orientation="horizontal">
        <StackLayout class="form-group">
          <TextField
            id="actionbar__title__input"
            type="text"
            v-model="title"
            placeholder="Enter title..."
          ></TextField>
          <Label class="control-label" text="Change Title"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group p-l-2">
          <select
            style="height: 1.9rem;"
            id="actionbar__shareicon__select"
            v-model="selectedShareIcon"
          >
            <option v-for="icon in shareIcons" v-bind:value="icon">{{ icon }}</option>
          </select>
          <Label class="control-label p-l-2" text="Change Share Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
        <StackLayout class="form-group p-l-2">
          <select
            style="height: 1.9rem;"
            id="actionbar__deleteicon__select"
            v-model="selectedDeleteIcon"
          >
            <option v-for="(icon, index) in deleteIcons" v-bind:value="icon" :key="index">{{ icon }}</option>
          </select>
          <Label class="control-label p-l-2" text="Change Delete Icon"></Label>
          <i class="bar"></i>
        </StackLayout>
      </StackLayout>
      <Label v-if="shareClickedVisible" id="actionbar__shareicon__label" text="Share Icon Clicked"></Label>
      <Label
        v-if="deleteClickedVisible"
        id="actionbar__deleteicon__label"
        text="Delete Icon Clicked"
      ></Label>
    </StackLayout>
    <StackLayout class="prop-container">
      <Label text="Children"></Label>
      <StackLayout style="margin-top: 25px; margin-bottom: 15px;" orientation="horizontal">
        <Button @tap="addChild('ActionItem')" text="➕ Add Action Item"></Button>
        <Button
          style="margin-left: 15px;"
          @tap="addChild('NavigationButton')"
          text="➕ Add Navigation Button"
        ></Button>
        <Button style="margin-left: 15px;" @tap="setInitialState" text="↺ Reset Children"></Button>
      </StackLayout>
      <StackLayout class="child-row" v-for="(child, index) in children" :key="index">
        <StackLayout orientation="horizontal">
          <Label class="child-label" :text="'∗ ' + child.type + ' ' + (index + 1)"></Label>
          <StackLayout class="form-group">
            <select :id="'actionbar__deleteicon__select__' + index" v-model="child.icon">
              <option
                v-if="child.type === 'ActionItem'"
                v-for="(icon, index) in deleteIcons"
                v-bind:value="icon"
                :key="index"
              >{{ icon }}</option>
              <option
                v-if="child.type === 'NavigationButton'"
                v-for="(icon, index) in backIcons"
                v-bind:value="icon"
                :key="index"
              >{{ icon }}</option>
            </select>
            <Label class="control-label" text="Icon"></Label>
            <i class="bar"></i>
          </StackLayout>
          <Button
            class="remove-child-btn"
            style="margin-left: 15px; padding: 0;"
            @tap="removeChild(index)"
            text="❌"
          ></Button>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import ActionBar from '../../../src/components/ActionBar';
import TextField from '../../../src/components/TextField';
import Button from '../../../src/components/Button';
import NavigationButton from '../../../src/components/NavigationButton';
import ActionItem from '../../../src/components/ActionItem';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'ActionBarLiveDemo',
  components: {
    Label,
    StackLayout,
    ActionBar,
    ActionItem,
    TextField,
    Button,
    NavigationButton,
  },
  data() {
    return {
      title: 'My App',
      shareIcons: ['fa-share', 'fa-share-alt', 'fa-share-square-o'],
      backIcons: ['fa-arrow-left', 'fa-angle-left', 'fa-angle-double-left', 'fa-arrow-circle-left'],
      selectedShareIcon: 'fa-share',
      deleteIcons: ['fa-remove', 'fa-window-close', 'fa-window-close-o'],
      selectedDeleteIcon: 'fa-remove',
      shareClickedVisible: false,
      deleteClickedVisible: false,
      children: [],
    };
  },
  mounted() {
    this.setInitialState();
  },
  methods: {
    setInitialState() {
      this.children = [{ icon: 'fa-remove', type: 'ActionItem' }, { icon: 'fa-remove', type: 'ActionItem' }, { icon: 'fa-remove', type: 'ActionItem' }];
    },
    onTapShare(event) {
      event.stopImmediatePropagation();
      this.shareClickedVisible = true;
      this.deleteClickedVisible = false;
    },
    onTapDelete(event) {
      event.stopImmediatePropagation();
      this.shareClickedVisible = false;
      this.deleteClickedVisible = true;
    },
    addChild(type) {
      this.children.push({ icon: type === 'ActionItem' ? 'fa-remove' : 'fa-arrow-left', type });
    },
    removeChild(index) {
      this.children.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('/fonts/fontawesome.min.css');
@import url('/custom-input.css');

.p-l-1 {
  padding-left: 1rem;
}

.p-l-2 {
  padding-left: 2rem;
}
.form-group {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.result-container {
  border-bottom: 1px solid;
  padding-bottom: 40px;
  margin-bottom: 20px;
}
.prop-container {
  margin-top: 25px;
  background: rgb(243, 243, 243);
  padding: 1rem;

  .child-row {
    // border-bottom: 1px solid #3eaf7c;
    background: #e3e4e4;
    margin-bottom: 1rem;
    padding: 1rem;

    .remove-child-btn {
      padding: 0px;
      height: 2rem;
      width: 2rem;
      min-width: 2rem;
      margin-top: 1rem;
    }
    .child-label {
      min-width: 35%;
      margin-top: 1.5rem;
    }
  }
}
</style>
