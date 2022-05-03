<style>
  aside {
    z-index: 999999;
		display:block;
		position:absolute;
		left:20px;
		top:20px;
		width:100px;
		text-align:center;
		padding:10px;
		background:forestgreen;
		color:white;
		cursor:grab;

    -webkit-touch-callout:none;
    -ms-touch-action:none; touch-action:none;
    -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
  }
</style>
<aside class="absolute z-max w5 pa2">Drag me!</aside>
<script>
  import { onMount } from 'svelte';

  let MyComponent;

  onMount(async () => {
      const module = await import('$lib/Component.svelte'); //InspectorGadget
      MyComponent = module.default;
  });
</script>

<svelte:component this={MyComponent} />