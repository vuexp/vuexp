<template>
  <StackLayout>
    <ActionBar title="My App">
      <ActionItem @tap="onTapShare($event)"
        ios.systemIcon="9" ios.position="left"
        android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
      <ActionItem @tap="onTapDelete($event)"
        ios.systemIcon="16" ios.position="right"
        text="delete" android.position="popup" webIcon="fa fa-remove" />
    </ActionBar>
    <ActionBar style="margin-top:15px">
      <StackLayout orientation="horizontal">
        <Label text="NativeScript" verticalAlignment="center" />
        <Label text="Vue Web" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label'
import ActionBar from '../../../src/components/ActionBar'
import ActionItem from '../../../src/components/ActionItem'
import StackLayout from '../../../src/layouts/StackLayout'

export default {
  name: "ActionBarDoc",
  components: {
    Label,
    StackLayout,
    ActionBar,
    ActionItem
  },
  methods: {
    onTapShare(event) {
      event.stopImmediatePropagation();
      alert("shared");
    },
    onTapDelete(event) {
      event.stopImmediatePropagation();
      alert("deleted");
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "FontAwesome";
  src: url("/fonts/fontawesome-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.fa {
  font-family: "FontAwesome";
}

.fa-share:before {
  content: "\f064";
}

.fa-remove:before {
  content: "\f00d";
}
</style>
