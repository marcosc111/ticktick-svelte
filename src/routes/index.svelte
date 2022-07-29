<script>
	import SideBar from '../components/side-bar.svelte';
	import LeftListView from '../components/left-list-view.svelte';
	import TaskListView from '../components/task-list-view.svelte';
	import DetailView from '../components/detail-view.svelte';

	let leftListViewVisible = true;
</script>

<div class="flex flex-row h-screen">
	<div class="flex flex-row flex-none">
		<SideBar />
		<LeftListView bind:visible={leftListViewVisible} />
	</div>
	<TaskListView bind:leftListViewVisible />
	<DetailView />
</div>
