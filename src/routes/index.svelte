<script context="module" lang="ts">
	// PWA from: https://github.com/FunMiles/SveltekitPWA
	export const prerender = true;
</script>

<svelte:options immutable={true}/>

<script>
import {slidy} from '@slidy/core';

let items = [],
		width = '100%',
		gap = 0,
		index = 0,
		length = 3,
		scrollPos = 0,
		i = length,
		title = 'Slidecore';
</script>

<!-- Main navigation  -->
<nav class="bg-blue fixed z-1 w-100
top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l
flex tc debug">
  <div class="
	w-100 flex justify-between
  f5 f4-ns f3-m f3-l lh-copy
  pa2 measure
  pa4-ns measure-ns
  pa2-m measure-m
  pa0-l measure-wide-l mr-auto ml-auto">

    <div class="w-50 w-50-ns w-50-m w-20-l
    bg-light-blue pv3 h3 f5 f4-ns fs-m f5-l tl">i[{index}],{Math.trunc(scrollPos)}px</div>

    <!-- ONLY: large & landscape -->
    <div class="w-60-l bg-gold justify-between dn landscape-flex-l">
		{#if length > 0}
			{#each { length } as dot, i}
			<button style="width:calc(100% / {length})" class="w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60 bg-transparent" on:click={() => (index = i)} class:active={i === index}>{i}</button><!-- bg-gold -->
			{/each}
		{/if}
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
tc debug">
  <div class="w-100 flex justify-between
  f5 f4-ns f3-m f3-l lh-copy
  pa2 measure
  pa4-ns measure-ns
  pa2-m measure-m
  pa0-l measure-wide-l mr-auto ml-auto">

		{#if length > 0}
			{#each { length } as dot, i}
			<button style="width:calc(100% / {length})" class="w-20 pv3 h3 f5 f4-ns fs-m f5-l white o-60 bg-transparent" on:click={() => (index = i)} class:active={i === index}>{i}</button><!-- bg-gold -->
			{/each}
		{/if}

  </div>
</nav><!-- /Internal page navigation  -->



<div style="--gap: {gap}px; --width: {width}" tab-index="0">

	<ul
		use:slidy={{
		index,
		length,
		axis: 'x',
		align: 'middle',
		duration: 1600,
		intersecting: true,
		clamp: true,
		snap: true,
		gravity: 1.3,
		indexer: (x) => (index = x),
		scroller: (p) => (scrollPos = p)
	}}>



<li id='0'>
<section>
<div
style="max-width:100vw"
class="w-100 pv5">
<article class="pb6
f5 f4-ns f3-m f3-l lh-copy
pa2 measure
pa4-ns measure-ns
pa2-m measure-m
pa0-l measure-wide-l mr-auto ml-auto">
<h1 class="">{title}</h1>
<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalapeño cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>
<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p>
</article>
</div>
</section>

</li>

<li id='1'>
	<section>
	<div
	style="max-width:100vw"
	class="w-100 pv5">
	<article class="pb6
	f5 f4-ns f3-m f3-l lh-copy
	pa2 measure
	pa4-ns measure-ns
	pa2-m measure-m
	pa0-l measure-wide-l mr-auto ml-auto">
	<h1 class="">{title}</h1>
	<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalapeño cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>
	<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p>
	</article>
	</div>
	</section>

	</li>

	<li id='2'>
		<section>
		<div
		style="max-width:100vw"
		class="w-100 pv5">
		<article class="pb6
		f5 f4-ns f3-m f3-l lh-copy
		pa2 measure
		pa4-ns measure-ns
		pa2-m measure-m
		pa0-l measure-wide-l mr-auto ml-auto">
		<h1 class="">{title}</h1>
		<p>Hummus falafel bowl sriracha pecans miso turmeric glazed aubergine fig arugula cashew salad seeds walnut mushroom tart lemon sweet potato black bean burrito green pepper second course lemon red lentil soup spicy mangos guacamole overflowing mocha chocolate frosted gingerbread bites chai tea sweet potato mediterranean vegetables red amazon pepper grapefruit crunchy. One bowl chilies peaches ginger tofu shiitake mushrooms banana bread citrusy shallots fall roasted brussel sprouts chili peanut butter jalapeño cinnamon toast cilantro blackberries pumpkin main course hazelnut shiitake spring matcha pineapple salsa. Heat mint lemonade zest grenadillo double dark chocolate burritos blood orange smash apricot farro platter tasty tabasco pepper cookies plums Caribbean red habanero tempeh delightful blueberry scones. </p>
		<p>Lemon lime minty cherry bomb pepper roasted peanuts simmer pomegranate pinch of yum ginger lemongrass agave green tea maple orange tempeh alfalfa sprouts cherry bomb spiced peppermint blast parsley almond milk kung pao pepper pine nuts enchiladas asian pear. Lavender lemonade red lentil curry cilantro lime vinaigrette four-layer mint lime taco salsa hot naga viper cinnamon crispy chia seeds lemongrass green papaya salad balsamic vinaigrette leek green grapes sesame soba noodles salted hearts of palm crumbled lentils vine tomatoes Thai sun pepper entree. </p>
		</article>
		</div>
		</section>

		</li>
</ul>

</div>







<style>

ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: var(--gap);
		width: 100%;
		height: 100%;
		min-width: 0;

		/* DEBUG: "slidy/core" "sensitivity" */
		transform: translateY(0deg);
		backface-visibility: hidden;
	}

	ul li {

		/* DEBUG: "slidy/core" "sensitivity" */
		transform: translateY(0deg);
		backface-visibility: hidden;

		flex: 1 0 var(--width);
		width: var(--width);
		max-width: 100%;
		height: 100%;
		position: relative;
		background-image:
    linear-gradient(
      to top right,
      gainsboro,
			whitesmoke
    );
	}

	/* https://css-tricks.com/almanac/properties/s/scroll-behavior/ */
	section {
		pointer-events: fill;

		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;

		height: 100vh;
		overflow-y: scroll;
	}

	ul li:before {
		content: attr(id);
		position: absolute;
		background: rgba(255,255,255, 0.82);
		padding: 1rem;
		z-index: 1;
	}

	.active { opacity:1 }

/********** Slidecore ***********/

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
</style>
<svelte:head>
	<link rel='stylesheet' href='https://instantwebapp.com/css/tachyon.shower.css'>
</svelte:head>
<!-- <pre class="absolute fixed z-max top-0 debug">
	<nav>
		<button on:click={() => index--}>←</button>
		<button on:click={() => index++}>→</button>
	</nav>
</pre> -->