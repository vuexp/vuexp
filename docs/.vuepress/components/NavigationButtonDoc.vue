<template>
  <ActionBar title="My App">
    <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" webIcon="fa fa-arrow-left" />
  </ActionBar>
</template>

<script>
export default {
  name: "NavigationButtonDoc",
  methods: {
    goBack() {
      alert("goBack");
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

.fa-arrow-left:before {
  content: "\f060";
}
</style>
