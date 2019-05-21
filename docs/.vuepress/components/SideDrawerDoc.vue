<template>
	<StackLayout>
		<RadSideDrawer
			id="SideDrawer"
			ref="drawer"
			class="sidedrawer-doc-container">
			<FlexboxLayout
				flexDirection="column"
				v-view:drawerContent
				class="sidedrawer-doc-container__drawer">
				<FlexboxLayout class="sidedrawer-doc-container__drawer__title">
					<Label
						id="SideDrawer_menu-title_label"
						text="Navigation Menu"></Label>
				</FlexboxLayout>
				<StackLayout>
					<Label
						id="SideDrawer_menu-item-1_label"
						text="Home"
						class="sidedrawer-doc-container__drawer__label"></Label>
					<Label
						id="SideDrawer_menu-item-2_label"
						text="Social"
						class="sidedrawer-doc-container__drawer__label"></Label>
					<Label
						id="SideDrawer_menu-item-3_label"
						text="Promotions"
						class="sidedrawer-doc-container__drawer__label"></Label>
					<Label
						id="SideDrawer_menu-item-4_label"
						text="Starred"
						class="sidedrawer-doc-container__drawer__label"></Label>
					<Label
						id="SideDrawer_menu-item-5_label"
						text="Drafts"
						class="sidedrawer-doc-container__drawer__label"></Label>
				</StackLayout>
				<Button
					id="SideDrawer_close-button_button"
					@tap="closeDrawer"
					primary
					text="CLOSE DRAWER"></Button>
			</FlexboxLayout>
			<StackLayout v-view:mainContent>
				<Label
					id="SideDrawer_main-content_label"
					:textWrap="true"
					class="sidedrawer-doc-container__text"
					text="Main Content Area" />
				<Button
					id="SideDrawer_show-button_button"
					@tap="showDrawer"
					primary
					text="SHOW DRAWER"></Button>
			</StackLayout>
		</RadSideDrawer>
		<StackLayout orientation="horizontal" class="control-panel-wrapper">
			<Label text="Open/Closed Label:"></Label>
			<Label
				id="SideDrawer_open-closed-status_label"
				:text="openClosedStatus"></Label>
		</StackLayout>
	</StackLayout>
</template>

<script>

	import RadSideDrawer from '../../../src/components/SideDrawer';
	import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
	import Label from '../../../src/components/Label';
	import StackLayout from '../../../src/layouts/StackLayout';
	import Button from '../../../src/components/Button';
	import TextField from '../../../src/components/TextField';

	export default {
		name: "SideDrawerDoc",
		components: {
				RadSideDrawer,
				FlexboxLayout,
				Label,
				StackLayout,
				Button,
				TextField
		},
		data() {
			return {
				openClosedStatus: ''
			}
		},
		mounted() {
			this.openClosedStatus = this.$refs.drawer.opened;
		},
		methods: {
			showDrawer() {
				this.$refs.drawer.nativeView.showDrawer();
				this.openClosedStatus = this.$refs.drawer.opened;
				
			},
			closeDrawer() {
				this.$refs.drawer.nativeView.closeDrawer();
				this.openClosedStatus = this.$refs.drawer.opened;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.sidedrawer-doc-container {
		height: 340px;

		&__drawer {
			background-color: #282b30;
			color: #ffffff;
			padding: 20px;
			width: 200px;

			&__title {
				text-align: center;
				font-weight: bold;
				color: #ebebeb;
			}

			&__label {
				line-height: 36px;
				border-bottom: solid 1px #393c41;
			}
		}

		&__text {
			text-align: center;
			margin-bottom: 20px;
		}
	}

	.control-panel-wrapper {
		* { 
			margin: 3px;
		}

		& :nth-child(odd) {
			font-weight: 700;
		}
	}
</style>
