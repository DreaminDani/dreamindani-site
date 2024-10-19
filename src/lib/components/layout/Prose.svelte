<script>
	let { children } = $props();
</script>

<div
	class="prose dark:prose-invert prose-a:text-primary prose-a:decoration-transparent prose-a:transition-colors hover:prose-a:decoration-current prose-a:underline-offset-4"
>
	{@render children()}
</div>
