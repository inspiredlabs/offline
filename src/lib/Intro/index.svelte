<script>
	import Section from '$lib/Section.svelte';
</script>

<Section bg="bg-solitaire">
	<article class="ph2 ph0-ns ph0-m ph0-l">

	<!-- learn: Slot nesting, do you need clear-fix/`cf`? -->
		<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">Cile</small>
			<span class="fraunces">Patagonia e Deserto&nbsp;Atacama</span><br>
		</h4>
		<div class="fl w-100 w-50-m w-50-l lh-copy measure ">
			<p class="pr4 fw5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna&nbsp;aliqua.</p>
		</div>
		<div class="fl w-100 w-50-m w-50-l lh-copy measure">
			<p class="">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat.
<br><br>
Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id
est laborum.</p>
		</div>

		<!-- `Trip Info` component: -->

		<h5 class="f3 f2-ns f2-m f2-l fw5"><span class="fraunces">Informazioni</span><span class="fraunces-i">&nbsp;di viaggio</span></h5>

		<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">clima</small>
			<hr class="inherit b--golden-brown"/>
			<p class="pr4">
			Nell'inverno australe (da Giugno a
Settembre) temperature molto
fredde di notte e tiepide di giorno
Nell'estate australe (da Novembre
a Febbraio) temperature tiepide
sull'altopiano e calde sul livello del
mare, con rischio di annuvolamenti
ma piogge rarissime.<br><br>
Isola di Pasqua: clima gradevole
durante tutto l'anno.<br><br>
Patagonia: temperature
fresche-fredde nei mesi dell'estate
australe.
			</p>
	</div>
		<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">documentazione</small>
			<hr class="inherit b--golden-brown"/>
			<p class="pr4">Passaporto con validità di almeno
6 mesi dalla data di partenza.</p>
		</div>
		<div class="fl w-100 w-third-m w-third-l ph0 f6 lh-copy measure">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">disp. sanitarie</small>
			<hr class="inherit b--golden-brown"/>
			<p class="pr4">Non è richiesta alcuna vaccinazione.</p>
		</div>

	</article>
</Section>