<script>
	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
	import Prose from '$lib/components/layout/Prose.svelte';
	import portfolio from './portfolio.json';

	const reversedList = portfolio.slice().reverse();
</script>

<div class="flex flex-col gap-4">
	{#each reversedList as company}
		<a
			href={company.url}
			target="_blank"
			rel="noopener noreferrer"
			class="hover:opacity-80 transition-opacity"
			><Prose class="flex flex-col prose-h2:mt-12">
				<AspectRatio ratio={16 / 9} class="bg-muted">
					<img class="h-full w-full rounded-md object-cover" src={company.image} alt="" />
				</AspectRatio>
				<h2 class="mb-2">{company.title}</h2>
				<p class="mb-0">{company.description}</p>
			</Prose>
		</a>
	{/each}
</div>
