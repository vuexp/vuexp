<template>
	<StackLayout>
		<ActionBar :title="title">
			<ActionItem @tap="onTapShare($event)" :webIcon="'fa ' + selectedShareIcon" />
			<ActionItem @tap="onTapDelete($event)" :webIcon="'fa ' + selectedDeleteIcon" />
		</ActionBar>
		<ActionBar style="margin-top:15px">
			<StackLayout orientation="horizontal">
				<Label text="VueXP" verticalAlignment="center" />
				<Label text="Cross Platform" verticalAlignment="center" />
			</StackLayout>
		</ActionBar>
		<StackLayout class="prop-container">
			<Label text="Properties"></Label>
			<StackLayout style="margin-top:50px" class="form-group">
				<TextField id="actionbar__title__input" type="text" v-model="title" placeholder="Enter title..."></TextField>
				<label for="input" class="control-label">Change Title</label><i class="bar"></i>
			</StackLayout>
			<StackLayout style="margin-top:15px" class="form-group">
				<select id="actionbar__shareicon__select" v-model="selectedShareIcon">
					<option v-for="icon in shareIcons" v-bind:value="icon">
						{{ icon }}
					</option>
				</select>
				<Label for="select" class="control-label" text="Change Share Icon"></Label><i class="bar"></i>
			</StackLayout>
			<StackLayout style="margin-top:15px" class="form-group">
				<select id="actionbar__deleteicon__select" v-model="selectedDeleteIcon">
					<option v-for="icon in deleteIcons" v-bind:value="icon">
						{{ icon }}
					</option>
				</select>
				<Label for="select" class="control-label" text="Change Delete Icon"></Label><i class="bar"></i>
			</StackLayout>
		</StackLayout>
	</StackLayout>
</template>

<script>
	import Label from '../../../src/components/Label'
	import ActionBar from '../../../src/components/ActionBar'
	import TextField from '../../../src/components/TextField'
	import ActionItem from '../../../src/components/ActionItem'
	import StackLayout from '../../../src/layouts/StackLayout'

	export default {
		name: "ActionBarDoc",
		components: {
			Label,
			StackLayout,
			ActionBar,
			ActionItem,
			TextField
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

	.prop-container {
		margin-top: 50px;
		background: rgb(243, 243, 243);
		padding: 1rem;
	}
</style>
