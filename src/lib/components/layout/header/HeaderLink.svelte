<script>
	import { page } from '$app/stores';

	let { children, href = '' } = $props();

	let active = $derived($page.url.pathname === href);
	$inspect('active', active);
</script>

<div class="justify-center items-center gap-2.5 flex">
	<a
		{href}
		class="text-muted dark:text-muted-foreground text-sm font-sans leading-tight hover:opacity-80"
		class:font-semibold={active}>{@render children()}</a
	>
</div>
