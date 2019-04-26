<template>
	<StackLayout>
		<ActionBar :title="title">
			<ActionItem @tap="onTapShare($event)" ios.systemIcon="9" ios.position="left" android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
			<ActionItem @tap="onTapDelete($event)" ios.systemIcon="16" ios.position="right" text="delete" android.position="popup" webIcon="fa fa-remove" />
		</ActionBar>
		<ActionBar style="margin-top:15px">
			<StackLayout orientation="horizontal">
				<Label text="NativeScript" verticalAlignment="center" />
				<Label text="Vue Web" verticalAlignment="center" />
			</StackLayout>
		</ActionBar>
		<Label style="margin-top:45px" v-text="'Change Title'"></Label>
		<input style="height: 2rem; margin-top:5px" type="text" v-model="title" placeholder="Enter title...">
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
		data() {
			return {
				title: 'My App'
			};
		},
		methods: {
			onTapShare(event) {
				event.stopImmediatePropagation();
				alert("Share button clicked");
			},
			onTapDelete(event) {
				event.stopImmediatePropagation();
				alert("Delete button clicked");
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import url('/fonts/fontawesome.min.css');
</style>
