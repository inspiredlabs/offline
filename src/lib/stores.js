// most basic example: svelte.dev/tutorial/writable-stores
import {writable} from 'svelte/store'; // readable, derived
import { browser } from '$app/env'; // LEARN: `browser` is required in SvelteKit youtube.com/watch?v=gZS-tGD2_VY

//const defaultLangToken = undefined;
const userPrefLang = browser ? window.localStorage.getItem('defaultLangToken') ?? undefined : undefined;

export const prefLang = writable(userPrefLang);

prefLang.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('defaultLangToken', value);
	}
});

export const currentPageStore = writable(0); // `set` and `update` methods in addition to `subscribe`

export const pageStore = writable(''); // `read-only` - from: svelte.dev/tutorial/readable-stores



// Pages:
export const pageItems = [
	{ title: "Index", component: "Index", bg: "bg-red" },
	{ title: "Partenze", component: "partenze", bg: "bg-gold" },
	{ title: "Viaggi", component: "Viaggi", bg: "bg-light-green" },
	{ title: "Chi&nbsp;Siamo", component: "chisiamo", bg: "bg-light-blue" },
	{ title: "News", component: "news", bg: "bg-light-yellow" },
]; // syntax from: svelte.dev/tutorial/each-blocks


/*****
when you click, that is writing to pageStore
currentPageStore is read-only
*/
