<script>

export let message;

message = 'Always wear a helmet';

</script>
<aside class="flex justify-center items-center no-select h2 stripes">
	<div class="mv0 mr-auto ml-auto w-25 h2 skew-45 overflow-x-hidden">
		<p class="absolute tc w-100 white lh-solid mv2 reverse-skew-45">{message}</p>
	</div>
</aside>

<style>
	/* - from: https://codepen.io/jianzhi/pen/dVEbZw */
	/* view-source:file:///Users/scottphillips/Downloads/gallobikepark/support/stripe-banner.html */


	:root {
	--stripe-1: goldenrod; /* #fb3 */
	--stripe-2: #383838;/* #58a */
	}

	.reverse-skew-45 {
		transform: skew(-45deg);
	}
	.skew-45 {
		transform: skew(45deg);
		background: var(--stripe-2);
	}

	.stripes {
	  width: 100%;
	  display: block;

	  /* //diagonals// */
	  background: linear-gradient(45deg,
	    var(--stripe-1) 25%, var(--stripe-2) 0, var(--stripe-2) 50%, var(--stripe-1) 0, var(--stripe-1) 75%, var(--stripe-2) 0);
	  background-size: 100px 100px;
	}

</style>