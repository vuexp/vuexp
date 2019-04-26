<template>
	<StackLayout>
		<ActionBar title="My App">
			<ActionItem @tap="onTapShare($event)" ios.systemIcon="9" ios.position="left" android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
			<ActionItem @tap="onTapDelete($event)" ios.systemIcon="16" ios.position="right" text="delete" android.position="popup" webIcon="fa fa-remove" />
		</ActionBar>
	</StackLayout>
</template>

<script>
	import ActionBar from '../../../src/components/ActionBar'
	import ActionItem from '../../../src/components/ActionItem'
	import StackLayout from '../../../src/layouts/StackLayout'

	export default {
		name: "ActionItemDoc",
		components: {
			StackLayout,
			ActionBar,
			ActionItem
		},
		methods: {
    onTapShare(event) {
      event.stopImmediatePropagation();
      alert("Share button clicked.");
    },
    onTapDelete(event) {
      event.stopImmediatePropagation();
      alert("Delete button clicked.");
    }
		}
	};
</script>

<style lang="scss">
	@import url('/fonts/fontawesome.min.css');
</style>
