import {writable, derived} from 'svelte/store';

export const dragDurationStore = writable(200);

export const fragStore = writable('/');
export const currentSlideStore = writable(0);

export const defaultLangToken = writable('en');
//export const prefLangToken = writable(defaultLangToken);

/*
x: x
export const s3 = derived([selectedIndexStore, fragStore], ([$selectedIndexStore, $fragStore]) => {
	console.log(`derived: ${$selectedIndexStore}, ${$fragStore}`); // RUN ANYWAY
	return $selectedIndexStore + $fragStore;
});
*/
