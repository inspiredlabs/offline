<!-- consider overlay: svelte.dev/repl/284b4a09eddc4b64b5bd6734712d30ee?version=3.22.2 -->

<script>
	import { searchStore, prefLang } from '$lib/stores.js';

	/*Need to bind this to the whole window? - from:
	svelte.dev/tutorial/svelte-window */
	function handleEscape(event) {
		if (event.key === 'Escape') {
			$searchStore = '';
		}
	}
</script>


<div class="flex justify-between">
	<!-- placeholder="Search" -->
	<input
	on:keydown={handleEscape}
	bind:value={$searchStore}
	aria-describedby="search"
	id="search"
	type="text"
	name="search"
	placeholder="Cerca"
	class="ml3 f4 white input-reset br0 bt-0 br-0 bl-0 bb bw2 b--black w-two-thirds w-75-l bg-transparent pv3 db pa3 pl1 transition"><!-- f5 f5-ns f6-m f4-l white ba bg-white-80 -->

	<button
	class="gray hover-white transition br0 bt-0 br-0 bl-0 bb bw2 b--black pointer f5 bg-transparent ph2"
	on:click={()=>{ $searchStore = '' } }
	>
		<span class="input-reset bn flex items-center">×</span>
	</button>

	<button
	class="white br0 ba bw2 w-third w-25-l bg-black b--black hover-bg-golden-brown transition f6 f5-ns pointer ph0 ">
<!-- pv3 db pa3  -->
		<svg viewbox="0 0 24 24" class="h2 no-select">
			<use xlink:href="#icon-search"></use>
		</svg>
	</button>
</div>

<style>
/* inherit `input::placeholder` is NOT integrated into Tachyonshower. */


/*
input:-webkit-autofill::first-line,
input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-webkit-autofill:hover {
	-webkit-appearance: none!important;
	background-color: transparent!important;
}

input:-webkit-autofill {
	filter:none;
	background-color: transparent!important;
} */
/* above needed for firefox! */


input::-webkit-input-placeholder {
   color: rgba(255, 255, 255, 0.8);
}

input:-moz-placeholder { /* Firefox 18- */
	color: rgba(255, 255, 255, 0.8);
}

input::-moz-placeholder {  /* Firefox 19+ */
	color: rgba(255, 255, 255, 0.8);
}

input:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.8);
}

input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
	color: rgba(255, 255, 255, 0.8);
	/* opacity: 1;  Firefox */
	/* color: inherit; */
}

/* Internet Explorer 10-11 */
:-ms-input-placeholder {
color: rgba(255, 255, 255, 0.8);
}

/* Microsoft Edge */
::-ms-input-placeholder {
color: rgba(255, 255, 255, 0.8);
}
/* color: inherit; */
</style>