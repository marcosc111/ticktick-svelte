<script>
	import SideBar from '../components/side-bar.svelte';
	import LeftListView from '../components/left-list-view.svelte';
	import ListView from '../components/list-view.svelte';
	import RightView from '../components/right-view.svelte';
</script>

<div class="flex flex-row">
	<div class="flex flex-row flex-none">
		<SideBar />
		<LeftListView />
	</div>
	<div class="flex-1">
		<ListView />
	</div>
	<div class="flex-none">
		<RightView />
	</div>
</div>
