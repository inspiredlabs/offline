<script context="module">
/******** GraphCMS POSTS **********/
export const prerender = true;
export const load = async ({fetch}) => {
	const response = await fetch('viaggi.json');
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
//import Fraunces from '$lib/Fraunces.svelte'; // this should be in `__layout.svelte`
// import Section from '$lib/Section.svelte';
// import viewport from '$lib/useViewportAction';

let truncate = 29; /* try `Slovacchia` */

</script>

<section class="cf db w-100 " style="background-color:#faf3eb">
	<article class="highlight db black-70 f5 f4-ns f3-m f3-l pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
		<div class="w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">

		<!-- <h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">decidi di partire</small>
			<span class="fraunces">Proposte</span><span class="fraunces-i">&nbsp;di viaggio</span>
		</h4> -->



		{#each posts as { src, event, date, duration, country, location, pp, participants, slug }, i}
			<a href={slug} class="w-100 w-100-ns w-30-m w5-l link ">
				<figure class="ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 pt5 cover shadow-5-hover transition-bs overflow-hidden"
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
					<div class="pointer br-pill ba bw2 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-70 w-100-ns w-90-m w-90-l ts1-dark-gray f5 f5-ns f7-m f5-l" href={slug} title="{event}">Scopri il viaggio</div>
				</figure>
			</a>
			<!-- fix: {participants} -->
		{/each}
		</div>
	</article>
</section>


<style>
	/* `overflow-x-hidden` repaints often and `.transition` has poor performance implactions so treat them as a lazy handler. `.transition-bs` or `transition-bg`, are NOT yet integrated into Tachyonshower.
	*/

	/* https://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links */

	a:focus {
		outline: none;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8); /* Deeper than `.shadow-5-hover` */
	}

	a::-moz-focus-inner {
		border: 0;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8); /*Deeper than `.shadow-5-hover` */
	}



	.transition-bs {
		transition: box-shadow 0.4s ease 0s;
		-webkit-transition: box-shadow 0.4s ease 0s;
	}
	.transition-bg {
		transition: background 0.4s ease 0s;
		-webkit-transition: background 0.4s ease 0s;
	}

	:root{ --tint: 0.5; /* 1 is max */ }
	/* `.mh-100-vh { max-height: 100vh }` convention borrowed: .mw-100 { max-width: 100% } and `.100-vh { height: 100vh }` */

	/* Flexbox should be preferred over conditional-css: `.zed:nth-child(3n) { margin-right: 0 }`: css-tricks.com/almanac/selectors/n/nth-child/ */

	</style>