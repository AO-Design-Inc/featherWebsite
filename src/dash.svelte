<main class="d">
  <div id="logo">
    <img src="./assets/logo.svg" alt="Feather Logo" />
  </div>
  <div class=" spacer one" />
  <div class="link">About us</div>
  <div class="link">Blog</div>
  <div class="spacer two" />
  <button> Get Feather </button>
</main>

<style lang="scss">
  @import "./vars";
  main {
    display: flex;
    align-items: center;
    min-height: 75px;
    max-height: calc(75/5) * $g;
    position: relative;
  }
  #logo img {
    /* width: calc(10 * var(--g)); */
    /* height: calc(10 * var(--g)); */
    display: grid;
    place-items: center;
  }
  .link {
    width: 24.6 * $g;
    text-align: center;
  }
  @media (max-width: $bp) {
    .link {
      opacity: 0;
    }
  }
  button {
    color: #fffffb;
    margin: 0px;
    width: 36 * $g;
    height: 45px;
    box-shadow: none;
    border: none;
    background: #fb7680;
    border-radius: 2 * $g;
    display: grid;
    place-items: center;
    @media screen and (max-width: $bp) {
      width: 180px
    }
  }

  .spacer.one {
    width: 155 * $g
  }
  .spacer.two {
    width: 3 * $g
  }
</style>
