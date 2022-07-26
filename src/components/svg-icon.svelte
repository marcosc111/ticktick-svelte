<script>
	
	export let active;
	export let iconId;

</script>

<div class="w-auto m-0 p-0">
	<a class="inline bg-black" href="#">
		{#if active}
		<svg class="w-[24px] h-[24px] align-middle icon-active"><use xlink:href="#list-sidebar" /></svg>
		{:else}
		<svg class="w-[24px] h-[24px] align-middle opacity-[0.35] hover:opacity-60"><use xlink:href="#{iconId}" /></svg>
		{/if}
	</a>
</div>

<style>
	.icon-active {
		fill: hsl(var(--p));
	}
</style>
