<script>
	import Section from './section.svelte';
	import SvgIcon from './svg-icon.svelte';
	import { sectionsData, tasks } from '../stores';

	let sections;

	sectionsData.subscribe((v) => {
		sections = Object.assign(v);
	});

	// sectionsData.update((old) => ({
	//   topicos: [...old.topicos, newTopicoObj],
	// }));

	export let visible = true;
</script>

{#if visible}
	<div class="flex-1 flex flex-col w-[250px] min-h-screen">
		<div class="flex-auto border-r border-info-gray border-solid flex flex-col">
			<div class="flex-1 py-[8px]">
				<Section data={sections[0]} mainSection />

				<div class="mx-[8px] h-[1px] my-[8px] bg-info-gray" />

				<Section data={sections[1]} />
				<Section data={sections[2]} />
				<Section data={sections[3]} />

				<div class="mx-[8px] h-[1px] my-[10px] bg-info-gray" />

				<Section data={sections[4]} />
			</div>
		</div>

		<div
			class="flex-none min-h-[28px] max-h-[28px] border-r border-info-gray
        border-solid flex flex-col items-start bg-info-gray px-[20px]"
		>
			<div class="flex-auto flex flex-row items-center">
				<div class="w-[24px] h-[24px] mr-[8px] opacity-[0.15]">
					<SvgIcon iconId="upgrade-button-bg" />
				</div>
				<div>
					<span class="text-[12px] text-gray-400">Upgrade to Premium</span>
				</div>
			</div>
		</div>
	</div>
{/if}
