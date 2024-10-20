<script>
	import HeaderLink from './HeaderLink.svelte';
	import ModeSwitcher from './ModeSwitcher.svelte';
</script>

<div
	class="w-full h-16 pr-6 bg-primary dark:bg-[#2E3B48] border-b border-border justify-between items-center inline-flex sticky top-0 z-50"
>
	<div class="w-fit-content h-16 pl-4 pr-4 justify-start items-center gap-6 flex">
		<div class="w-10 h-10 relative">
			<a href="/" aria-label="back to home page"
				><enhanced:img src="/static/avatar.png" alt="dreamindani avatar" /></a
			>
		</div>
		<HeaderLink href="/">About</HeaderLink>
		<HeaderLink href="/posts">Blog</HeaderLink>
		<HeaderLink href="/portfolio">Portfolio</HeaderLink>
	</div>
	<div class="justify-start items-center gap-4 flex">
		<HeaderLink href="/iam">I Am...</HeaderLink>
		<ModeSwitcher />
	</div>
</div>
