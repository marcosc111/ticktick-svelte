<script>
	import SvgIcon from './svg-icon.svelte';
	import { tasks } from '../stores';
	import { today } from '../date-utils';

	let hasFocus = false;
	let currentInputText = '';

	function handleKeypress(e) {
		if (e.key === 'Enter' && currentInputText && currentInputText.length > 0) {
			tasks.update((old) => [
				...old,
				{
					id: old.length,
					title: currentInputText,
					description: 'This is a task description',
					dueDate: today,
					completed: false
				}
			]);

			document.getElementById('newTask').blur();
			currentInputText = '';
		}
	}
</script>

<div class="flex-none w-full px-[20px] pb-[8px]">
	<div class="h-[40px] relative">
		<div
			class="absolute w-full h-full px-[12px] rounded-[5px] flex flex-row items-center {hasFocus
				? 'bg-transparent border-[1px] border-primary'
				: 'bg-info-gray border-[1px] border-info-gray'}"
		>
			{#if currentInputText.length === 0}
				<div class="w-[18px] h-[18px] opacity-20 mr-[3px]">
					<SvgIcon iconId="list-add" />
				</div>
				<span class="text-[14px] text-extra opacity-30">Add task to "inbox" on "Today"</span>
			{/if}
		</div>
		<div class="absolute w-full h-full px-[12px] bg-transparent flex flex-row items-center">
			<input
				id="newTask"
				class="flex-auto w-full border-none outline-none bg-transparent text-[14px]"
				type="text"
				bind:value={currentInputText}
				on:focus={() => {
					hasFocus = true;
				}}
				on:blur={() => {
					hasFocus = false;
				}}
				on:keypress={handleKeypress}
			/>
			{#if hasFocus}
				<div class="flex-none flex flex-row">
					<div
						class="flex-none flex flex-row rounded-[3px] px-[4px] py-[1px] hover:bg-gray-200 hover:cursor-pointer"
					>
						<div class="w-[24px] h-[24px] fill-primary">
							<SvgIcon iconId="calendar-sidebar" />
						</div>
						<div>
							<span class="text-primary text-[12px] ml-[3px]">Today</span>
						</div>
					</div>
					<div class="flex-none flex flex-row items-center mx-[6px] opacity-20">
						<div class="w-[1px] h-[12px] bg-extra" />
					</div>
					<div
						class="flex-none w-[24px] h-[24px] hover:bg-gray-200 hover:cursor-pointer flex flex-row items-center"
					>
						<div class="w-full flex flex-col items-center">
							<div class="w-[18px] h-[18px] opacity-40">
								<SvgIcon iconId="thin-triangle-down" />
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
