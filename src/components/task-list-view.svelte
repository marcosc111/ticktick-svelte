<script>
	import NewTaskView from './new-task-view.svelte';
	import SvgIcon from './svg-icon.svelte';
	import TaskGroup from './task-group.svelte';
	import { tasks } from '../stores';
	import { compareDates } from '../date-utils';

	export let leftListViewVisible;

	function buttonCollaseExpandHandler() {
		leftListViewVisible = !leftListViewVisible;
	}

	let allTasks;

	let overdueTasks;
	let todayTasks;
	let completedTasks;

	tasks.subscribe((v) => {
		overdueTasks = v.filter((t) => compareDates(t.dueDate, new Date()) < 0 && !t.completed);
		todayTasks = v.filter((t) => compareDates(t.dueDate, new Date()) === 0 && !t.completed);
		completedTasks = v.filter((t) => t.completed);
	});
</script>

<div class="flex-auto flex flex-col h-full min-w-[350px]">
	<header class="flex-none px-[20px] pt-[16px] pb-[8px] flex flex-row items-center">
		<div class="flex-none">
			<div
				class="w-[30px] h-[30px] flex flex-row items-center hover:bg-info-gray hover:cursor-pointer mr-[8px] rounded-[2px]"
				on:click={buttonCollaseExpandHandler}
			>
				<div class="w-full h-[24px] opacity-70">
					<SvgIcon iconId={leftListViewVisible ? 'sidebar-collapse' : 'sidebar-expand'} />
				</div>
			</div>
		</div>
		<div class="flex-auto text-[24px]">
			<span class="text-base-content">Today</span>
		</div>
		<div class="flex-none flex flex-row items-center">
			<div
				class="w-[24px] h-[24px] flex flex-row items-center hover:bg-info-gray hover:cursor-pointer mr-[2px]"
			>
				<div class="w-full h-[18px] opacity-50 rounded-[3px]">
					<SvgIcon iconId="sort-by-complete" />
				</div>
			</div>
			<div
				class="w-[24px] h-[24px] flex flex-row items-center hover:bg-info-gray hover:cursor-pointer"
			>
				<div class="w-full h-[18px] opacity-50 rounded-[3px]">
					<SvgIcon iconId="more-for-folder" />
				</div>
			</div>
		</div>
	</header>
	<NewTaskView />
	<div class="flex-auto">
		<TaskGroup name="Overdue" tasks={overdueTasks} hasPostponeOption />
		<TaskGroup name="Today" tasks={todayTasks} />
		{#if completedTasks && completedTasks.length > 0}
			<TaskGroup name="Completed" tasks={completedTasks} completed />
		{/if}
	</div>
</div>
