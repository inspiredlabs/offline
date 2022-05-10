<script context="module">
import '$src/app.css'
</script>

<script>
	import Defs from '$lib/Defs.svelte';
	import Fraunces from '$lib/Fraunces.svelte';
	import ReloadPrompt from '$lib/ReloadPrompt/index.svelte';
</script>



<div
	class="nw-100 snap-center w-100 vh-100 bg-golden-brown">
	<div class="h-100 w-100 vh-100 snap-start always-stop overflow-x-scroll smooth-scroll">
		<slot></slot>
		<Defs />
		<ReloadPrompt />
	</div><!-- /Vertical wrapper -->
</div>

<style>

</style>

<Fraunces />