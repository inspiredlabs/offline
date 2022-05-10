import path from 'path';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// more on preprocessors: https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),

		vite: {
      resolve: {
        alias: {
					// from: stackoverflow.com/questions/71481056/sveltekit-how-to-refer-to-the-routes-folder-from-components-and-endpoints-via
          //$components: path.resolve('./src/lib/components'),
					$src: path.resolve('./src/'),
          $lib: path.resolve('./src/lib'),
					$routes: path.resolve('./src/routes'),
					$images: path.resolve('./static/images/'),
					//$baseUrl: path.resolve('https://offline-phi.vercel.app/')
					// VITE glob image import: stackoverflow.com/questions/68060723/glob-import-of-image-urls-in-sveltekit
					// sveltekit base url vite:
          //$stores: path.resolve('./src/stores'),
        },
      },
    },

	}
};

export default config;
