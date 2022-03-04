<script context="module">
export const prerender = true;

export const load = async ({fetch}) => {
	const response = await fetch('/posts.json');
	if (response.ok) {
		const { posts } = await response.json()
		return {
			props: { posts },
		}
	}
}
</script>



<script>
let title = 'GraphCMS';
export let posts = [];


// A lifecycle function that runs when the page mounts, and also whenever SvelteKit navigates to a new URL but stays on this component.:  https://kit.svelte.dev/docs/modules#$app-navigation-afternavigate
  // Learn: SSR forms: https://codechips.me/sveltekit-ssr-forms/
  //Learn: Cannot read property 'params' of SSR component: `import { path, query, fragment, pattern } from 'svelte-pathfinder';` // Append URL: `{ path, fragment }`: github.com/sveltetools/svelte-pathfinder
  // import { browser } from '$app/env'; // From: is that all I need? adamtuttle.codes/blog/2021/adding-3rd-party-script-tags-in-sveltekit/
  // import { onMount, createEventDispatcher, afterUpdate } from 'svelte';
  /* onMount(()=>{ ... }) */
	import { dragDurationStore, fragStore, currentSlideStore, defaultLangToken } from '$lib/stores.js';
  import Carousel from '$lib/BeyonkCarouselComponent.svelte'; //Learn: this in NOT `import Carousel from '@beyonk/svelte-carousel'`
  import { items } from '../routes/items.svelte';



  $: slidecore = {}


  /* usage: <!-- <svelte:window on:keydown={handleKeydown}/> --> */
  let key;
	let keyCode;

	function handleKeydown(e) {
    if (e.keyCode === 38 || e.keyCode === 39) {
      slidecore.right()//alert( 'right/up' )
    } else if (e.keyCode === 37 || e.keyCode === 40) {
      slidecore.left()// alert( 'down/left' )
    } else {
      return;
    }
  }



items.forEach(settle);
function settle(item, index, array) {
  if (currentSlideStore == index) {
    return $currentSlideStore = index, $fragStore = item.slug;
  }
  //alert(Object.keys(array)) // This `[object Object]` is 0,1,2
}

//function getPosY(e) { alert(e.clientY) }
</script>



