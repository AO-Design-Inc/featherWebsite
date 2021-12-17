<script>
  let socialArray = [
    {
      name: "Twitter",
      url: "https://twitter.com/Feather_Systems",
      icon: "./assets/twitter.svg",
    },
    {
      name: "Discord",
      url: "https://discord.gg/8KVKzg8HEk",
      icon: "./assets/discord.svg",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/r/FeatherSystems/",
      icon: "./assets/reddit.svg",
    },
  ];
</script>

<div id="f_main" class="d">
  <div class="spacer-gutter">
    <div class="top-container">
      <img
        src="./assets/footer-logo.svg"
        alt="Feather Logo Long"
        class="logo"
      />
      <div class="spacer one footer" />
      <button class="cta">
        <div class="text">Join Our Mailing List</div>
        <img src="./assets/footer-mail.svg" alt="Mailing List" class="image" />
      </button>
    </div>
    <div class="spacer two footer" />
    <div class="divider" />
    <div class="spacer two footer" />
    <div class="bottom-container">
      <div class="copyright">© 2021 Feather Systems. All Rights Reserved</div>
      <div class="spacer three footer" />
      <div class="social-container">
        {#each socialArray as { name, url, icon }, i}
          <a href={url} class={i}>
            <img src={icon} class="social image {name}" alt={name} />
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./vars";
  #f_main {
    width: 100%;
    height: calc(310 / 5) * $g;
    min-height: 310px;

    background: linear-gradient(
      226.51deg,
      #1d2030 0%,
      rgba(29, 32, 48, 0.25) 81.51%
    );
    border-radius: 10px 10px 0px 0px;

    .spacer-gutter {
      padding: get-vw(80px) get-vw(130px) get-vw(70px) get-vw(130px);
    }
    .top-container {
      display: flex;
      width: 100%;
      align-content: center;

      .logo {
        aspect-ratio: 19/ 3;
        width: get-vw(190px);
        @media screen and (max-width: $bp) {
          width: max(get-vw(190px), 190px);
        }
      }
      .spacer.one.footer {
        width: 64%;
      }
      .cta {
        aspect-ratio: 235/ 40;
        width: get-vw(235px);

        font-size: get-vw(16px);

        color: hsla(355, 52%, 30%, 1);
        font-weight: 400;
        box-shadow: none;
        border: none;
        background: hsla(0, 100%, 85%, 1);
        border-radius: get-vw(10px);

        .text {
          display: block;
        }
        .image {
          display: none;
        }
        @media screen and (max-width: $bp) {
          //   aspect-ratio: 1/1;
          height: 45px;

          display: grid;
          place-items: center;

          .text {
            display: none;
          }
          .image {
            display: block;
          }
        }
      }
    }
    .spacer.two.footer {
      width: 100%;
      height: get-vw(40px);
      @media screen and (max-width: $bp) {
        height: max(get-vw(40px), 40px);
      }
    }
    .divider {
      min-width: 100%;
      min-height: 1px;
      background: #ffffff;
    }
    .spacer.three.footer {
      width: 55%;
      @media screen and (max-width: $bp) {
        display: none;
      }
    }
    .bottom-container {
      display: flex;
      width: 100%;
      align-items: center;
      .copyright {
        width: 36%;
        @media screen and (max-width: $bp) {
          display: none;
        }
      }
      .social-container {
        @media screen and (max-width: $bp) {
          width: 62%;
        }
        .social.image {
          aspect-ratio: 1 / 1;
          height: get-vw(30px);
          @media screen and (max-width: $bp) {
            height: max(get-vw(30px),30px);
          }
        }
      }
    }
  }
</style>
