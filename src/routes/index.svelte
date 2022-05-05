<script context="module">
/******** GraphCMS POSTS **********/
export const prerender = true;
export const load = async ({fetch}) => {
	const response = await fetch('/posts.json');
	if (response.ok) {
		const { posts } = await response.json()
		return {
			props: { posts },
		}
	}
}
</script>

<script>
  // fix: Tachyons with `let title = 'GraphCMS';`
  export let posts = [];
	import { pageStore, pageItems, currentPageStore, prefLang } from '$lib/stores.js';
	import { goto } from '$app/navigation'; // learn: kit.svelte.dev/docs/modules#$app-navigation-goto, because other methods didn't work: github.com/sveltejs/svelte/issues/1241

	import Search from '$lib/Search.svelte';
	import Fraunces from '$lib/Fraunces.svelte';
	import Section from '$lib/Section.svelte';
	import Page from '$lib/Page.svelte';
	import Hero from '$lib/Hero.svelte';
	import WarningStripes from '$lib/WarningStripes.svelte';
	//import Banner75 from './Banner-vh-75.svelte'// <Banner75 />
	import viewport from '$lib/useViewportAction';
	function min(title) {
		return title.replace(/\s/g, '-');
	}
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

<!-- Cheeky way to pass :global(.style)  -->
<Fraunces />

{#each pageItems as item, i}
<Page
	id={`${item.title.toLowerCase().replace(/\s/g, '-')}`}
	bg={`${item.bg.toLowerCase().replace(/\s/g, '-')}`}>

	{#if i === 0}
		<Hero />
		<WarningStripes />
		<section
		class="h5 w-100 flex justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
			<!-- on:enterViewport={() => alert('Ciao') } -->
			<hr use:viewport
			on:enterViewport={() => goto(`#${item.title.toLowerCase().replace(/\s/g, '-')}`) }
			on:enterViewport={() => $pageStore = `${item.title.toLowerCase().replace(/\s/g, '-')}` } />
			<div class="outline w-50 pa3">
				<header id="young-guns"><h1>Young Guns</h1></header>
				<p>//// Young Guns ////</p>
			</div>
			<div class="outline w-50 pa3">
				<header id="one-on-one"><h1>1-on-1</h1></header>
				<p>//// 1-on-1 ////</p>
			</div>
		</section>

    <Section>
      <!-- learn: the replacer function is a whitelist: stackoverflow.com/questions/17537571/second-argument-in-json-stringify-in-javascript#17537621 && Steve Griffith: youtube.com/watch?v=0k4NwimfszA -->
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </Section>
	{:else }

	<section
		class="h5 w-100 flex justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
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
<div class="w-100 flex items-center justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns
measure-m measure-wide-l mr-auto ml-auto"><div class="w-40 w-50-ns w-50-m w-20-l h3">
<!-- bg-light-blue -->
	<h1 class="fw6 f4 f3-ns f3-m f3-l mv0 gold">
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
<div class="w-100 flex justify-between fw6 f4 f3-ns f3-m f3-l lh-copy measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
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
	/*
`.backdrop-blur`, is NOT integrated into Tachyonshower.
*/
.backdrop-blur { backdrop-filter: blur(8px) }
</style>