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

<section
	on:mousedown={onMouseDown}
	style="left: {left}px; top: {top}px;"
	class="draggable absolute z-max w5 pa2"
>
<span>{$pageStore}</span>•<span>{$currentPageStore}</span>•<span>{$prefLang}</span>











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


</section>




<style>
	.draggable {
		user-select: none;
		cursor: move;
		background: yellow;
		position: absolute;
	}
</style>