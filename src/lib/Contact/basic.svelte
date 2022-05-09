<script>
import Section from '$lib/Section.svelte';
</script>

<Section bg="bg-solitare">
	<div class="highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto pv5">
		<section class="fl w-100 cf">

			<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
				<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l ttu mv0 pb2">trovaci</small>
				<hr class="inherit b--golden-brown"/>
					<ul class="list pl0 f5 f5-ns f3-m f2-l fraunces pr1 pr4-ns pr4-m pr1-l">
						<li class="truncate">
							<a href="https://google.it/maps/place/Via+Francesco+Londonio,+4,+20154+Milano" class="link inherit o-90 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 transition">Via Londonio 4<br>20154 Milano</a>
						</li>
				</ul>
			</div>

			<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
				<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l ttu mv0 pb2">chiamaci</small>
				<hr class="inherit b--golden-brown"/>
					<ul class="list pl0 f5 f5-ns f3-m f2-l fraunces pr1 pr4-ns pr4-m pr1-l">
						<li class="truncate">
							<a href="tel:+390234934528" class="link inherit o-90 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 transition">+39&nbsp;02&nbsp;34934528</a>
						</li>
				</ul>
			</div>

			<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
				<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l ttu mv0 pb2">scrivici</small>
				<hr class="inherit b--golden-brown"/>
					<ul class="list pl0 f5 f5-ns f3-m f2-l fraunces pr1 pr4-ns pr4-m pr1-l">
						<li class="truncate">
							<a href="mailto:info@viaggilevi.com" class="link inherit o-90 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 transition">info@viaggiLevi.com</a>
						</li>
				</ul>
			</div>
		</section>
	</div>
</Section>

<style>
/*
`.hover-b--transparent`, is NOT integrated into Tachyonshower.
*/
.hover-b--inherit {
  transition: all 0.4s ease 0s!important;
}
.hover-b--inherit:hover {
  border-color: inherit;
  /* usage: `bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 transition` */
}
</style>