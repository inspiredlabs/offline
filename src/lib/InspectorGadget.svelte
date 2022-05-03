<script context="module">
  import mapTouchToMouseFor from 'svelte-touch-to-mouse';
</script>

<script>
		//draggable debug compoent for layout variables
	import { pageStore, pageItems, currentPageStore, prefLang } from '$lib/stores.js';

	/*********** Drag Inspector *************/
	export let left = 0;
	export let top = 0;

	let moving = false; // $: console.log(moving);

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	function onMouseUp() {
		moving = false;
	}

	/****************** REFOCUS ******************/


	// bind element svelte and set the focus: youtube.com/watch?v=3_IbFiT0OaU
	import { onMount } from 'svelte';

	let inputRef; //usage: <input bind:this={inputRef} />

	onMount(() => {
		mapTouchToMouseFor('aside');
		// setTimeout(() => {
		// 	inputRef.focus();
		// }, 333);
	});

	function test(e) {
		// console.log(document.activeElement); // helpers
		// `tabindex="-1"` https://javascript.info/focus-blur
		console.log(e);
	}

	// function refocus() {
	// 	inputRef.focus();
	// }

	function refocus() {
		inputRef.value = $pageStore;
	}

</script>


<svelte:window
	on:mouseup={ onMouseUp }
	on:mousemove={ onMouseMove }
/>
<!-- on:popstate={ (e) => console.log(e) } } -->

<aside
	on:mousedown={onMouseDown}
	style="left: {left}px; top: {top}px;"
	class="absolute z-max w5 pa2"
>

<!-- <b>{import.meta.env.VITE_APP_TITLE}</b> -->
<ul>
	<li>{$pageStore}</li>
	<li>{$currentPageStore}</li>
	<li>{$prefLang}</li>
	<!-- <li>{$searchStore}</li> -->
</ul>

<slot></slot>
	<!-- <button on:click={ () => history.pop(history.state, '', 'test') }>click me</button>
	/*********** History API *************/
	import {
		afterNavigate,
		beforeNavigate,
		disableScrollHandling,
		goto,
		invalidate,
		prefetch,
		prefetchRoutes
	} from '$app/navigation';
	-->


</aside>




<style>
	aside {
		-webkit-touch-callout:none;
		-ms-touch-action:none; touch-action:none;
		user-select: none;
		cursor: move;
		background: rgba(255, 255, 0, 0.8);
		position: absolute;
	}
</style>