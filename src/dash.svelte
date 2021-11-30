<main>
  <div id="logo">
    <img src="./assets/logo.svg" alt="Feather Logo" />
  </div>
  <div style="width: calc(155 * var(--g))" />
  <div class="link">About us</div>
  <div class="link">Blog</div>
  <div style="width: calc(3 * var(--g))" />
  <button> Get Feather </button>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    height: calc(15 * var(--g));
    position: relative;
  }
  #logo img {
    width: calc(10 * var(--g));
    height: calc(10 * var(--g));
    display: grid;
    place-items: center;
  }
  .link {
    width: calc(24.6 * var(--g));
    text-align: center;
  }
  button {
    color: #fffffb;
    margin: 0px;
    width: calc(36 * var(--g));
    height: calc(9 * var(--g));
    box-shadow: none;
    border: none;
    background: #fb7680;
    border-radius: calc(2 * var(--g));
  }
</style>
