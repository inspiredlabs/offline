<script context="module">
	export const prerender = true;
</script>



<script>
	import { currentPageStore, defaultLangToken } from '$lib/stores.js';

	import Page from '$lib/Page.svelte';
	//import Banner75 from './Banner-vh-75.svelte'// <Banner75 />

	function handleKeydown() {
		alert('Ciao man'); // <svelte:window on:keydown={handleKeydown}/>
	}
</script>



<main class="charcoal flex flex-auto nw-100 vh-100 x-mandatory w-100 overflow-x-auto" tabindex="-1">
		<!-- Three event use-case: `flex items-center x-mandatory overflow-x-auto` for touch, mouse and keyboard without different motion enhancement. -->
		<div id="membership" class="bg-gold nw-100 vh-100 snap-center flex items-center">

			<!-- <Banner75 /> -->
			<section class="w-100 flex items-center justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
				<div class="outline w-50 pa3">
					<header id="young-guns"><h1>Young Guns</h1></header>
					<p>//// Young Guns ////</p>
				</div>
				<div class="outline w-50 pa3">
					<header id="one-on-one"><h1>1-on-1</h1></header>
					<p>//// 1-on-1 ////</p>
				</div>
			</section>
		</div>

		<div id="lines" class="bg-light-green nw-100 vh-100 snap-center flex items-center">//// Lines ////</div>
		<div id="tutorials" class="bg-light-blue nw-100 vh-100 snap-center flex items-center">//// Tuts ////</div>
		<div id="shop" class="bg-light-yellow nw-100 vh-100 snap-center flex items-center">//// SHOP ////</div>




	<!-- disable-scrolling -->
		<nav class="bg-black-60 backdrop-blur fixed z-9999 w-100
	top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex debug">
	<!-- bg-light-blue -->
		<div class="w-100 flex items-center justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns
		measure-m measure-wide-l mr-auto ml-auto"><div class="w-40 w-50-ns w-50-m w-20-l pv3 h3">
	<!-- bg-light-blue -->
			<h1 class="fw6 f4 f3-ns f3-m f3-l mv0 gold">
			<span>{$currentPageStore}</span>•<span>{$defaultLangToken}</span>
			<a href="#membership" class="link w-third hover-near-white pointer light-gray ts1-dark-gray fw8 ml-auto mr-auto pv3 h3 transition relative hover-ltr o-80" title="GalloBikePark">GBP
				<!-- Gallo&thinsp;Bike&thinsp;Park -->
			</a>
			</h1>
	</div>

			<!-- ONLY: large & landscape -->
			<div class="w-50-l justify-between dn landscape-flex-l tc">
			<!-- bg-gold  -->
				<a href="#lines" class="link w-third hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-80" title="Lines">Lines</a>
				<a href="#tutorials" class="link w-third hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-80" title="Tutorials">Tutorials</a>
				<a href="#shop" class="link w-third hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-80" title="Shop">Shop</a>
			</div>

			<div class="w-60 w-50-ns w-50-m w-30-l flex flex-row justify-end tr">
	<!-- bg-light-blue -->
				<a href="#it" class="truncate link hover-near-white pointer light-gray ts1-dark-gray pv3 h3 o-80" title="Italiano">🇮🇹&thinsp;Italiano&emsp;</a>
				<a href="#en" class="truncate link hover-near-white pointer light-gray ts1-dark-gray fw8 pv3 h3 o-80" title="English">🇬🇧&thinsp;English&thinsp;</a>
			</div>

		</div>
	</nav>

	<!-- EXCEPT large & landscape -->
	<nav class="bg-black-60 backdrop-blur
							fixed z-9999 w-100
	bottom-0 portrait-bottom-0-ns portrait-bottom-0-m portrait-bottom-0-l
	landscape-dn-l flex
	tc debug">
	<!-- bg-red -->
		<div class="w-100 flex justify-between
		fw6 f4 f3-ns f3-m f3-l lh-copy measure measure-ns measure-m measure-wide-l mr-auto ml-auto">
		<!-- pa2 pa4-ns pa2-m pa0-l -->
			<a href="#lines" class="link w-third hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-80" title="Lines">Lines</a>
			<a href="#tutorials" class="link w-third hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-80" title="Tutorials">Tutorials</a>
			<a href="#shop" class="link w-third hover-near-white pointer light-gray ts1-dark-gray pv3 h3 transition relative hover-ltr o-80" title="Shop">Shop</a>
		</div>
	</nav>
</main>











<style>
.snap-center {
	scroll-snap-align: center;
}
.nw-100 {
	min-width: 100%;
}

.x-mandatory {
	-webkit-overflow-scrolling: touch;
	scroll-snap-type: x mandatory; /*  must be used with: `scroll-snap-align: center` */
}
.x-proximity {
	scroll-snap-type: x proximity; /*  must be used with: `scroll-snap-align: center` */
}

.touch-scroll {
	-webkit-overflow-scrolling: touch;
}


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