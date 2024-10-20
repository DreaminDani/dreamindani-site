<script>
	import Header from '$lib/components/layout/header/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />
<Header />
<main class="container mx-auto md:p-10 p-2 py-4">{@render children()}</main>
