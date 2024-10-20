<script>
	import { cn } from '$lib/utils';

	let { children, class: className, ...restProps } = $props();
</script>

<div
	class={cn(
		`prose dark:prose-invert
			prose-a:text-link prose-a:decoration-transparent prose-a:transition-colors
			hover:prose-a:decoration-current prose-a:underline-offset-4
			prose-h2:mt-2 prose-h2:font-semibold
			prose-strong:font-semibold
			`,
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
