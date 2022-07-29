<script>
import SvgIcon from "./svg-icon.svelte";
import TaskItem from "./task-item.svelte";

	export let name;
	export let hasPostponeOption = false;
	export let showingItems = true;
	export let completed = false;

	export let tasks;

	function toggleVisibility() {
		showingItems = !showingItems;
	}
</script>

<div>
	<div class="h-[36px] px-[12px] flex flex-row items-center hover:cursor-pointer">
		<div class="flex-none ml-[6px] mr-[4px] w-[12px] h-[12px] opacity-40 hover:opacity-60 {showingItems ? '' : '-rotate-90'}" on:click={toggleVisibility}>
			<SvgIcon iconId="thin-triangle-down" />
		</div>
		<div class="flex-auto text-[12px] font-bold" on:click={toggleVisibility}>
			{name}
		</div>
		{#if hasPostponeOption}
		<div class="flex-none text-[12px] mx-[8px] text-primary">
			Postpone
		</div>
		{/if}
	</div>
	{#if showingItems}
	{#each tasks as { id, title, dueDate }}
		<TaskItem {id} {title} {dueDate} {completed} />
	{/each}
	{/if}
</div>