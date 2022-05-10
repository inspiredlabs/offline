<!-- Webjeda `__layout.reset.svelte` example: youtube.com/watch?v=rW3-mR6Odvk&list=PLm_Qt4aKpfKjf77S8UD79Ockhwp_699Ms&index=2 -->
<!-- Webjeda alternative `__layout.reset.svelte` example: youtube.com/watch?v=_f4elR-cIpc&list=PLm_Qt4aKpfKjf77S8UD79Ockhwp_699Ms&index=4 -->
<!-- Webjeda multiple `__layout.svelte` example: youtube.com/watch?v=amuuoNIJJvA&list=PLm_Qt4aKpfKjf77S8UD79Ockhwp_699Ms&index=5 -->
<script context="module">
import '$src/app.css'
</script>

<script>
	import Defs from '$lib/Defs.svelte';
	import Fraunces from '$lib/Fraunces.svelte';
	import ReloadPrompt from '$lib/ReloadPrompt/index.svelte';
</script>



<div
	class="nw-100 snap-center w-100 vh-100 bg-cocoa">
	<div class="h-100 w-100 vh-100 snap-start always-stop overflow-x-scroll smooth-scroll">
		<slot></slot>
		<Defs />
		<ReloadPrompt />
	</div><!-- /Vertical wrapper -->
</div>

<style>

</style>

<Fraunces />