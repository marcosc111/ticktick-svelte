<script>
	import SvgIcon from './svg-icon.svelte';

	export let name;
	export let iconId = 'sidebar-normal-list';
	export let dynamicIcon = false;
	export let weekDay = false;
	export let hideNumber = false;
	export let active = false;
	export let numberOfItems = undefined;

	const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
</script>

<div
	class="h-full flex flex-row items-center px-[12px] {active
		? 'bg-item-selected'
		: 'hover:bg-item-hovered'} hover:cursor-pointer rounded-md group"
>
	<div class="flex-none">
		<div class="w-[20px] h-[20px] opacity-[.35] mr-[8px] relative">
			<SvgIcon {iconId} />

			{#if dynamicIcon}
				<span
					class="absolute h-[20px] w-[20px] top-[1px] left-0 bottom-0
					right-0 block text-xs transform scale-[.80] font-bold leading-[20px] text-center text-white"
				>
					{weekDay ? days[new Date().getDay()] : new Date().getDate()}
				</span>
			{/if}
		</div>
	</div>
	<div class="flex-auto">
		<div class="text-[14px]">
			{name}
		</div>
	</div>
	<div class="flex-none block group-hover:hidden">
		<div class="text-[12px] text-extra {hideNumber ? 'invisible' : ''}">{numberOfItems ? numberOfItems : ''}</div>
	</div>
	<div class="flex-none hidden group-hover:block">
		<div
			class="text-[12px] text-extra w-[18px] h-[18px] opacity-30 hover:opacity-60 hover:cursor-pointer"
		>
			<SvgIcon iconId="more-for-folder" />
		</div>
	</div>
</div>
