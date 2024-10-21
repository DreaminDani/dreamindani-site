<script>
	import PortfolioContent from '$lib/components/layout/portfolio/PortfolioContent.svelte';
	import Prose from '$lib/components/layout/Prose.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let data;
</script>

<div class="flex flex-col md:flex-row gap-6">
	<PortfolioContent />
	<Separator orientation="vertical" />
	<Prose class="mt-6 basis-3/5">
		<svelte:component this={data.content} />
	</Prose>
</div>
