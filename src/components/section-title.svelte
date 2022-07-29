<script>
	import { createEventDispatcher } from 'svelte';
	import SvgIcon from './svg-icon.svelte';

	export let title;
	export let showingListItems;

	function toggleListVisibility() {
		showingListItems = !showingListItems;
	}
</script>

<div
	class="h-full flex flex-row items-center hover:bg-[#f5f8ff] pr-[8px] hover:cursor-pointer rounded-md group"
>
	<div class="flex-none" on:click={toggleListVisibility}>
		<div
			class="w-[12px] h-[12px] opacity-[.35] mr-[2px] relative invisible group-hover:visible {showingListItems
				? ''
				: '-rotate-90'} "
		>
			<SvgIcon iconId="thin-triangle-down" />
		</div>
	</div>
	<div class="flex-auto" on:click={toggleListVisibility}>
		<div class="text-[12px] text-gray-500">
			{title}
		</div>
	</div>
	<div class="flex-none">
		<div class="w-[24px] h-[24px] hover:bg-gray-200 flex flex-row items-center">
			<div class="w-[24px] h-[18px] flex flex-col items-center">
				<div class="flex-none w-[18px] h-[18px] opacity-50">
					<SvgIcon iconId="list-add" />
				</div>
			</div>
		</div>
	</div>
</div>
