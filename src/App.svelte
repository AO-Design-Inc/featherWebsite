<script>
  import Dash from "./dash.svelte";
  import Splash from "./splash.svelte";
</script>

<main>
  <Dash />
  <div style="height: calc(13 * var(--g));" />
  <Splash />
</main>

<style>
  :root {
    --g: 0.3472222222222222vw;
  }
  main {
    padding-left: calc(20 * var(--g));
    padding-right: calc(20 * var(--g));
    width: calc(248 * var(--g));
    height: calc(558 * var(--g));
    margin: 0px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
