<!------------------------------------------------------------------------------
--  for additional, more detailled examples visit                             --
--  https://github.com/rozek/svelte-agnostic-draggable/blob/main/README.md    --
------------------------------------------------------------------------------->

<style>
  .draggable {
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

<script>
  import { draggable } from 'svelte-agnostic-draggable'

/**** map all touch events to mouse events ****/

  import mapTouchToMouseFor from 'svelte-touch-to-mouse'
  mapTouchToMouseFor('.draggable')

/**** Svelte Event Handling
function onDraggableInit ()    { console.log('Draggable was created') }
function onDragStart ()        { console.log('dragging started') }
function onDragMove ()         { console.log('dragging continues') }
function onDragStop ()         { console.log('dragging was stopped') }
function onDraggableDestroy () { console.log('Draggable was destroyed') }
****/
</script>

  <aside class="draggable absolute z-max w5 pa2" use:draggable={{
    containment:'parent', cursor:'grabbing'
  }}>Drag me!</aside>
<!-- `<div on:draggable:init={onDraggableInit} on:draggable:destroy={onDraggableDestroy}
    on:drag:start={onDragStart} on:drag:move={onDragMove} on:drag:stop={onDragStop} />` -->