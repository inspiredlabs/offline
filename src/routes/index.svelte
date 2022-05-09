<script context="module">
	/******** GraphCMS POSTS **********/
	export const prerender = true;
	export const load = async ({fetch}) => {
		const response = await fetch('./viaggi.json');
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

  // fix: Tachyons with `let title = 'GraphCMS';`
  import { pageStore, pageItems, currentPageStore, prefLang } from '$lib/stores.js';
	import { goto } from '$app/navigation'; // learn: kit.svelte.dev/docs/modules#$app-navigation-goto, because other methods didn't work: github.com/sveltejs/svelte/issues/1241

	import Section from '$lib/Section.svelte'; // fix: abstract away into `<Components />`

	import Hero from '$lib/Hero/index.svelte';
	import Search from '$lib/Search/index.svelte';
	import Subscribe from '$lib/Subscribe/index.svelte';
	import Montage from '$lib/Montage/index.svelte';
	import Partners from '$lib/Partners/index.svelte';
	import Social from '$lib/Social/index.svelte';
	import Contact from '$lib/Contact/index.svelte';
	import Terms from '$lib/Terms/index.svelte';

	import Page from '$lib/Page.svelte';

	//import Banner75 from './Banner-vh-75.svelte'// <Banner75 />
	import viewport from '$lib/useViewportAction';
	function min(title) {
		return title.replace(/\s/g, '-');
	}



/* note: working with Stefano:
	- Swagger API: klsgpapi.ramcube.it/swagger/index.html
	- you'll probably need credentials (then `storeEverything.js`): Protected routes: svelte.dev/repl/c81d8f3dff584065a82b2d3ea7cd4aee?version=3.46.4
 */
</script>
<!-- <script>
	pageItems.forEach(settle);
	function settle(item, index, array) {
		if (currentPageStore == index) {
			return $currentPageStore = index, $pageStore = `${item.title.toLowerCase().replace(/\s/g, '-')}`;
		}
		//alert(Object.keys(array)) // This `[object Object]` is 0,1,2
	}
</script> -->

{#each pageItems as item, i}
<Page
	id={`${item.title.toLowerCase().replace(/\s/g, '-')}`}
	bg={`${item.bg.toLowerCase().replace(/\s/g, '-')}`}
	>

	{#if i === 0}

		<!-- Learn: your JSON payload: `~routes/viaggi/cile-12-giorni.svelte`, req:
		import Section from '$lib/Section.svelte';
		import Hero from '$lib/Hero.svelte';

		 -->


		<Hero />

		<hr use:viewport
		on:enterViewport={() => goto(`#${item.title.toLowerCase().replace(/\s/g, '-')}`) }
		on:enterViewport={() => $pageStore = `${item.title.toLowerCase().replace(/\s/g, '-')}` } />

		<Section bg="bg-solitaire">
			<article class="ph2 ph0-ns ph0-m ph0-l">

			<!-- learn: Slot nesting, do you need clear-fix/`cf`? -->
				<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
					<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">Cile</small>
					<span class="fraunces">Patagonia e Deserto&nbsp;Atacama</span><br>
				</h4>
				<div class="fl w-100 w-50-m w-50-l lh-copy measure ">
					<p class="pr4 fw5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna&nbsp;aliqua.</p>
				</div>
				<div class="fl w-100 w-50-m w-50-l lh-copy measure">
					<p class="">Lorem ipsum dolor sit amet, consectetur
		adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna
		aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi
		ut aliquip ex ea commodo consequat.
		<br><br>
		Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu
		fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id
		est laborum.</p>
				</div>

				<!-- `Trip Info` component: -->

				<h5 class="f3 f2-ns f2-m f2-l fw5"><span class="fraunces">Informazioni</span><span class="fraunces-i">&nbsp;di viaggio</span></h5>

				<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
					<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">clima</small>
					<hr class="inherit b--golden-brown"/>
					<p class="pr4">
					Nell'inverno australe (da Giugno a
		Settembre) temperature molto
		fredde di notte e tiepide di giorno
		Nell'estate australe (da Novembre
		a Febbraio) temperature tiepide
		sull'altopiano e calde sul livello del
		mare, con rischio di annuvolamenti
		ma piogge rarissime.<br><br>
		Isola di Pasqua: clima gradevole
		durante tutto l'anno.<br><br>
		Patagonia: temperature
		fresche-fredde nei mesi dell'estate
		australe.
					</p>
			</div>
				<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure">
					<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">documentazione</small>
					<hr class="inherit b--golden-brown"/>
					<p class="pr4">Passaporto con validità di almeno
		6 mesi dalla data di partenza.</p>
				</div>
				<div class="fl w-100 w-third-m w-third-l ph0 f6 lh-copy measure">
					<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">disp. sanitarie</small>
					<hr class="inherit b--golden-brown"/>
					<p class="pr4">Non è richiesta alcuna vaccinazione.</p>
				</div>

			</article>
		</Section>

		<Section bg="bg-linen">
		<!-- learn: this is a paginator: `DECIDI DI PARTIRE Proposte di viaggio` -->
		<aside class="highlight db black-70 f5 f4-ns f3-m f3-l pv5 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">

			<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
				<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">decidi di partire</small>
				<span class="fraunces">Proposte</span><span class="fraunces-i">&nbsp;di viaggio</span>
			</h4>

			<div class="w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">

				{#each posts as { src, event, date, duration, country, location, pp, participants, slug }, i}
					<a href={slug} class="w-100 w-100-ns w-30-m w5-l link">
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
		</aside>
	</Section>


	<Montage />
	<Subscribe />
	<Partners />
	<Social />
	<Contact />
	<Terms />

		<!-- learn: the replacer function is a whitelist: stackoverflow.com/questions/17537571/second-argument-in-json-stringify-in-javascript#17537621 && Steve Griffith: youtube.com/watch?v=0k4NwimfszA -->
    <!-- <Section>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </Section> -->

		{:else }

	<section
		class="h5 w-100 flex justify-between f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
		<hr use:viewport
		on:enterViewport={() => goto(`#${item.title.toLowerCase().replace(/\s/g, '-')}`) }
		on:enterViewport={() => $pageStore = `${item.title.toLowerCase().replace(/\s/g, '-')}` } />



		//// <h2 class="ttu">{@html item.title}</h2> ////
	</section>
	{/if}

</Page>
{/each}

<!-- disable-scrolling -->
<nav class="bg-black-60 backdrop-blur fixed z-9999 w-100
top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex">
<!-- debug bg-light-blue -->
<div class="w-100 flex items-center justify-between f4 f3-ns f3-m f3-l measure measure-ns
measure-m measure-wide-l mr-auto ml-auto"><div class="w-40 w-50-ns w-50-m w-20-l h3">
<!-- bg-light-blue -->
	<h1 class="f4 f3-ns f3-m f3-l mv0 gold">
	{#each pageItems as item, i}
		{#if i === 0}
		<!-- o-100 -->
		<a
			style="background: transparent!important"
			href={`#${item.title.toLowerCase().replace(/\s/g, '-')}`}
			class:active={ $pageStore == `${item.title.toLowerCase().replace(/\s/g, '-')}` ? 'active' : '' }
			draggable="false"
			class="link w-third hover-near-white pointer light-gray ts1-dark-gray fw8 ml-auto mr-auto h3 transition relative" title={item.title}>
				<img draggable="false" class="w4" src="./images/logo.png" alt={item.title} />
			<!--  w4-ns w-100-m w-two-thirds-l -->
		</a>
		{/if}
	{/each}
	</h1>
</div>

	<!-- ONLY: large & landscape -->
	<div class="w-50-l justify-between dn landscape-flex-l tc">
	{#each pageItems as item, i}
		{#if i >= 1}
		<a
			href={`#${item.title.toLowerCase().replace(/\s/g, '-')}`}
			title={item.title}
			on:click={ () => {$pageStore = `${item.title.toLowerCase().replace(/\s/g, '-')}` } }
			on:click={ () => {$currentPageStore = i } }
			class:active={ $pageStore == `${item.title.toLowerCase().replace(/\s/g, '-')}` ? 'active' : '' }
			draggable="false"
			class="link hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-70"
			style='width:calc(100% / {pageItems.length -1})'>{@html item.title}</a>
		{/if}
	{/each}
	</div>

	<!-- based on: svelte.dev/repl/23e375f585584862908e83db520b4c5a?version=3.46.4 -->

	<!-- <div class="w-60 w-50-ns w-50-m w-30-l flex flex-row justify-end tr">
		<button on:click={() => ($prefLang === 'it' ? prefLang.set('en') : prefLang.set('it'))} class:b={$prefLang == 'it'} class="truncate hover-near-white pointer light-gray ts1-dark-gray pv3 h3 o-80 bn br0 bg-transparent" title="Italiano">🇮🇹&thinsp;Italiano&emsp;</button>
		<button on:click={() => ($prefLang === 'it' ? prefLang.set('en') : prefLang.set('it'))} class:b={$prefLang != 'it'} class="truncate hover-near-white pointer light-gray ts1-dark-gray pv3 h3 o-80 bn br0 bg-transparent" title="English">🇬🇧&thinsp;English&thinsp;</button>
	</div> -->
	<Search />


</div>
</nav>



<!-- EXCEPT large & landscape -->
<nav class="bg-black-60 backdrop-blur fixed z-9999 w-100 bottom-0 portrait-bottom-0-ns portrait-bottom-0-m portrait-bottom-0-l landscape-dn-l flex
tc">
<!-- debug bg-red -->
<div class="w-100 flex justify-between f4 f3-ns f3-m f3-l lh-copy measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
<!-- pa2 pa4-ns pa2-m pa0-l -->


	{#each pageItems as item, i}
		{#if i >= 1}
		<a
			href={`#${item.title.toLowerCase().replace(/\s/g, '-')}`}
			title={item.title}
			on:click={ () => {$pageStore = `${item.title.toLowerCase().replace(/\s/g, '-')}` } }
			on:click={ () => {$currentPageStore = i } }
			class:active={ $pageStore == `${item.title.toLowerCase().replace(/\s/g, '-')}` ? 'active' : '' }
			draggable="false"
			class="link hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-70"
			style='width:calc(100% / {pageItems.length -1})'>{@html item.title}</a>
		{/if}
	{/each}

</div>
</nav>












<style>


/****** $ BREAKOUT PAGINATOR COMPONENT $ *******/

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


/****** ^ BREAKOUT PAGINATOR COMPONENT ^ *******/
















/* svelte.dev/repl/253993c0325a4b1b8ff38b4c4ecd2285?version=3.24.1
	- from: stackoverflow.com/questions/63315507/svelte-how-can-i-set-the-focus-to-the-previous-next-element-in-the-list-item-wh#63324281
*/

.active {
	opacity: 0.9;
}
a:focus {
	opacity: 1;
}

/* .active a img {
	background: transparent!important;
} */

/* `.hover-ltr` can not be implemented into Tachyon Shower. It's not atomic. */
	/* :global(a) {
		text-decoration: none!important
	} */
.hover-ltr::after {
	position: absolute;
	left: 0;
	content: '';
	width: 100%;
	height: 8%;
	background: currentColor;
	bottom: 0;
	transform: scale(0, 1);
	transition: transform 0.4s;
	transform-origin: right top;
}
.hover-ltr:hover::after {
	transform-origin: left top;
	transform: scale(1, 1);
}
/*** simplify this ***/
.debug * {
	outline: 1px solid lime;
}
@media screen and (min-width: 30em) {
	.debug * {
		outline: 1px solid goldenrod;
	}
}
@media screen and (min-width: 30em) and (max-width: 60em) {
	.debug * {
		outline: 1px solid firebrick;
	}
}
@media screen and (min-width: 60em) {
	.debug * {
		outline: 1px solid cyan;
	}
}
/* amend tachyon.shower.css */
.truncate {
	display: -webkit-box;
	white-space: nowrap;
/* overflow: hidden; */
	text-overflow: ellipsis;
}
/**** snapper ****/
/* .y-mandatory {
	scroll-snap-type: y mandatory;
} */
/* .y-proximity {
	scroll-snap-type: y proximity;
} */
/* .snapper {
	padding-top:15vh;
	padding-bottom:0vh;
	scroll-margin: 20vh;
	scroll-snap-align: start;
	scroll-snap-stop: normal;
} */
:root {
	--time: 0.6s
}
/* https://css-tricks.com/almanac/properties/w/will-change/ */
/* .minno {
	will-change: transform, scroll-position;
	-moz-osx-font-smoothing: grayscale;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
	transition: -webkit-transform var(--time) ease;
	transition: all var(--time) ease;
	transition: all var(--time) ease,
	-webkit-transform var(--time) ease;
	background-clip: padding-box;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.minno:focus,
.minno:hover {
	-webkit-transform: perspective(1px) scale(1.008);
	transform: perspective(1px) scale(1.008);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
.minno:active {
	-webkit-transform: perspective(1px) scale(1.02);
	transform: perspective(1px) scale(1.02);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
*/
/* HTML: w-100 h-100 system */
@media all and (orientation:portrait) {
/*   .portrait-dn {
		display: none;
	} */
/*   .portrait-vh-50 {
	height: 50vh;
	} */
	@media screen and (min-width:30em) {
/*     .portrait-dn-ns {
			display: none;
		} */
/*     .portrait-vh-85-ns {
		height: 85vh;
		} */
		.portrait-bottom-0-ns {
		bottom: 0;
		}
	}
	@media screen and (min-width:30em) and (max-width:60em) {
/*     .portrait-dn-m {
			display: none;
		} */
/*     .portrait-vh-85-m {
		height: 85vh;
		} */
		.portrait-bottom-0-m {
		bottom: 0;
		}
	}
	@media screen and (min-width:60em) {
/*     .portrait-dn-l {
			display: none;
		} */
		.portrait-bottom-0-l {
		bottom: 0;
		}
	}
}
@media all and (orientation:landscape) {
/*   .landscape-db {
			display: block;
		} */
/*   .landscape-dn {
		display: none;
	} */
/*   .landscape-vh-66 {
	height: 66vh;
	} */
	@media screen and (min-width:30em) {
/*     .landscape-vh-85-ns {
		height: 85vh;
		} */
/*     .landscape-db-ns {
			display: block;
		} */
/*     .landscape-dn-ns {
			display: none;
		} */
	}
	@media screen and (min-width:30em) and (max-width:60em) {
/*     .landscape-vh-66-m {
		height: 66vh;
		} */
/*     .landscape-db-m {
			display: block;
		} */
/*     .landscape-dn-m {
			display: none;
		} */
	}
	@media screen and (min-width:60em) {
/*     .landscape-vh-85-l {
		height: 85vh;
		} */
		.landscape-top-0-l {
		top: 0;
		}
/*     .landscape-db-l {
			display: block;
		} */
		.landscape-dn-l {
			display: none;
		}
		.landscape-flex-l {
			display: flex;
		}
	}
}
:global(html, body) { padding: 0 }
/* Hide scrollbar for Chrome, Safari and Opera
main::-webkit-scrollbar {
	display: none;
}*/
/* Hide scrollbar for IE, Edge and Firefox
main {
	-ms-overflow-style: none;  /* IE and Edge
	scrollbar-width: none;  /* Firefox
}
*/

.backdrop-blur { backdrop-filter: blur(8px) } /* from: `offline`:  localhost:3000/viaggi */
</style>