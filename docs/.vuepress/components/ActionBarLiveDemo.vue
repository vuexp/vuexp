<template>
	<StackLayout>
		<ActionBar :title="title">
			<ActionItem @tap="onTapShare($event)" :webIcon="'fa ' + selectedShareIcon" />
			<ActionItem @tap="onTapDelete($event)" :webIcon="'fa ' + selectedDeleteIcon" />
		</ActionBar>
		<ActionBar style="margin-top:15px">
			<ActionItem v-for="(child, index) in children" :key="index" @tap="onTapDelete($event)" :webIcon="'fa ' + child.icon" />

			<!-- <StackLayout v-for="(child, index) in children" :key="index" orientation="horizontal">
				<Label text="VueXP" verticalAlignment="center" />
				<Label text="Cross Platform" verticalAlignment="center" />
			</StackLayout> -->
			<!-- <StackLayout orientation="horizontal">
				<Label text="VueXP" verticalAlignment="center" />
				<Label text="Cross Platform" verticalAlignment="center" />
			</StackLayout> -->
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
		<StackLayout class="prop-container">
			<Label text="Children"></Label>
			<StackLayout style="margin-top: 25px; margin-bottom: 15px;" orientation="horizontal">
				<Button @tap="addChild" text="➕ Add Child"></Button>
				<Button style="margin-left: 15px;" @tap="removeChild" text="❌ Remove Child"></Button>
				<Button style="margin-left: 15px;" @tap="setInitialState" text="↺ Reset Children"></Button>
			</StackLayout>
			<StackLayout class="child-row" v-for="(child, index) in children" :key="index">
				<StackLayout orientation="horizontal">
					<Label class="child-label" :text="'∗ ' + (index + 1)"></Label>
					<StackLayout class="form-group">
						<select id="actionbar__deleteicon__select" v-model="child.icon">
							<option v-for="(icon, index) in deleteIcons" v-bind:value="icon" :key="index">
								{{ icon }}
							</option>
						</select>
						<Label class="control-label" text="Icon"></Label><i class="bar"></i>
					</StackLayout>
				</StackLayout>
			</StackLayout>
		</StackLayout>
	</StackLayout>
</template>

<script>
	import Label from '../../../src/components/Label'
	import ActionBar from '../../../src/components/ActionBar'
	import TextField from '../../../src/components/TextField'
	import Button from '../../../src/components/Button'
	import ActionItem from '../../../src/components/ActionItem'
	import StackLayout from '../../../src/layouts/StackLayout'

	export default {
		name: "ActionBarLiveDemo",
		components: {
			Label,
			StackLayout,
			ActionBar,
			ActionItem,
			TextField,
			Button
		},
		data() {
			return {
				title: 'My App',
				shareIcons: ['fa-share', 'fa-share-alt', 'fa-share-square-o'],
				selectedShareIcon: 'fa-share',
				deleteIcons: ['fa-remove', 'fa-window-close', 'fa-window-close-o'],
				selectedDeleteIcon: 'fa-close',
				shareClickedVisible: false,
				deleteClickedVisible: false,
				children: []
			};
		},
		mounted() {
			this.setInitialState();
		},
		methods: {
			setInitialState() {
				this.children = [
					{ icon: 'fa-remove', type: 'ActionItem' },
					{ icon: 'fa-remove', type: 'ActionItem' },
					{ icon: 'fa-remove', type: 'ActionItem' }
				]
			},
			onTapShare(event) {
				event.stopImmediatePropagation();
				this.shareClickedVisible = true;
				this.deleteClickedVisible = false;
			},
			onTapDelete(event) {
				event.stopImmediatePropagation();
				this.shareClickedVisible = false;
				this.deleteClickedVisible = true;
			},
			addChild() {
				this.children.push({ icon: 'fa-remove', type: 'ActionItem' });
			},
			removeChild() {
				this.children.pop();
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import url('/fonts/fontawesome.min.css');
	@import url('/custom-input.css');

	.prop-container {
		margin-top: 25px;
		background: rgb(243, 243, 243);
		padding: 1rem;

		.child-row {
			// border-bottom: 1px solid #3eaf7c;
			background: #e3e4e4;
			margin-bottom: 1rem;
			padding: 1rem;
			.form-group {
				margin-top: 1.25rem;
				margin-bottom: 1.25rem;
			}
			.child-label {
				min-width: 10%;
				margin-top: 1.5rem;
			}
		}
	}
</style>
