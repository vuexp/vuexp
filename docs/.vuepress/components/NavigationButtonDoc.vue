<template>
	<StackLayout>
		<ActionBar :title="title">
			<NavigationButton text="Go back" @tap="goBack($event)" :webIcon="'fa ' + selectedIcon" />
		</ActionBar>
		<StackLayout class="prop-container">
			<Label text="Properties"></Label>
			<StackLayout style="margin-top:75px" class="form-group">
				<TextField id="navigationbutton__title__input" type="text" v-model="title" placeholder="Enter title..."></TextField>
				<Label class="control-label" text="Change Title"></Label><i class="bar"></i>
			</StackLayout>
			<StackLayout style="margin-top:15px" class="form-group">
				<select id="navigationbutton__webicon__select" v-model="selectedIcon">
					<option v-for="(icon, index) in icons" v-bind:value="icon" :key="index">
						{{ icon }}
					</option>
				</select>
				<Label class="control-label" text="Change Icon"></Label><i class="bar"></i>
			</StackLayout>
			<Label v-if="backLabelVisible" id="navigationbutton__backicon__label" text="Back Icon Clicked"></Label>
		</StackLayout>
	</StackLayout>
</template>

<script>
	import ActionBar from '../../../src/components/ActionBar'
	import NavigationButton from '../../../src/components/NavigationButton'
	import TextField from '../../../src/components/TextField'
	import StackLayout from '../../../src/layouts/StackLayout'
	import Label from '../../../src/components/Label'

	export default {
		name: "NavigationButtonDoc",
		components: {
			ActionBar,
			NavigationButton,
			StackLayout,
			Label,
			TextField
		},
		data() {
			return {
				title: 'My App',
				icons: ['fa-arrow-left', 'fa-angle-left', 'fa-angle-double-left', 'fa-arrow-circle-left'],
				selectedIcon: 'fa-arrow-left',
				backLabelVisible: false
			};
		},
		methods: {
			goBack(event) {
				event.stopImmediatePropagation();
				this.backLabelVisible = true;
			}
		}
	};
</script>

<style lang="scss">
	@import url('/fonts/fontawesome.min.css');
	@import url('/custom-input.css');

	.prop-container {
		margin-top: 50px;
		background: rgb(243, 243, 243);
		padding: 1rem;
	}
</style>
