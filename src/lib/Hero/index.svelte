<script>
import ScrollIndicator from '$lib/ScrollIndicator.svelte';
let imagesBaseUrl = 'https://offline-phi.vercel.app/images/' // usage: `{imagesBaseUrl}`
</script>

<figure class="ma0 flex flex-column vh-75 w-100 cover" style="background-position:center 40%; background-image: url('{imagesBaseUrl}base64-planck.svg')" id="cile">
<!-- base64'd: onlinejpgtools.com/convert-jpg-to-base64 -->

<div class="vh-75 flex items-center white w-100 f5 f4-ns f3-m f3-l lh-copy measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto">
	<div class="flex flex-column w-100 pt5 pt6-l">
		<!--
			<h1 class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu tc mv0">Gallo Bike Park, Narni, Umbria</h1>
			<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid">Join the good times</h2>
		-->
		<h3 class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ts1-dark-gray ttu tc mv0">bagnato dall'acqua e bruciato dal fuoco</h3>
		<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l ts1-dark-gray fraunces tc ">Cile</h2>
	</div>
</div>


<figcaption class="flex flex-column-reverse white w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto landscape-vh-10-l"><!-- vh-05 landscape-vh-15-l || vh-20  -->

  <ScrollIndicator />
	<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ts1-dark-gray mv0">
		Laguna Lejía, San Pedro de Atacama, Chile
	</span>

</figcaption>
</figure>