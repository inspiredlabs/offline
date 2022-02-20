<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:options immutable={true}/>

<script>
	import {slidy} from '@slidy/core'
	import pkg from '@slidy/core/package.json'


	let items = [],
			imagable = false,
			width = '100%',
			gap = 0,
			index = 0,
			length = 3,
			scrollPos = 0,
			i = length

	let page = Math.trunc((Math.random()*10))
</script>



<section style="--gap: {gap}px; --width: {width}" tab-index="0">

	<ul use:slidy={{
				index,
				length,
				axis: 'x',
				align: 'middle',
				duration: 375,
				clamp: false,
				snap: true,
				gravity: 1.2,
				indexer: (x) => (index = x),
				scroller: (p) => (scrollPos = p)
			}}>

		<li id='0' class:active={i === index}>ONE, one, 1... sfjsfbnjfnbjfsjfnjf</li>
		<li id='1' class:active={i === index}>TWO, two, 2... sfjsfbnjfnbjfsjfnjf</li>
		<li id='2' class:active={i === index}>Three, three, 3... sfjsfbnjfnbjfsjfnjf</li>

	</ul>

</section>

<nav id="dots">
	{#if length > 0}
	{#each { length } as dot, i}
		<button on:click={() => (index = i)} class:active={i === index}>{i}</button>
	{/each}
	{/if}
</nav>
<nav>
	<button on:click={() => index--}>←</button>
	<button on:click={() => index++}>→</button>
</nav>
<pre>index: [{index}] scrollPos: {Math.trunc(scrollPos)}px</pre>

<style>
	:global(body){
		padding:0
	}
	section {
		overflow: hidden;
		height: 300px;
		/* 		position: relative; */
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: var(--gap);
		width: 100%;
		height: 100%;
		min-width: 0;
		/* 		position: relative; */
	}
	ul li {
		flex: 1 0 var(--width);
		width: var(--width);
		max-width: 100%;
		height: 100%;
		position: relative;

		background-image:
    linear-gradient(
      to top right,
      gainsboro, whitesmoke
    );
	}
	ul li:before {
		content: attr(id);
		position: absolute;
		background: rgba(255,255,255, 0.82);
		padding: 1rem;
		z-index: 1;
	}
	ul li img {
		width: 100%;
		width: auto;
		height: 100%;
		display: flex;
		object-fit: cover;
		max-width: 100%;
		will-change: transform;
	}
	nav, label {
		display: flex;
		justify-content: start;
		margin: 1rem 0;
		flex-wrap: wrap;
		align-items: center;
	}
	.active {color: red;}
	input { margin: 0}
</style>