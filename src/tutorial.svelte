<script>
  import Form from "./form.svelte";
</script>

<div id="t_main" class="d">
  <div class="d tut one">
    <div class="spacer gutter">
      <div class="num-container">
        <div class="num one">1</div>
      </div>
      <div class="spacer one" />
      <div class="title one">Install</div>
      <div class="spacer two" />
      <img src="./assets/tut-illus-one.svg" alt="Download Feather" />
      <div class="spacer three" />
      <div class="des one">
        Download & install Feather on all the devices you want to connect.
      </div>
    </div>
    <Form />
  </div>
  <div class="spacer one" />
  <div class="tut two">
    <div class="spacer gutter">
      <div class="num-container">
        <div class="num two">2</div>
      </div>
      <div class="spacer one" />
      <div class="title one">Connect</div>
      <div class="spacer two" />
      <img src="./assets/tut-illus-two.svg" alt="Download Feather" />
      <div class="spacer three" />
      <div class="des two">
        Input the name or peer ID of the devices you want to connect to.
      </div>
    </div>
  </div>
  <div class="spacer one" />
  <div class="tut three">
    <div class="spacer gutter">
      <div class="num-container">
        <div class="num three">3</div>
      </div>
      <div class="spacer one" />
      <div class="title three">Play</div>
      <div class="spacer two" />
      <img src="./assets/tut-illus-three.svg" alt="Download Feather" />
      <div class="spacer three" />
      <div class="des three">
        Play & work seamlessly on all your devices with Feather!
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./vars";
  #t_main {
    width: 100%;
    height: get-vw(470px);

    display: flex;

    @media screen and (max-width: $bp) {
      display: block;
      height: auto;
    }
    .tut {
      position: relative;
      aspect-ratio: 38 / 47;
      background: cornflowerblue;
      height: 100%;
      width: get-vw(380px);

      border-radius: get-vw(10px);

      @media screen and (max-width: $bp) {
        height: auto;
        width: 100%;
      }
      .spacer.gutter {
        padding: get-vw(35px) get-vw(30px);
        @media screen and (max-width: $bp) {
          padding: 35px 30px;
        }
      }
      .spacer.one {
        width: 100%;
        height: get-vw(5px);
        @media screen and (max-width: $bp) {
          height: max(get-vw(5px), 5px);
        }
      }
      .num-container {
        width: 100%;
        height: max(get-vw(20px), 20px);
        display: grid;
        place-items: center;
        opacity: 0.6;
        .num {
          width: max(get-vw(20px), 20px);
          border: 1px solid #fffffb;
          height: 100%;
          font-size: max(get-vw(12px), 12px);
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0em;
          text-align: center;

          border-radius: 50%;
        }
      }
      .title {
        font-size: get-vw(37px);
        @media screen and (max-width: $bp) {
          font-size: max(get-vw(37px), 37px);
        }
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 0em;
        text-align: center;
        opacity: 0.8;
      }
      .spacer.two {
        width: 100%;
        height: get-vw(20px);
        @media screen and (max-width: $bp) {
          height: max(get-vw(20px), 20px);
        }
      }
      img {
        aspect-ratio: 32 / 15;
        width: 100%;
      }
      .spacer.three {
        width: 100%;
        height: get-vw(25px);
        @media screen and (max-width: $bp) {
          height: max(get-vw(25px), 25px);
        }
      }
      .des {
        opacity: 0.75;
        font-size: get-vw(20px);
        height: get-vw(80px);
        @media screen and (max-width: $bp) {
          font-size: get-vw(60px);
        }
        line-height: 150%;
      }
      button {
        position: absolute;
        bottom: 0px;
        left: 0px;

        aspect-ratio: 76 / 11;
        width: 100%;

        color: hsla(355, 52%, 30%, 1);
        font-weight: 400;
        box-shadow: none;
        border: none;
        background: hsla(0, 100%, 85%, 1);
        border-radius: get-vw(10px);
        display: grid;
        place-items: center;
      }
    }
    .tut.one {
      background: linear-gradient(
        226.51deg,
        #1d2030 0%,
        rgba(29, 32, 48, 0.25) 81.51%
      );
    }
    .tut.two {
      background: linear-gradient(
        180deg,
        #1d2030 0%,
        rgba(29, 32, 48, 0.25) 100%
      );
    }
    .tut.three {
      background: linear-gradient(
        133.1deg,
        #1d2030 0%,
        rgba(29, 32, 48, 0.25) 81.23%
      );
    }
    .spacer.one {
      width: get-vw(50px);
      @media screen and (max-width: $bp) {
        width: 0px;
        height: 50px;
        @include vw(50px);
      }
    }
  }
</style>
