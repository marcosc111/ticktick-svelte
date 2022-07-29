<script>
	import SvgIcon from './svg-icon.svelte';
	import { today, yesterday, tomorrow, compareDates } from '../date-utils';
	import { tasks } from '../stores';

	export let title;
	export let dueDate;
	export let completed;
    export let id;

	function getDateText(date) {
		if (compareDates(date, today) === 0) {
			return 'Today';
		} else if (compareDates(date, yesterday) === 0) {
			return 'Yesterday';
		} else if (compareDates(date, tomorrow) === 0) {
			return 'Tomorrow';
		} else {
			return new Intl.DateTimeFormat('pt-BR').format(dueDate);
		}
	}

	function handleCheckboxClick(e) {
		tasks.update((old) => {
            old[old.findIndex((o => o.id == id))].completed = !old[old.findIndex((o => o.id == id))].completed;
            return old;
        });
	}
</script>

<ul>
	<div class="h-[40px]">
		<div class="w-full h-full pl-[12px]">
			<div class="w-full h-full pr-[20px] flex flex-col">
				<div class="h-full flex flex-row items-center hover:bg-item-hovered">
					<div
						on:click={handleCheckboxClick}
						class="flex-none w-[22px] h-[22px] {completed
							? 'fill-lighter-extra'
							: 'fill-base-content'} ml-[18px] mr-[6px] hover:cursor-pointer"
					>
						<SvgIcon iconId={completed ? 'completed' : 'checkbox'} />
					</div>
					<div
						class="flex-auto mr-[5px] text-[15px] truncate {completed ? 'text-lighter-extra' : 'text-base-content'}"
					>
						{title}
					</div>
					<div class="flex-none flex flex-row items-center">
						<div
							class="text-[12px] text-lighter-extra mr-[4px] hover:underline hover:cursor-pointer"
						>
							Inbox
						</div>
						<div
							class="text-[12px] {completed
								? 'text-lighter-extra'
								: compareDates(dueDate, today) < 0
								? 'text-red-600'
								: 'text-primary'} hover:cursor-pointer"
						>
							{getDateText(dueDate)}
						</div>
					</div>
				</div>
				<div class="flex-none">
					<div class="ml-[40px] h-[1px]  bg-info-gray" />
				</div>
			</div>
		</div>
	</div>
</ul>
