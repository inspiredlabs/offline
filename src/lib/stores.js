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

export const searchStore = writable(''); // consider: youtube.com/watch?v=6uNwXEyIGI4
export const pageStore = writable(''); // `read-only` - from: svelte.dev/tutorial/readable-stores



// Pages:
export const pageItems = [
	{ title: "Index", component: "Index", bg: "bg-solitaire" },
	{ title: "Partenze", component: "partenze", bg: "bg-gold" },
	{ title: "Viaggi", component: "Viaggi", bg: "bg-light-green" },
	{ title: "Chi&nbsp;Siamo", component: "chisiamo", bg: "bg-light-blue" },

	//{ title: "Membership", component: "Membership", bg: "bg-gold" },
	//{ title: "Lines", component: "Lines", bg: "bg-light-green" },
	//{ title: "Tutorials", component: "Tutorials", bg: "bg-light-blue" },
	//{ title: "Shop", component: "Shop", bg: "bg-light-yellow" },
];
// syntax from: svelte.dev/tutorial/each-blocks
// { title: "News", component: "news", bg: "bg-light-yellow" },


/*****
when you click, that is writing to pageStore
currentPageStore is read-only
*/
