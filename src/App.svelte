<script>
  import Dash from "./dash.svelte";
  import Splash from "./splash.svelte";
  import Tutorial from "./tutorial.svelte";
  import Features from "./features.svelte";
  import Footer from "./footer.svelte";
</script>

<main>
  <Dash />
  <div class="spacer one" />
  <Splash />
  <div class="spacer two" />
  <Tutorial />
  <div class="spacer two" />
  <Features />
  <div class="spacer two" />
</main>
<Footer />

<style lang="scss">
  @import "./vars";
  main {
    padding-left: calc(20 * $g);
    padding-right: calc(20 * $g);
    width: calc(248 * $g);
    // min-height: calc(558 * $g);
    height: auto;
    margin: 0px;
  }

  .spacer.one {
    min-height: 55px;
    height: get-vw(55px);
  }
  .spacer.two {
    min-height: 190px;
    height: get-vw(190px);
  }
</style>
