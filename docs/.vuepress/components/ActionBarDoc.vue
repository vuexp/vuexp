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
				<Label class="control-label" text="Change Title"></Label><i class="bar"></i>
			</StackLayout>
			<StackLayout style="margin-top:15px" class="form-group">
				<select id="actionbar__shareicon__select" v-model="selectedShareIcon">
					<option v-for="icon in shareIcons" v-bind:value="icon">
						{{ icon }}
					</option>
				</select>
				<Label class="control-label" text="Change Share Icon"></Label><i class="bar"></i>
			</StackLayout>
			<StackLayout style="margin-top:15px" class="form-group">
				<select id="actionbar__deleteicon__select" v-model="selectedDeleteIcon">
					<option v-for="(icon, index) in deleteIcons" v-bind:value="icon" :key="index">
						{{ icon }}
					</option>
				</select>
				<Label class="control-label" text="Change Delete Icon"></Label><i class="bar"></i>
			</StackLayout>
			<Label v-if="shareClickedVisible" id="actionbar__shareicon__label" text="Share Icon Clicked"></Label>
			<Label v-if="deleteClickedVisible" id="actionbar__deleteicon__label" text="Delete Icon Clicked"></Label>
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
				selectedDeleteIcon: 'fa-close',
				shareClickedVisible: false,
				deleteClickedVisible: false
			};
		},
		methods: {
			onTapShare(event) {
				event.stopImmediatePropagation();
				this.shareClickedVisible = true;
				this.deleteClickedVisible = false;
			},
			onTapDelete(event) {
				event.stopImmediatePropagation();
				this.shareClickedVisible = false;
				this.deleteClickedVisible = true;
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
