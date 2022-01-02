<script>
  import Gallery from "./image-gallery.svelte";
</script>

<div id="main" class="d">
  <div id="left">
    <div id="bs">
      <div id="title"><b>Remote</b> Desktop</div>
      <div id="blurb">
        Enjoy local app streaming that feels completely native.
      </div>
      <div class="spacer two" />
      <div id="button-container">
        <button class=" secondary doc">
          <div id="big">Documentation</div>
          <div id="small">Docs</div>
        </button>
        <div class="spacer three" />
        <button class="primary download">Read 👇🏽</button>
      </div>
    </div>
  </div>
  <div class="spacer one" />
  <div id="right">
    <!-- <Gallery /> -->
  </div>
</div>

<style lang="scss">
  @import "./vars";
  $bpBreak: 850px;
  #main {
    height: get-vw(450px);
    width: 100%;
    display: flex;
    @media screen and (max-width: $bp) {
      display: block;
      height: auto;
    }
    max-width: 1240px;
    @media screen and (min-width: 1240px) {
      padding: 0px;
      margin: 0px auto;
      height: min(get-vw(450px), 450px);
    }
  }
  #left {
    display: flex;
    align-items: center;
    @media screen and (max-width: $bp) {
      height: auto;
    }
  }
  #left {
    .spacer.two {
      height: get-vw(40px);
      @media screen and (max-width: $bp) {
        height: get-vw(40px);
      }
      @media screen and (min-width: 1240px) {
        height: min(get-vw(40px), 40px);
      }
    }
    #bs {
      height: get-vw(385px);
      @media screen and (min-width: 1240px) {
        height: min(get-vw(385px), 385px);
      }
      @media screen and (max-width: $bp) {
        height: auto;
        width: 100%;
      }
    }
    #title {
      font-size: get-vw(90px);
      @media screen and (max-width: $bp) {
        font-size: 80px;
      }
      @media screen and (min-width: 1240px) {
        font-size: min(get-vw(90px), 90px);
        width: min(get-vw(400px), 400px);
        height: min(get-vw(210px), 210px);
      }
      font-weight: normal;
      line-height: 101%;
      width: get-vw(400px);
      height: get-vw(210px);
      @media screen and (max-width: $bp) {
        width: 100%;
        height: auto;
        font-size: 65px;
        padding-bottom: 20px;
        // font-size: get-vw(280px);
      }
    }
    #button-container {
      display: flex;
      button {
        height: get-vw(55px);
        // min-height: 55px;
        font-size: get-vw(20px);
        @media screen and (max-width: $bpBreak) {
          font-size: max(get-vw(16px), 16px);
          min-height: 55px;
        }
        @media screen and (max-width: $bp) {
          font-size: 138%;
        }
        @media screen and (min-width: 1240px) {
          height: min(get-vw(55px), 55px);
          font-size: min(get-vw(20px), 20px);
        }
      }
      .primary {
        aspect-ratio: 35/11;
        width: get-vw(175px);
        @media screen and (max-width: $bp) {
          width: 49%;
        }
        color: hsla(355, 52%, 30%, 1);
        font-weight: 400;
        box-shadow: none;
        border: none;
        background: hsla(0, 100%, 85%, 1);
        border-radius: get-vw(10px);
        display: grid;
        place-items: center;
        @media screen and (min-width: 1240px) {
          width: min(get-vw(175px), 175px);
          border-radius: min(get-vw(10px), 10px);
        }
      }
      .spacer.three {
        width: get-vw(15px);
        @media screen and (min-width: 1240px) {
          width: min(get-vw(15px), 15px);
        }
      }
      .secondary {
        aspect-ratio: 42/11;
        width: get-vw(210px);
        @media screen and (max-width: $bp) {
          width: 49%;
        }
        color: #fffffb;
        box-shadow: none;
        border: 1px solid #ffdede;
        background: #fb768100;
        border-radius: get-vw(10px);
        display: grid;
        place-items: center;
        @media screen and (min-width: 1240px) {
          width: min(get-vw(210px), 210px);
          border-radius: min(get-vw(10px), 10px);
        }

        #big {
          display: block;
        }
        #small {
          display: none;
        }
        @media screen and (min-width: $bp) and (max-width: 1050px) {
          #big {
            display: none;
          }
          #small {
            display: block;
          }
        }
      }
      @media screen and (max-width: $bp) {
        padding-bottom: 50px;
      }
    }
    @media screen and (max-width: $bp) {
      width: 100%;
    }
  }
  #left #blurb {
    width: get-vw(400px);
    height: get-vw(80px);
    @media screen and (max-width: $bp) {
      width: 100%;
      height: auto;
      padding-bottom: 20px;
    }
    font-family: Inter;
    font-size: get-vw(26px);
    @media screen and (max-width: $bp) {
      font-size: 20px;
    }
    font-style: normal;
    font-weight: 400;
    line-height: 154%;
    letter-spacing: 0em;
    text-align: left;

    color: #fffffb;
    opacity: 0.6;
    @media screen and (min-width: 1240px) {
      width: min(get-vw(400px), 400px);
      height: min(get-vw(80px), 80px);
      font-size: min(get-vw(26px),26px);
    }
  }
  #right {
    background: linear-gradient(
      180deg,
      #1d2030 0%,
      rgba(29, 32, 48, 0.25) 100%
    );
    border-radius: 10px;
    height: 100%;
    width: 100%;
    position: relative;
    aspect-ratio: 16 / 9;
    @media screen and (max-width: $bp) {
      aspect-ratio: 4 / 5;
      width: 100%;
    }
  }
  .spacer.one {
    width: 100%;
  }
</style>
