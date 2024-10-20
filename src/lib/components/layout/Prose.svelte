<script>
	let { children } = $props();
</script>

<div
	class={`prose dark:prose-invert
			prose-a:text-link prose-a:decoration-transparent prose-a:transition-colors
			hover:prose-a:decoration-current prose-a:underline-offset-4
			prose-h2:mt-6 prose-h2:font-semibold
			prose-strong:font-semibold
			`}
>
	{@render children()}
</div>
