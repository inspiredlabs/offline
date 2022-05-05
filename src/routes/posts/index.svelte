<script context="module">
	/******** GraphCMS POSTS **********/
	export const prerender = true;
	export const load = async ({fetch}) => {
		const response = await fetch('posts.json');
		if (response.ok) {
			const { posts } = await response.json()
			return {
				props: { posts },
			}
		}
	}
	</script>

<script>
export let posts = [];
//import Fraunces from '$lib/Fraunces.svelte';
import Section from '$lib/Section.svelte';
//import viewport from '$lib/useViewportAction';
</script>

<Section>
	<pre>
		{#each posts as { src, event, date, duration, country, location, pp, participants, slug }, i}
			{src.url}
			{event}
			{date}
			{duration}
			{country}
			{location}
			{pp}
			{participants}
			{slug}
		{/each}
	</pre>
</Section>
