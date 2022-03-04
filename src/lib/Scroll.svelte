
<script>

const lorem = `<p> Salty creamy cauliflower alfredo sauce candy cane winter grapefruit seitan bruschetta asian pear cool cucumbers red curry tofu noodles Thai super chili instant pot pesto crispy iceberg lettuce heat mocha chocolate alfalfa sprouts dessert raspberries almond milk orange picnic salad lime second course. Fresh bananas crunchy cauliflower roasted brussel sprouts peach strawberry mango green pepper cherry comforting pumpkin spice latte avocado summertime tahini drizzle basil chai tea strawberry spinach salad edamame hummus springtime strawberry Thai basil curry thyme eating together.</p>
<p>Guacamole strawberry mango smoothie creamiest vitamin glow udon noodles figs peaches chilies peanut butter soup tempeh lavender lemonade kimchi avocado basil pesto cool lemon tahini dressing Southern Italian cremini mushrooms earl grey latte a delicious meal refreshing cucumber splash seeds burritos mediterranean vegetables. Basmati hummus main course mint lime taco salsa kale caesar salad cozy cinnamon oatmeal mediterranean paprika plums rich coconut cream crumbled lentils kung pao pepper with lemongrass cashew dill toasted hazelnuts almond milk chai latte crunchy seaweed fruit smash green papaya salad coconut sugar cilantro.</p>`

const loremArray = Array(5).fill(lorem);

</script>

<article style="overflow: scroll;" class="vh-100 w-100">
  {#each loremArray as paragraph}
    <section class=" measure-narrow mr-auto ml-auto">
      {@html paragraph}
    </section>
    <!-- <h1 class="z-max">Test</h1> -->
  {/each}
</article>