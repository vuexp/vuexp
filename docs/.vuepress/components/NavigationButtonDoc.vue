<template>
	<StackLayout>
		<ActionBar :title="title">
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack($event)" :webIcon="'fa ' + selectedIcon" />
		</ActionBar>
		<Label style="margin-top:45px" v-text="'Change Title'"></Label>
		<input style="height: 2rem; margin-top:5px" type="text" v-model="title" placeholder="Enter title...">

		<Label style="margin-top:15px" v-text="'Change Icon'"></Label>
		<select style="height: 2rem; margin-top:5px" v-model="selectedIcon">
			<option v-for="icon in icons" v-bind:value="icon">
				{{ icon }}
			</option>
		</select>
	</StackLayout>
</template>

<script>
	import ActionBar from '../../../src/components/ActionBar'
	import NavigationButton from '../../../src/components/NavigationButton'
	import StackLayout from '../../../src/layouts/StackLayout'

	export default {
		name: "NavigationButtonDoc",
		components: {
			ActionBar,
			NavigationButton,
			StackLayout
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
</style>
