<script>
	import Rows from './Rows.svelte'
  export let id; // <Page .../>
	export let bg; // <Page .../>
</script>

<!-- on:enterViewport={() => alert(`${id}`)} -->
<div
	id={id}
	class="nw-100 snap-center w-100 vh-100 {bg}">
	<!-- flex-column flex flex-none justify-center items-center  -->
	<div class="h-100 w-100 vh-100 snap-start always-stop overflow-x-scroll smooth-scroll">
		<slot></slot>
		<!-- <Rows /> -->
	</div><!-- /Vertical wrapper -->
</div><!-- /Page id -->

<style>

.snap-center {
	scroll-snap-align: center;
}

.snap-start {
	scroll-snap-align: start;
}
.always-stop {
  scroll-snap-stop: always;
}

</style>