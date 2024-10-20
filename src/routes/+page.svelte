<script>
	export let data;
	import Bio from '$lib/components/layout/bio/Bio.svelte';
	import Prose from '$lib/components/layout/Prose.svelte';
	import About from '../content/about.md';

	const { name } = data;
</script>

<head>
	<title>About Me | Dani Sandoval</title>
</head>

<div
	class="w-full h-full justify-start items-start md:gap-20 gap-12 inline-flex flex-col md:flex-row"
>
	<Bio />
	<Prose>
		<About />
	</Prose>
</div>
