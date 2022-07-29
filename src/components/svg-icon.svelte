<script>
	export let selected = false;
	export let iconId;
</script>

<div class="w-full h-full m-0 p-0">
	<svg class="w-full h-full {selected ? 'fill-primary' : ''}"><use xlink:href="#{iconId}" /></svg>
</div>
