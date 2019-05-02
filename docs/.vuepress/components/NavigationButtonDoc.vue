<template>
	<StackLayout>
		<ActionBar :title="title">
			<NavigationButton text="Go back" @tap="goBack($event)" :webIcon="'fa ' + selectedIcon" />
		</ActionBar>
		<StackLayout class="prop-container">
			<Label text="Properties"></Label>
			<StackLayout style="margin-top:75px" class="form-group">
				<input id="navigationbutton__title__input" type="text" v-model="title" placeholder="Enter title..." />
				<label for="input" class="control-label">Change Title</label><i class="bar"></i>
			</StackLayout>
			<StackLayout style="margin-top:15px" class="form-group">
				<select id="navigationbutton__webicon__select" v-model="selectedIcon">
					<option v-for="icon in icons" v-bind:value="icon">
						{{ icon }}
					</option>
				</select>
				<label for="select" class="control-label">Change Icon</label><i class="bar"></i>
			</StackLayout>
		</StackLayout>

	</StackLayout>
</template>

<script>
	import ActionBar from '../../../src/components/ActionBar'
	import NavigationButton from '../../../src/components/NavigationButton'
	import StackLayout from '../../../src/layouts/StackLayout'
	import Label from '../../../src/components/Label'

	export default {
		name: "NavigationButtonDoc",
		components: {
			ActionBar,
			NavigationButton,
			StackLayout,
			Label
		},
		data() {
			return {
				title: 'My App',
				icons: ['fa-arrow-left', 'fa-angle-left', 'fa-angle-double-left', 'fa-arrow-circle-left'],
				selectedIcon: 'fa-arrow-left'
			};
		},
		methods: {
			goBack(event) {
				event.stopImmediatePropagation();
				alert("Back button clicked.");
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
