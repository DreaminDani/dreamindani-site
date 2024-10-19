<script>
	export let data;

	const { name } = data;
</script>

<h1>Hello {name ? name : 'World'}</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
