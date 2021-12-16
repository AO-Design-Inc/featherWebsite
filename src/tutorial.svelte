<div id="t_main" class="d">
  <div class="d tut one">
    <div class="spacer gutter">
      <div class="num-container">
        <div class="num one">1</div>
      </div>
      <div class="spacer one" />
      <div class="title one">Play</div>
      <div class="spacer two" />
      <img src="./assets/tut-illus-one.svg" alt="Download Feather" />
      <div class="spacer three" />
      <div class="des one">
        Download & install Feather on all the devices you want to connect.
      </div>
    </div>
  </div>

  <div class="spacer one" />
  <div class="tut two" />
  <div class="spacer one" />
  <div class="tut three" />
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
        padding: 35px 30px;
      }
      .spacer.one {
        width: 100%;
        height: max(get-vw(5px), 5px);
      }
      .num-container {
        width: 100%;
        height: max(get-vw(20px), 20px);
        display: grid;
        place-items: center;
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
        font-size: max(get-vw(37px), 37px);
        font-style: normal;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 0em;
        text-align: center;
      }
      .spacer.two {
        width: 100%;
        height: max(get-vw(20px), 20px);
      }
      img {
        aspect-ratio: 32 / 15;
        width: 100%;
      }
      .spacer.three {
        width: 100%;
        height: max(get-vw(25px), 25px);
      }
      .des {
        opacity: 0.75;
        font-size: get-vw(20px);
        line-height: 150%;
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
