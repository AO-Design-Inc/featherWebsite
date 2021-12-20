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
  $bpDash: 850px;
  main {
    aspect-ratio: 288 / 17;
    display: flex;
    align-items: center;
    max-width: 100%;
    min-height: 85px;
    position: relative;
  }
  #logo img {
    /* width: calc(10 * var(--g)); */
    /* height: calc(10 * var(--g)); */
    aspect-ratio: 1 / 1;
    width: get-vw(50px);
    min-width: 50px;
    display: grid;
    place-items: center;
  }
  .link {
    width: 24.6 * $g;
    text-align: center;
    font-size: max(get-vw(16px), 16px);
  }
  @media (max-width: $bpDash) {
    .link {
      opacity: 0;
    }
  }
  button {
    color: #fffffb;
    margin: 0px;
    width: 36 * $g;
    height: get-vw(45px);
    box-shadow: none;
    border: none;
    background: #fb7680;
    border-radius: 2 * $g;
    display: grid;
    place-items: center;

    min-height: 45px;
    font-size: max(get-vw(16px), 16px);

    @media screen and (max-width: $bpDash) {
      width: get-vw(180px*6);
    }
  }

  .spacer.one {
    width: 155 * $g;
  }
  .spacer.two {
    width: 3 * $g;
  }
</style>
