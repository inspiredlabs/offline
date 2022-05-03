<style>
  .draggable {
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

<script context="module">
  import { draggable } from 'svelte-agnostic-draggable';
  import mapTouchToMouseFor from 'svelte-touch-to-mouse';
</script>

<script>
  /**** map all touch events to mouse events ****/
  mapTouchToMouseFor('.draggable')

/**** Svelte Event Handling ****/
function onDraggableInit ()    { console.log('Draggable was created') }
function onDragStart ()        { console.log('dragging started') }
function onDragMove ()         { console.log('dragging continues') }
function onDragStop ()         { console.log('dragging was stopped') }
function onDraggableDestroy () { console.log('Draggable was destroyed') }

</script>

<aside class="draggable absolute z-max w5 pa2" on:draggable:init={onDraggableInit} on:draggable:destroy={onDraggableDestroy}
on:drag:start={onDragStart} on:drag:move={onDragMove} on:drag:stop={onDragStop}>Drag me!</aside>

<!-- `<div  />` -->