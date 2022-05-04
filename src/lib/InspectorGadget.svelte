<script>
	//draggable debug compoent for layout variables
	import { pageStore, pageItems, currentPageStore, prefLang } from '$lib/stores.js';



	/*********** Drag Inspector *************/
	import { draggable } from '@neodrag/svelte'; // from: github.com/PuruVJ/neodrag/tree/main/packages/svelte#readme from: macos-web.app/

	/****************** REFOCUS ******************/

	// bind element svelte and set the focus: youtube.com/watch?v=3_IbFiT0OaU import { onMount } from 'svelte';

	let inputRef; //usage: <input bind:this={inputRef} />

	// onMount(() => {
	// 	setTimeout(() => {
	// 		mapTouchToMouseFor('aside');
	// 	}, 333);
	// });

	//function test(e) {
		// console.log(document.activeElement); // helpers
		// `tabindex="-1"` https://javascript.info/focus-blur
		//console.log(e);
	//}

	function refocus() {
		inputRef.value = $pageStore;
	}

</script>
;

<!-- on:popstate={ (e) => console.log(e) } } -->

<!-- debug -->
<aside use:draggable class="z-max w5 pa2 ">

<!-- <b>{import.meta.env.VITE_APP_TITLE}</b> -->
<dl class="list pl0">
	<dt>pageStore:</dt>
	<dd>{$pageStore}</dd>

	<dt>currentPageStore:</dt>
	<dd>{$currentPageStore}</dd>

	<!-- <dt>navLang:</dt> -->
	<!-- <dd>{$navLang}</dd> -->

	<dt>prefLang:</dt>
	<dd>{$prefLang}</dd>

	<!-- <dt>searchStore:</dt> -->
	<!-- <dd>{$searchStore}</dd> -->
</dl>


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