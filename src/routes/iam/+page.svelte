<script>
	import * as Card from '$lib/components/ui/card';

	export let data;
	let { readingList, nowPlaying } = data;
</script>

<div class="flex flex-col m-2 sm:m-4 md:m-0 md:flex-row gap-8">
	<div class="flex flex-col gap-4 md:basis-1/2">
		<h1 class="text-4xl font-extrabold mb-4">Listening to...</h1>
		{#each nowPlaying as { artist, album, image, date, url, name, mbid }, index}
			<a
				target="_blank"
				rel="noreferrer nofollow"
				href={url}
				class="hover:cursor-pointer hover:opacity-80 transition-opacity"
			>
				<article class="flex gap-4" id={mbid}>
					<img
						src={image[1]['#text'] ? image[1]['#text'] : '/placeholder.png'}
						alt={`Album cover for ${artist['#text']} - ${album['#text']}`}
						class="h-24 w-24"
					/>
					<div class="flex flex-col">
						<h1 class="font-semibold">{name}</h1>
						<h2>{artist['#text']} - {album['#text']}</h2>
						{#if date}
							<time class="text-muted-foreground" datetime={date['#text']}>{date['#text']}</time>
						{/if}
					</div>
				</article>
			</a>
		{/each}
	</div>
	<div
		class="flex flex-col gap-2 md:basis-1/2 focus:shadow-md hover:shadow-md hover:cursor-pointer"
	>
		<h1 class="text-4xl font-extrabold mb-4">Currently reading...</h1>
		{#each readingList as { title, link, excerpt }, index}
			<a target="_blank" rel="noreferrer nofollow" href={link}>
				<Card.Root class="pb-4">
					<Card.Header>
						<Card.Title>
							{title}
						</Card.Title>
						<Card.Description>
							{excerpt}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
