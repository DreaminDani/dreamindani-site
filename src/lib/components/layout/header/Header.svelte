<script>
	import HeaderLink from './HeaderLink.svelte';
	import ModeSwitcher from './ModeSwitcher.svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button';

	let navigationMenuOpen = $state(false);
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
	<Sheet.Root bind:open={navigationMenuOpen}>
		<Sheet.Trigger asChild let:builder>
			<Button
				variant="ghost"
				class="blog sm:hidden absolute left-0 right-0 mx-24 text-primary-foreground dark:text-primary"
				builders={[builder]}>MENU</Button
			>
		</Sheet.Trigger>
		<Sheet.Content side="top" class="flex flex-col gap-2">
			<Sheet.Header class="mb-4">
				<Sheet.Title>Navigation</Sheet.Title>
			</Sheet.Header>
			<Button
				on:click={() => (navigationMenuOpen = false)}
				href="/"
				variant="outline"
				class="w-full">About</Button
			>
			<Button
				on:click={() => (navigationMenuOpen = false)}
				href="/posts"
				variant="outline"
				class="w-full">Blog</Button
			>
			<Button
				on:click={() => (navigationMenuOpen = false)}
				href="/portfolio"
				variant="outline"
				class="w-full">Portfolio</Button
			>
			<Button
				on:click={() => (navigationMenuOpen = false)}
				href="/iam"
				variant="outline"
				class="w-full">I Am...</Button
			>
		</Sheet.Content>
	</Sheet.Root>
	<div class="justify-start items-center gap-4 flex">
		<HeaderLink href="/iam">I Am...</HeaderLink>
		<ModeSwitcher />
	</div>
</div>
