<script>

	let figures = [];

	// `await` Fetch data
	const fetchItems = async () => {
		return figures = [{
			"src": "https://www.viaggilevi.com/content/uploads/2022/01/lagune-altiplaniche-1.jpg",
			"event": "SPECIALE CAPODANNO",
			"date":"28 Dec",
			"duration":"12 giorni",
			"country": "Cile",
			"location": "Patagonia e Deserto di Atacama",
			"pp": "5.700",
			"participants": "10 to 16",
			"cta": "#"
		},
		{
			"src": "https://www.viaggilevi.com/content/uploads/2021/09/adobestock-177932056.jpg",
			"event": "Tour guidati",
			"date":"28 Dec",
			"duration":"9 days",
			"country": "Ungheria, Repubblica Slovacca",
			"location": "Unknown places of Middle Europe, Budapest to The Tatra Mountains",
			"pp": "2.400",
			"participants": "8 to 14",
			"cta": "#"
		},
		{
			"src": "https://i0.wp.com/boingboing.net/wp-content/uploads/2015/10/4.jpg?w=720&ssl=1",
			"event": "Virgin, SpaceX, Bezzos magic trip of a lifetime",
			"date":"28 Dec",
			"duration":"12 days",
			"country": "The Moon",
			"location": "Why is flying to the moon totally impractical? Now, it's not! Introducing: our magic carpet ride technology: You'll go far, far away.",
			"pp": "120.000",
			"participants": "32 to 48",
			"cta": "#"
		}]
	}

	import { onMount } from 'svelte';
	onMount(() => {
		fetchItems();
	});

	let truncate = 29; /* try `Slovacchia` */
</script>

<section class="cf db w-100 " style="background-color:#faf3eb">
	<article class="highlight db black-70 f5 f4-ns f3-m f3-l pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
		<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">decidi di partire</small>
			<span class="fraunces">Proposte</span><span class="fraunces-i">&nbsp;di viaggio</span>
		</h4>

<div class="w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">
{#each figures as figure}
		<a href="{figure.cta}" class="w-100 w-100-ns w-30-m w5-l link ">
			<figure class="ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 pt5 cover shadow-5-hover transition-bs overflow-hidden" style="background-position: 50% 0; background-image: linear-gradient( rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, var(--tint)) 100%), url({figure.src} )" title={figure.location}>
				<figurecap class="white ts1-dark-gray flex flex-column lh-solid">
					<time datetime="{figure.date}" class="f5 f6-ns f7-m f6-l fw7 ttu tracked flex-auto">{@html figure.duration}</time>
					<!--
					{#if figure.country.length >= truncate }
						{@html figure.country.substring(0, truncate)}
					{:else }
						{@html figure.country}
					{/if} -->
					<h5 class="ts fraunces mv0 f-subheadline f1-ns f2-m f1-l fw5 h5 flex-auto">
						{@html figure.country.length > truncate ? figure.country.substring(0, truncate) + '&hellip;' : figure.country }
					</h5>
					<p class="mv0 pb4 f5 f6-ns f7-m f6-l fw7 ttu tracked h2 flex-auto">{@html figure.event}</p>
					<p class="h3 mv0 pb0 f4 f5-ns f6-m f5-l fw4 flex-auto">{@html figure.location}</p>
					<div class="flex items-center h4">
						<h6 class="ts mv0 fraunces fw4 f1 f1-ns f2-m f1-l"><small>€&nbsp;</small><span class="pt0 fw5">{@html figure.pp}</span><small class="pt0 f6 f5-l system">&nbsp;p.p</small>
						</h6>
					</div>
				</figurecap>
				<div class="pointer br-pill ba bw2 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-70 w-100-ns w-90-m w-90-l ts1-dark-gray f5 f5-ns f7-m f5-l" href="{figure.cta}" title="{figure.event}">Scopri il viaggio</div>
			</figure>
		</a>
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
