<script>
	export let data;
	import Bio from '$lib/components/layout/bio/Bio.svelte';
	import Prose from '$lib/components/layout/Prose.svelte';
	import About from '../content/about.md';

	const { name } = data;
</script>

<div class="w-full h-full justify-start items-start gap-20 inline-flex">
	<Bio />
	<Prose>
		<About />
	</Prose>
</div>
