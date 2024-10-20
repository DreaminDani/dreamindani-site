<script>
	import honors from './honors.json';
</script>

{#each honors as honor}
	<div class="honors">
		<h2>{honor.title}</h2>
		<p>{honor.organization}</p>
		<p>{honor.description}</p>
		<p><a href={honor.url}>Read More</a></p>
	</div>
{/each}
