<script>
	let { children, href = '' } = $props();
</script>

<div class="justify-center items-center gap-2.5 flex">
	<a {href} class="text-muted text-sm font-medium font-sans leading-tight">{@render children()}</a>
</div>
