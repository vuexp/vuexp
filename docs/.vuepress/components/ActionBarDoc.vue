<template>
	<StackLayout>
		<ActionBar :title="title">
			<ActionItem @tap="onTapShare($event)" :webIcon="'fa ' + selectedShareIcon" />
			<ActionItem @tap="onTapDelete($event)" :webIcon="'fa ' + selectedDeleteIcon" />
		</ActionBar>
		<ActionBar style="margin-top:15px">
			<StackLayout orientation="horizontal">
				<Label text="NativeScript" verticalAlignment="center" />
				<Label text="Vue Web" verticalAlignment="center" />
			</StackLayout>
		</ActionBar>
		<StackLayout style="margin-top:75px" class="form-group">
			<input id="actionbar__title__input" type="text" v-model="title" placeholder="Enter title..." />
			<label for="input" class="control-label">Change Title</label><i class="bar"></i>
		</StackLayout>
		<StackLayout style="margin-top:15px" class="form-group">
			<select id="actionbar__shareicon__select" v-model="selectedShareIcon">
				<option v-for="icon in shareIcons" v-bind:value="icon">
					{{ icon }}
				</option>
			</select>
			<label for="select" class="control-label">Change Share Icon</label><i class="bar"></i>
		</StackLayout>
		<StackLayout style="margin-top:15px" class="form-group">
			<select id="actionbar__deleteicon__select" v-model="selectedDeleteIcon">
				<option v-for="icon in deleteIcons" v-bind:value="icon">
					{{ icon }}
				</option>
			</select>
			<label for="select" class="control-label">Change Delete Icon</label><i class="bar"></i>
		</StackLayout>
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
				title: 'My App',
				shareIcons: ['fa-share', 'fa-share-alt', 'fa-share-square-o'],
				selectedShareIcon: 'fa-share',
				deleteIcons: ['fa-close', 'fa-window-close', 'fa-window-close-o'],
				selectedDeleteIcon: 'fa-close'
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
	@import url('/custom-input.css');
</style>
