<script context="module" lang="ts">
	export const prerender = true;
</script>



<script>
	import '$lib/css/flickity.css';
	import '$lib/css/tachyon.shower.css';
	import Script from '$lib/Script.svelte';

	function onLoaded() {
		// vanilla JS
		const flickity = new Flickity('.carousel');
	}
	</script>

	<nav>
		<a href="#carousel-cell1">Cell 1</a>,
		<a href="#carousel-cell2">Cell 2</a>,
		<a href="#carousel-cell3">Cell 3</a>,
		<a href="#carousel-cell4">Cell 4</a>,
		<a href="#carousel-cell5">Cell 5</a>
	</nav>

	<!-- Flickity HTML init -->
	<ul class="carousel list ">
		<li class="carousel-cell" id="carousel-cell1"></li>
		<li class="carousel-cell" id="carousel-cell2"></li>
		<li class="carousel-cell" id="carousel-cell3"></li>
		<li class="carousel-cell" id="carousel-cell4"></li>
		<li class="carousel-cell" id="carousel-cell5"></li>
	</ul>


	<style>
	.list {
		list-style: none
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		overflow: hidden;
		padding: 0;
		font-family: sans-serif;
	}

	.carousel {
		background: #FAFAFA;
	}

	.carousel-cell {
		width: 66%;
		height: 200px;
		margin-right: 10px;
		background: #8C8;
		border-radius: 5px;
		counter-increment: carousel-cell;
	}

	/* cell number */
	.carousel-cell:before {
		display: block;
		text-align: center;
		content: counter(carousel-cell);
		line-height: 200px;
		font-size: 80px;
		color: white;
	}

	</style>
	<svelte:head>
		<Script src='$lib/js/flickity.pkgd.js' on:loaded='{onLoaded}' />
		<Script src='$lib/js/hash.js' on:loaded='{onLoaded}' />
	</svelte:head>

