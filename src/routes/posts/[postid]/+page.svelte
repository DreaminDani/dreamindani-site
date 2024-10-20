<script lang="ts">
	import Bio from '$lib/components/layout/bio/Bio.svelte';
	import Prose from '$lib/components/layout/Prose.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div
	class="w-full h-full justify-between items-start md:gap-20 gap-12 inline-flex flex-col md:flex-row"
>
	<article class="prose">
		<!-- Title -->
		<hgroup>
			<h1 class="mb-0 text-foreground">{data.meta.title}</h1>
			<p class="mt-1 text-muted-foreground">Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<!-- Tags -->
		<div>
			{#each data.meta.categories as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>

		<!-- Post -->
		<Prose>
			<svelte:component this={data.content} />
		</Prose>
	</article>
	<Bio sticky />
</div>
