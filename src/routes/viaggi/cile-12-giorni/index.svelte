<script context="module">
	/******** GraphCMS POSTS **********/
	export const prerender = true;
	export const load = async ({fetch}) => {
		// learn: `'../viaggi.json'` is a relative path, but `'viaggi.json'` is a relative path to the current file
		const response = await fetch('../viaggi.json');
		if (response.ok) {
			const { posts } = await response.json()
			return {
				props: { posts },
			}
		}
	}
</script>

<script>
	export let posts = [];// learn: see Stringify below
	let truncate = 29; /* try `Slovacchia` */

	import Hero from '$lib/Hero/index.svelte';
	import Intro from '$lib/Intro/index.svelte';
	import Section from '$lib/Section.svelte'; // fix: abstract away into `<Components />`
	import Outro from '$lib/Outro/index.svelte';





</script>



<Hero />
<!-- fix: `on:enterViewport` to update UI -->

<Intro />

<Section bg="bg-linen">
	<!-- learn: this is a paginator: `DECIDI DI PARTIRE Proposte di viaggio` -->
	<aside class="highlight db black-70 f5 f4-ns f3-m f3-l pv5 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">

		<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">decidi di partire</small>
			<span class="fraunces">Proposte</span><span class="fraunces-i">&nbsp;di viaggio</span>
		</h4>

		<div class="w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">

			{#each posts as { src, event, date, duration, country, location, pp, participants, slug }, i}
				<a href="{slug}" class="w-100 w-100-ns w-30-m w5-l link">
					<figure class="ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph2-l pb4 pt5 cover shadow-5-hover transition-bs overflow-hidden"
					style='background-position: 50% 0; background-image: linear-gradient( rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.50) 100%), url({JSON.stringify(src.url)})'
					title={location}>
					<!-- learn: take care of escaped [Object object] strings: stackoverflow.com/questions/25721164/how-to-fix-an-escaped-json-string-javascript#25721227 -->

						<figurecap class="white ts1-dark-gray flex flex-column lh-solid">
							<time datetime={date} class="f5 f6-ns f7-m f6-l fw7 ttu tracked flex-auto">{@html duration}</time>
							<!--
							{#if country.length >= truncate }
								{@html country.substring(0, truncate)}
							{:else }
								{@html country}
							{/if} -->

							<h5 class="ts fraunces mv0 f-subheadline f1-ns f2-m f1-l fw5 h5 flex-auto">
								{@html country.length > truncate ? country.substring(0, truncate) + '&hellip;' : country }
							</h5>
							<p class="mv0 pb4 f5 f6-ns f7-m f6-l fw7 ttu tracked h2 flex-auto">{@html event}</p>
							<p class="h3 mv0 pb0 f4 f5-ns f6-m f5-l fw4 flex-auto">{@html location}</p>
							<div class="flex items-center h4">
								<h6 class="ts mv0 fraunces fw4 f1 f1-ns f2-m f1-l"><small>€&nbsp;</small><span class="pt0 fw5">{@html pp}</span><small class="pt0 f6 f5-l system">&nbsp;p.p</small>
								</h6>
							</div>
						</figurecap>
						<div class="link pointer br-pill ba bw2 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-70 w-100-ns w-90-m w-90-l ts1-dark-gray f5 f5-ns f7-m f5-l" title="{event}">Scopri il viaggio</div>
					</figure>
				</a>

			<!-- fix: {participants} -->
			{/each}
			</div>

	</aside>
</Section>

<Outro />

<style>
/*

*/
</style>