<!-- Main navigation  -->
<nav class="bg-blue fixed z-1 w-100
top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l
flex tc">
<!-- debug -->
  <div class="w-100 flex justify-between
  f5 f4-ns f3-m f3-l lh-copy
  pa2 measure
  pa4-ns measure-ns
  pa2-m measure-m
  pa0-l measure-wide-l mr-auto ml-auto">

    <div class="w-50 w-50-ns w-50-m w-20-l
    bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tl">{$dragDurationStore}, {$fragStore}, {$currentSlideStore}, {$defaultLangToken}</div>

    <!-- ONLY: large & landscape -->
    <div class="w-60-l bg-gold justify-between dn landscape-flex-l">

        {#each items as item, i}
        <button
          class:active={ $currentSlideStore==i ? 'active' : '' }
          class="bn pointer glow bg-transparent w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60"
          style='width:calc(100% / {items.length})'
          on:click={ slidecore.go(i) }
          on:click={ () => {$fragStore = item.slug} }
          on:click={ () => {$currentSlideStore = item.id} }
        >{item.title}</button>
        {/each}

      <!--
			on:mouseleave={ e => $dragDurationStore = 200 }
			on:mouseenter={ e => $dragDurationStore = 0 }
      -->
      <!-- learn: `$stores` for `class:active={ myVar ? 'active' : '' }`
        on:click={() => slidecore.go(i, frag, () => myVar = item.id )}
        Conditional styling:
        - Selected: https://flaviocopes.com/svelte-dynamically-apply-css/
        - Conditional: https://progressivewebninja.com/a-guide-to-css-in-svelte-and-conditional-styling/
      -->
		</div>


    <div class="w-50 w-50-ns w-50-m w-20-l
    bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tr flex items-center justify-end">

			<div class="flex justify-between">
				<span>🇮🇹&thinsp;<span class='dib dib-ns dn-m dn-l'>It&emsp;</span></span>
				<span class='dn dn-ns dib-m dib-l'>Italiano&emsp;</span><span>🇬🇧&thinsp;<span class='dib dib-ns dn-m dn-l'>En</span></span>
				<span class='dn dn-ns dib-m dib-l'>English</span>
			</div>
		</div>
  </div>
</nav><!-- Main navigation  -->

<!-- Internal page navigation  -->
<!-- EXCEPT large & landscape -->
<nav class="bg-red fixed z-1 w-100
bottom-0 portrait-bottom-0-ns portrait-bottom-0-m portrait-bottom-0-l
landscape-dn-l flex
tc ">
  <div class="w-100 flex justify-between
  f5 f4-ns f3-m f3-l lh-copy
  pa0 measure
  pa0-ns measure-ns
  pa0-m measure-m
  pa0-l measure-wide-l mr-auto ml-auto
	">

  {#each items as item, i}
    <button
      class:active={ $currentSlideStore == i ? 'active' : '' }
      class="bn pointer glow bg-transparent w-20 pv3 h3 pv2-ns h2-ns h3-m h3-l f5 f4-ns fs-m f5-l white o-60 bg-transparent"
      style='width:calc(100% / {items.length})'
      on:click={ () => slidecore.go(i) }
      on:click={ () => { $fragStore = item.slug } }
      on:click={ () => { $currentSlideStore = item.id } }
    >{item.title}</button>
  {/each}

  </div>
</nav><!-- /Internal page navigation  -->
<!--
	on:click={ () => { $dragDurationStore = 0 }, slidecore.go(i) }
	on:mouseleave={ e => $dragDurationStore = 200 }
	on:mouseenter={ e => $dragDurationStore = 0 }
-->



<!-- Ben Winchester's interpretation : https://github.com/bmw2621/svelte-carousel -->
<!-- https://github.com/beyonk-adventures/svelte-carousel -->
<Carousel
	bind:this={slidecore}
	threshold={96}
	dots={false}
	perPage={1}
	easing={ 'ease' }
	autoplay={0}
  on:change={ e => {settle} }
  on:change={ e => $currentSlideStore = e.detail.currentSlide }
>
<!-- duration={ () => { $dragDurationStore } } -->


<!-- xon:change={ e => {getPosY}  } -->
<!-- on:change={ e => {debugger} } or `console.log(e.detail)`-->
<!-- easing={ 'cubic-bezier(0.25, 0.4, 0.55, 1.4)' } -->

{#each items as item, index}
	<div
  class="slide-content bg-pink w-100" >
	<!--
	on:mouseenter={ e => $dragDurationStore = 200 }
  on:mouseleave={ e => $dragDurationStore = 0 }
 -->

	{item.title}
  <svelte:component this={item.component} />

	<div class="pt5 w-100">
		<h1 class="">{title}</h1>
		<pre>{JSON.stringify(posts, null, 2)}</pre>
	</div>

	</div>
{/each}
<!-- on:mouseenter={ e => $dragDurationStore = 200 } -->
<!-- on:mouseleave={ e => $dragDurationStore = 0 } -->

</Carousel>



<style>
/* Quick prune: purifycss.online/ */
/* learn: THIS IS DONE IN __layout.svelte */
/* @import '$lib/Tachyonshower'; */
/* slightly more sophisticated colourschemes: https://codepen.io/inspiredlabs/pen/yLMppJL*/

@media all and (orientation:portrait) {

  @media screen and (min-width:30em) {
    .portrait-bottom-0-ns {
      bottom: 0;
    }
  }
  @media screen and (min-width:30em) and (max-width:60em) {
    .portrait-bottom-0-m {
      bottom: 0;
    }
  }
  @media screen and (min-width:60em) {
    .portrait-bottom-0-l {
      bottom: 0;
    }
  }

}


@media all and (orientation:landscape) {

  @media screen and (min-width:30em) {
  }

  @media screen and (min-width:30em) and (max-width:60em) {
  }

  @media screen and (min-width:60em) {
    .landscape-top-0-l {
      top: 0;
    }
    .landscape-dn-l {
      display: none;
    }
    .landscape-flex-l {
      display: flex;
    }
  }

}

.active {
  opacity: 0.8;
  background-color:rgba(0,0,0, 0.05)
}

/*overflow-x: scroll; */
.slide-content {
  width: 100%;
}

:global(body) {
  padding:0;
}

:global(.carousel.slides) {
  will-change:contents;
  /* width: 100vw; */
  /* height: 100vh; */
}

/* :global(img) {
		display: block;
		width: 100%;
	} */

/* :global(.control:hover) {
		width: 100%;
		height: 100%;
		color: cyan;
	} */




</style>
<!-- DEBUG "Element with a slot='...' attribute must be a child of a component or a descendant of a custom element" -->
<!-- <span class="control pointer" slot="left-control">&larr;</span> -->
<!-- <span class="control pointer" slot="right-control">&rarr;</span> -->
<svelte:window on:keydown={handleKeydown}/>