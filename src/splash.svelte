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
        <button class="primary download">Download</button>
      </div>
    </div>
  </div>
  <div class="spacer one" />
  <div id="right" />
</div>

<style lang="scss">
  @import "./vars";
  #main {
    height: get-vw(450px);
    width: 100%;
    display: flex;
    @media screen and (max-width: $bp) {
      display: block;
      height: auto;
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
      height: get-vw(65px);
    }
    #bs {
      height: get-vw(385px);
      @media screen and (max-width: $bp) {
        height: 385px;
      }
    }
    #title {
      font-size: get-vw(90px);
      @media screen and (max-width: $bp) {
        font-size: 80px;
      }
      font-weight: normal;
      line-height: 101%;
      width: get-vw(400px);
      height: get-vw(210px);
      @media screen and (max-width: $bp) {
        width: 90%;
        height: 190px;
      }
    }
    #button-container {
      display: flex;
      .primary {
        height: get-vw(55px);
        width: get-vw(175px);
        @media screen and (max-width: $bp) {
          width: 175px;
        }
        color: #fffffb;
        height: 45px;
        box-shadow: none;
        border: none;
        background: #fb7680;
        border-radius: 10px;
        display: grid;
        place-items: center;
      }
      .spacer.three {
        width: get-vw(15px);
      }
      .secondary {
        height: get-vw(55px);
        width: get-vw(210px);
        @media screen and (max-width: $bp) {
          width: 200px;
        }

        color: #fffffb;
        height: 45px;
        box-shadow: none;
        border: 1px solid #ffdede;
        background: #fb768100;
        border-radius: 10px;
        display: grid;
        place-items: center;

        #big {
          display: block;
        }
        #small {
          display: none;
        }
        @media screen and (min-width: $bp) and (max-width: 1000px) {
          #big {
            display: none;
          }
          #small {
            display: block;
          }
        }
      }
    }
  }
  #left #blurb {
    width: get-vw(400px);
    height: get-vw(80px);
    @media screen and (max-width: $bp) {
      width: 90%;
      height: 80px;
    }
    font-family: Inter;
    font-size: get-vw(26px);
    @media screen and (max-width: $bp) {
      font-size: 26px;
    }
    font-style: normal;
    font-weight: 400;
    line-height: 154%;
    letter-spacing: 0em;
    text-align: left;

    color: #fffffb;
    opacity: 0.6;
  }
  #right {
    background: linear-gradient(
      180deg,
      #1d2030 0%,
      rgba(29, 32, 48, 0.25) 100%
    );
    border-radius: 10px;
    height: 100%;
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
