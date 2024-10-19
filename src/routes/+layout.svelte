<script>
	import Header from '$lib/components/layout/header/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />
<Header />
<main class="container mx-auto md:p-10 sm:p-2 sm:py-4">{@render children()}</main>
