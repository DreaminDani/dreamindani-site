<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as Card from '$lib/components/ui/card/index.js';
	import { goto } from '$app/navigation';

	export let data;
</script>

<svelte:head>
	<title>Posts | Dani Sandoval</title>
</svelte:head>

<!-- Posts -->
<section class="flex flex-col gap-3">
	{#each data.posts as post}
		<a href="/posts/{post.slug}">
			<Card.Root class="focus:shadow-md hover:shadow-md hover:cursor-pointer">
				<Card.Header>
					<Card.Title>{post.title}</Card.Title>
					<Card.Description>{formatDate(post.date)}</Card.Description>
				</Card.Header>
				<Card.Content class="pt-3">
					{post.description}
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</section>
