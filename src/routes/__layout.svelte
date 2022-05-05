<!--script context="module">
// get all pages and build a routes menu: youtube.com/watch?v=Y_NE2R3HuOU
export const modules = import.meta.glob('./**.svelte');

//console.log(modules);

let allMenu = [];

for(let path in modules) {
	let cleanPath = path.replace('.svelte', '').replace('./', '');
	allMenu.push({
		title:cleanPath.substring(cleanPath.lastIndexOf('/') + 1),
		link: cleanPath.includes('index')
		? cleanPath.replace('index', '') : ''
	});
}

console.log(allMenu);
</script-->
<script context="module">
	/******** GET ALL ROUTES AND PAGES **********/
	// learn: this must be `__layout.svelte: youtube.com/watch?v=Y_NE2R3HuOU&t=482s
	const modules = import.meta.glob("./**.svelte");

	let allMenu = [];

	for (let path in modules) {
		let cleanPath = path.replace(".svelte", "").replace("./", "/");
		allMenu.push({
			title: cleanPath.substring(cleanPath.indexOf("/") + 1),
			link: cleanPath.includes ("index")
				? cleanPath.replace("index", "")
				: cleanPath,
		});
	}

	export const load = async() => {
		const menu = await Promise.all(allMenu);
		return {
			props: {
				menu,
			}
		}
	}




// learn: FOUC: github.com/sveltejs/kit/issues/1530
import '../app.css' // <- just import your css: stackoverflow.com/questions/63637662/add-js-css-files-to-svelte-component
</script>

<script>
	/******** GET ALL ROUTES AND PAGES **********/
	export let menu;

	// learn: Just for the record, the key thing using SSR is that pages don't reload as long as routes shares the same __layout.svelte. –- from: stackoverflow.com/questions/71185085/sveltekit-hash-based-routing

	import Defs from '$lib/Defs.svelte';
	import ReloadPrompt from '$lib/ReloadPrompt/index.svelte';
	import InspectorGadget from '$lib/InspectorGadget/index.svelte';

	let main;

	function refocus() {
		setTimeout(() => { main.focus() }, 30)
	}

	/* usage: <!-- <svelte:window on:keydown={handleKeydown}/> --> */
	let key;
	let keyCode;

	function handleKeydown(e) {
		if (e.keyCode === 38 || e.keyCode === 39) {
			refocus(); //alert( 'right/up' )
		} else if (e.keyCode === 37 || e.keyCode === 40) {
			refocus(); //alert( 'down/left' )
		}
	}
	// learn: youtube.com/watch?v=kXq6tO5fqnU
</script>

<svelte:window on:popstate={ refocus } on:keydown={handleKeydown} />

<main class="charcoal flex flex-auto nw-100 vh-100 x-mandatory w-100 overflow-x-scroll touch-scroll" tabindex="-1" bind:this={main}>
	<slot></slot>
	<Defs />
	<ReloadPrompt />
	<InspectorGadget>
		<hr>
		<ul class="list pl0">
			{#each menu as item }
				<li>{item.link}</li>
			{/each}
		</ul>
	</InspectorGadget>
</main>

<style>
/* Quick prune: purifycss.online/ @import '$lib/Tachyonshower'; */

:global(.snap-center) {
	scroll-snap-align: center;
}
:global(.nw-100) {
	min-width: 100%;
}

:global(.x-mandatory) {
	-webkit-overflow-scrolling: touch;
	scroll-snap-type: x mandatory;
	/* must be used with: `scroll-snap-align: center` */
}

/* :global(.x-proximity) {
	scroll-snap-type: x proximity;
} */

:global(.touch-scroll) {
	-webkit-overflow-scrolling: touch;
}
</style>

<svelte:head>
	<!-- <link rel="stylesheet" type="text/css" href="../support/css/tachyon.shower.css"> -->

	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/apple-icon-180.png" />

	<meta
		name="description"
		content="Svelte-Kit PWA"
	/>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
	<link rel="apple-touch-icon" href="/pwa-192x192.png" />
	<!-- <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9"> -->
	<meta name="msapplication-TileColor" content="#00aba9" />
	<meta name="theme-color" content="#ffffff" />
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2048-2732.jpg"
		media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2732-2048.jpg"
		media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1668-2388.jpg"
		media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2388-1668.jpg"
		media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1536-2048.jpg"
		media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2048-1536.jpg"
		media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1668-2224.jpg"
		media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2224-1668.jpg"
		media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1620-2160.jpg"
		media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2160-1620.jpg"
		media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1284-2778.jpg"
		media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2778-1284.jpg"
		media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1170-2532.jpg"
		media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2532-1170.jpg"
		media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1125-2436.jpg"
		media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2436-1125.jpg"
		media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1242-2688.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2688-1242.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-828-1792.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1792-828.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1242-2208.jpg"
		media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2208-1242.jpg"
		media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-750-1334.jpg"
		media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1334-750.jpg"
		media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-640-1136.jpg"
		media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1136-640.jpg"
		media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
</svelte:head>
