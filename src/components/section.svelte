<script>
	import SectionItem from './section-item.svelte';
	import SectionTitle from './section-title.svelte';

	import { sevenDaysFromToday, compareDates } from '../date-utils';
	import { tasks, currentSectionItemSelected } from '../stores';

	export let data;
	export let mainSection = false;

	let showingListItems = true;

	let overdueTasks;
	let todayTasks;
	let weekTasks;

	let curSectionItemSelected;

	if (mainSection) {
		tasks.subscribe((v) => {
			overdueTasks = v.filter((t) => compareDates(t.dueDate, new Date()) < 0 && !t.completed);
			todayTasks = v.filter((t) => compareDates(t.dueDate, new Date()) === 0 && !t.completed);
			weekTasks = v.filter(
				(t) =>
					(compareDates(t.dueDate, new Date()) >= 0 &&
						compareDates(t.dueDate, sevenDaysFromToday) <= 0) &&
					!t.completed
			);
		});

		currentSectionItemSelected.subscribe((v) => {
			curSectionItemSelected = v;
		});
	}
</script>

<section class="mt-[6px]">
	{#if data.name}
		<div class="h-[30px] px-[8px]">
			<SectionTitle title={data.name} bind:showingListItems />
		</div>
	{/if}
	{#if showingListItems}
		{#if !data.items || data.items.length === 0}
			<div
				class="ml-[20px] mr-[8px] rounded-[4px] px-[8px] py-[6px] text-[12px] leading-[18px] bg-info-gray text-lighter-extra"
			>
				{data.defaultMessage}
			</div>
		{:else}
			<ul>
				{#if mainSection}
					<div>
						<li class="h-[40px] px-[8px]">
							<SectionItem
								name="Today"
								iconId="sidebar-today-list"
								dynamicIcon
								weekDay
								numberOfItems={overdueTasks.length + todayTasks.length}
								active={curSectionItemSelected == 0}
							/>
						</li>
					</div>
					<div>
						<li class="h-[40px] px-[8px]">
							<SectionItem
								name="Next 7 Days"
								iconId="sidebar-today-list"
								dynamicIcon
								weekDay
								numberOfItems={overdueTasks.length + weekTasks.length}
								active={curSectionItemSelected == 1}
							/>
						</li>
					</div>
					<div>
						<li class="h-[40px] px-[8px]">
							<SectionItem
								name="Inbox"
								iconId="sidebar-inbox-list"
								numberOfItems={$tasks.length}
								active={curSectionItemSelected == 2}
							/>
						</li>
					</div>
				{:else}
					{#each data.items as { name, iconId, dynamicIcon, weekDay, hideNumber }, i}
						<div>
							<li class="h-[40px] px-[8px]">
								<SectionItem {name} {iconId} {dynamicIcon} {weekDay} {hideNumber} />
							</li>
						</div>
					{/each}
				{/if}
			</ul>
		{/if}
	{/if}
</section>
