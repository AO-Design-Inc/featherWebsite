<script>
  import Form from "./form.svelte";
</script>

<main class="d">
  <a href="#/">
    <div id="logo">
      <img src="./assets/logo.svg" alt="Feather Logo" />
    </div>
  </a>
  <div class=" spacer one" />
  <div class="link" />
  <div class="link" />
  <!-- <a href="#/blog" class="link">Blog</a> -->
  <div class="form-container">
    <Form />
  </div>
  <div class="spacer two" />
  <!-- <button> Get Feather </button> -->
</main>

<style lang="scss">
  @import "./vars";
  $bpDash: 850px;
  .form-container {
    min-width: 350px;
    width: get-vw(450px);
    @media screen and (min-width: 1240px) {
      width: min(get-vw(450px), 450px);
    }
  }
  main {
    aspect-ratio: 288 / 17;
    display: flex;
    align-items: center;
    max-width: 100%;
    min-height: 85px;
    position: relative;
    @media screen and (min-width: 1240px) {
      max-width: 1240px;
      padding: 0px;
      margin: 0px auto;
    }
  }
  #logo img {
    /* width: calc(10 * var(--g)); */
    /* height: calc(10 * var(--g)); */
    aspect-ratio: 1 / 1;
    width: get-vw(50px);
    min-width: 50px;
    display: grid;
    place-items: center;
    @media screen and (min-width: 1240px) {
      width: min(get-vw(50px), 50px);
    }
  }
  .link {
    width: 24.6 * $g;
    text-align: center;
    font-size: max(get-vw(16px), 16px);
    @media screen and (min-width: 1240px) {
      font-size: min(get-vw(16px), 16px);
    }
  }
  @media (max-width: $bpDash) {
    .link {
      opacity: 0;
    }
  }
  .spacer.one {
    width: 155 * $g;
  }
  .spacer.two {
    width: 3 * $g;
  }
</style>
