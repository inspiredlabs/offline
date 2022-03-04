export async function get() {

  // There might be another way to achieve what you want: stackoverflow.com/questions/69939125/sveltekit-relative-anchor-tag-href-based-on-the-folder
  //alert('Ciao Man ✨'); // from: dev.to/danawoodman/how-to-redirect-in-sveltekit-endpoints-1im3
  // do it in `load` or `handle`: github.com/sveltejs/kit/issues/930#issuecomment-842414343

  return {
    headers: {
      Location: '/'
    },
    status: 301 // perm: thoughtco.com/301-vs-302-redirects-3468664
    // It works! ✨ - from: dev.to/danawoodman/how-to-redirect-in-sveltekit-endpoints-1im3
  }
}
