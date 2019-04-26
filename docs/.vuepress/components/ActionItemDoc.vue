<template>
	<StackLayout>
		<ActionBar title="My App">
			<ActionItem @tap="onTapShare($event)" ios.systemIcon="9" ios.position="left" android.systemIcon="ic_menu_share" android.position="actionBar" :webIcon="'fa ' + selectedShareIcon" />
			<ActionItem @tap="onTapDelete($event)" ios.systemIcon="16" ios.position="right" text="delete" android.position="popup" :webIcon="'fa ' + selectedDeleteIcon" />
		</ActionBar>
		<div style="margin-top:75px" class="form-group">
			<select id="actionitem__shareicon__select" v-model="selectedShareIcon">
				<option v-for="icon in shareIcons" v-bind:value="icon">
					{{ icon }}
				</option>
			</select>
			<label for="select" class="control-label">Change Share Icon</label><i class="bar"></i>
		</div>
		<div style="margin-top:15px" class="form-group">
			<select id="actionitem__deleteicon__select" v-model="selectedDeleteIcon">
				<option v-for="icon in deleteIcons" v-bind:value="icon">
					{{ icon }}
				</option>
			</select>
			<label for="select" class="control-label">Change Delete Icon</label><i class="bar"></i>
		</div>
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
		data() {
			return {
				shareIcons: ['fa-share', 'fa-share-alt', 'fa-share-square-o'],
				selectedShareIcon: 'fa-share',
				deleteIcons: ['fa-close', 'fa-window-close', 'fa-window-close-o'],
				selectedDeleteIcon: 'fa-close'
			}
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
	@import url('/custom-input.css');
</style>
