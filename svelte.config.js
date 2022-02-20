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
          //$components: path.resolve('./src/lib/components'),
          $lib: path.resolve('./src/lib'),
          //$stores: path.resolve('./src/stores'),
        },
      },
    },

	}
};

export default config;
