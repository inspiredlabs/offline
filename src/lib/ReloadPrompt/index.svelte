<script lang="ts">
import { dev, browser } from '$app/env';
import { Workbox, messageSW } from 'workbox-window';

let wb: Workbox | undefined;
let registration: ServiceWorkerRegistration | undefined;
let offlineReady = false;
let needRefresh = false;

function showSkipWaitingPrompt(event) {
  // \`event.wasWaitingBeforeRegister\` will be false if this is
  // the first time the updated service worker is waiting.
  // When \`event.wasWaitingBeforeRegister\` is true, a previously
  // updated service worker is still waiting.
  // You may want to customize the UI prompt accordingly.

  // Assumes your app has some sort of prompt UI element
  // that a user can either accept or reject.
  needRefresh = true;
}

function updateServiceWorker() {
  // Assuming the user accepted the update, set up a listener
  // that will reload the page as soon as the previously waiting
  // service worker has taken control.
  if (wb) {
    wb.addEventListener('controlling', (event) => {
      if (event.isUpdate)
        window.location.reload()
    });
  }

  if (registration && registration.waiting) {
    // Send a message to the waiting service worker,
    // instructing it to activate.
    // Note: for this to work, you have to add a message
    // listener in your service worker. See below.
    messageSW(registration.waiting, { type: 'SKIP_WAITING' }).then(() => {
    // console.log("NOTIFIED SKIP_WAITING");
    }).catch(e => {
      console.error("NOTIFIED SKIP_WAITING WITH ERROR", e);
    });
  }
}

function close() {
  offlineReady = false;
  needRefresh = false;
}

if (!dev && browser) {
  if ('serviceWorker' in navigator) {
    wb = new Workbox('/service-worker.js', { scope: '/' });
    wb.addEventListener('activated', (event) => {
      // this will only controls the offline request.
      // event.isUpdate will be true if another version of the service
      // worker was controlling the page when this version was registered.
      if (!event.isUpdate) {
        offlineReady = true;
      }
    });

    // Add an event listener to detect when the registered
    // service worker has installed but is waiting to activate.
    wb.addEventListener('waiting', showSkipWaitingPrompt);
    // eslint-disable-next-line
    // @ts-ignore
    wb.addEventListener('externalwaiting', showSkipWaitingPrompt);

    // register the service worker
    wb.register({ immediate: true }).then(r => registration = r).catch(e => {
      console.error("cannot register service worker", e);
    });
  } else {
    console.warn('Service workers are not supported.');
  }
}

$: toast = offlineReady || needRefresh;
</script>

{#if toast}
<section
class="z-max fixed pv5 right-1 bottom-1
w-80 w-80-ns w-80-m w-two-thirds-l
mr-auto ml-auto " role="alert">
  <article
	style="background-color:#ebdcc8"
	class="mw8 center
	br3 br3-ns br3-m br4-l shadow-5">
    <div class="dt-ns dt--fixed-ns w-100">
      <div class="pa3 pa4-ns pr0 dtc-ns v-mid
			w-100 w-100-ns w-50-m w-60-l">
        <div>
          <!-- <pre class="f5 fw4 golden-brown">viaggilevi.com</pre> -->
          <h2 class="f4 fw6 golden-brown mt0 mb0">I Viaggi Di Maurizio&nbsp;Levi</h2>
          {#if offlineReady}
            <p class="black-70 measure lh-copy mv0">Maurizio&nbsp;Levi is saved to your device</p>
            {:else}
            <!-- <pre class="f5 fw4 golden-brown">viaggilevi.com</pre> -->
            <p class="black-70 measure lh-copy mv0">More offers available now&hellip;</p>
          {/if}
        </div>
      </div>


      {#if needRefresh}
      <div class="pa2 dtc-ns v-mid
      w-100 w-100-ns w-30-m w-30-l">
        <!-- pa3 pa4-ns  -->
        <button class="input-reset pointer bn f4 tc db w-100
        transition hover-bg-white bg-near-white golden-brown
        br2 br2-ns br2-m br3-l
        pv2 pv2-ns pv4-m pv3-l
        "
        on:click={updateServiceWorker}
        >Ok, grazie!</button>
      </div>
      {/if}
      <div class="
      pa2 dtc-ns v-mid
      w-100 w-100-ns w-20-m w-10-l">
        <button on:click={close} class="input-reset pointer bn f4 tc db w-100
        transition hover-bg-white bg-near-white golden-brown
        br2 br2-ns br2-m br3-l
        pv2 pv2-ns pv4-m pv3-l
        o-70 hover-o-100">Later</button>
      </div>


    </div>
  </article>
</section>
{/if}














<style>
	/*
	`.golden-brown` breadcrumb color is NOT integrated into Tachyonshower.
	*/

	.golden-brown {
		color: hsl(36.6, 73.9%, 30%, 1.0);
	}
</style>


<!-- globe <strong>&#127757;&emsp;</strong> -->
<!-- iPhone <strong>&#128242;&nbsp;</strong> -->
<!-- emoji: w3schools.com/charsets/ref_emoji.asp -->
<!-- alt: codepen.io/maanehunden/pen/LNdepV?editors=1100 -->
<!-- most basic: codepen.io/vangato/pen/jOEEEmm -->

<!-- - from: tachyons.io/components/forms/newsletter-subscription/index.html -->
<!-- <section class="z-max fixed pv5 right-1 bottom-1 w-80 w-80-ns w-80-m w-two-thirds-l mr-auto ml-auto pa4-l">
	<form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
		<fieldset class="cf bn ma0 pa0">
			<legend class="pa0 f5 f4-ns mb3 black-80">I Viaggi Di Maurizio Levi</legend>
			<div class="cf">
				<label class="clip" for="email-address">Email Address</label>
				<input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address">
				<input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe">
			</div>
		</fieldset>
	</form>
</section> -->