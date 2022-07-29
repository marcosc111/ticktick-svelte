import { readable, writable } from 'svelte/store';
import { today, yesterday, tomorrow, sevenDaysFromToday } from './date-utils';

export const currentSectionSelected = writable(0);
export const currentSectionItemSelected = writable(0);

export const sectionsData = readable([
	{
		items: [
			{
				name: 'Today',
				iconId: 'sidebar-today-list',
				dynamicIcon: true,
                dateStart: today,
                dateEnd: today
			},
			{
				name: 'Next 7 Days',
				iconId: 'sidebar-today-list',
				dynamicIcon: true,
				weekDay: true,
                dateStart: today,
                dateEnd: sevenDaysFromToday
			},
			{
				name: 'Inbox',
				iconId: 'sidebar-inbox-list'
			}
		]
	},
	{
		name: 'Lists',
		items: [
			{
				name: 'List number 1'
			},
			{
				name: 'A different list'
			},
			{
				name: 'One more list'
			}
		],
		defaultMessage: 'Use lists to categorize and manage your tasks and notes'
	},
	{
		name: 'Tags',
		defaultMessage:
			'Categorize your tasks with tags. Quickly select a tag by typing "#" when adding a task'
	},
	{
		name: 'Filters',
		items: [],
		defaultMessage: 'Display tasks filtered by list, date, priority, tag, and more'
	},
	{
		items: [
			{
				name: 'Completed',
				iconId: 'list-sidebar',
				hideNumber: true
			},
			{
				name: 'Trash',
				iconId: 'sidebar-delete-list',
				hideNumber: true
			},
			{
				name: 'Summary',
				iconId: 'sidebar-summary-list',
				hideNumber: true
			}
		]
	}
]);

export const tasks = writable([
    {
        id: 7,
		title: 'Task title 1 (this should be a long name)',
		description: 'This is a task description',
		dueDate: new Date(1990, 10, 13),
		completed: false
	},
	{
        id: 0,
		title: 'Task title 1 (this should be a long name)',
		description: 'This is a task description',
		dueDate: today,
		completed: false
	},
	{
        id: 1,
		title: 'Task title 2',
		description: 'This is a task description',
		dueDate: today,
		completed: false
	},
	{
        id: 2,
		title: 'Task title due today completed',
		description: 'This is a task description',
		dueDate: today,
		completed: true
	},
	{
        id: 3,
		title: 'Task title yesterday 1',
		description: 'This is a task description',
		dueDate: yesterday,
		completed: false
	},
	{
        id: 4,
		title: 'Task title yesterday 2',
		description: 'This is a task description',
		dueDate: yesterday,
		completed: false
	},
	{
        id: 5,
		title: 'Tomorrow task',
		description: 'This is a task description',
		dueDate: tomorrow,
		completed: false
	},
	{
        id: 6,
		title: 'Very distant task',
		description: 'This is a task description',
		dueDate: new Date(2022, 10, 14),
		completed: false
	}
]);
