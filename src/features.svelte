<div id="ft_main" class="d">
  <div class="container one">
    <div class="ft one">
      <div class="space-gutter">
        <img class="illus" src="./assets/ft-illus-one.svg" alt="heart" />
        <div class="spacer one feature" />
        <div class="title">Get interfaces that feel native.</div>
        <div class="spacer two feature" />
        <div class="des">
          Feather’s novel approach to remote streaming captures and sends
          individual windows to you. This makes the stream much lighter, the UI
          more defined and the overall user experience more native.
        </div>
      </div>
    </div>
    <div class="spacer one" />
    <div class="ft two">
      <div class="space-gutter">
        <img class="illus" src="./assets/ft-illus-two.svg" alt="heart" />
        <div class="spacer one feature" />
        <div class="title">Work faster, from any device.</div>
        <div class="spacer two feature" />
        <div class="des">
          Connect your devices with Feather and run complex apps with ease on
          everything. Get better performance on your portable devices. Work from
          anywhere you desire.
        </div>
      </div>
    </div>
  </div>
  <div class="spacer two" />
  <div class="container two">
    <div class="ft three">
      <div class="space-gutter">
        <img class="illus" src="./assets/ft-illus-three.svg" alt="heart" />
        <div class="spacer one feature" />
        <div class="title">Make your own Edge Nodes.</div>
        <div class="spacer two feature" />
        <div class="des">
          Feather pushes the cloud closer to the user by allowing you to
          seamlessly create your own cloud. Make your own edge nodes and
          experience lower latency and an easy wireless connection.
        </div>
      </div>
    </div>
    <div class="spacer one" />
    <div class="ft four">
      <div class="space-gutter">
        <img class="illus" src="./assets/ft-illus-four.svg" alt="heart" />
        <div class="spacer one feature" />
        <div class="title">Remotely access all the files you need.</div>
        <div class="spacer two feature" />
        <div class="des">
          Speed up collaboration and make file sharing within teams completely
          seamless. Create a hub for all your files & gain instant access to
          them from any of your devices whenever you want with Feather.
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./vars";
  #ft_main {
    width: 100%;
    height: get-vw(870px);
    @media screen and (max-width: $bp) {
      height: auto;
    }
    @media screen and (min-width: 1240px) {
      max-width: 1240px;
      height: min(get-vw(870px), 870px);
      padding: 0px;
      margin: 0px auto;
    }
    .container {
      display: flex;
      @media screen and (max-width: $bp) {
        display: block;
        height: auto;
      }
      .ft {
        height: get-vw(410px);
        aspect-ratio: 595 / 410;
        background: cornflowerblue;
        @media screen and (max-width: $bp) {
          aspect-ratio: 4 / 5;
          height: auto;
          width: 100%;
        }
        @media screen and (min-width: 1240px) {
          height: min(get-vw(410px), 410px);
        }
        border-radius: 10px;
        .space-gutter {
          padding: get-vw(30px) get-vw(50px) 30px get-vw(30px);
          @media screen and (max-width: $bp) {
            padding: 35px 30px;
          }
          @media screen and (min-width: 1240px) {
            padding: min(get-vw(30px), 30px) min(get-vw(50px), 50px) 30px
              min(get-vw(30px), 30px);
          }
        }
        .illus {
          aspect-ratio: 1/1;
          width: get-vw(55px);
          @media screen and (max-width: $bp) {
            width: max(get-vw(55px), 55px);
          }
          @media screen and (min-width: 1240px) {
            width: min(get-vw(55px), 55px);
          }
        }
        .spacer.one.feature {
          width: 100%;
          height: get-vw(25px);
          @media screen and (max-width: $bp) {
            height: max(get-vw(25px), 25px);
          }
          @media screen and (min-width: 1240px) {
            height: min(get-vw(25px), 25px);
          }
        }
        .title {
          width: get-vw(420px);

          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: get-vw(37px);
          @media screen and (max-width: $bp) {
            font-size: max(get-vw(37px), 37px);
            width: 100%;
          }
          line-height: 120%;
          color: #fffffb;
          @media screen and (min-width: 1240px) {
            width: min(get-vw(420px), 420px);
            font-size: min(get-vw(37px), 37px);
          }
        }
        .spacer.two.feature {
          width: 100%;
          height: get-vw(10px);
          @media screen and (max-width: $bp) {
            height: max(get-vw(10px), 20px);
          }
          @media screen and (min-width: 1240px) {
            height: min(get-vw(10px), 10px);
          }
        }
        .des {
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          font-size: get-vw(20px);
          @media screen and (max-width: $bp) {
            font-size: max(get-vw(20px), 20px);
          }
          line-height: 150%;
          /* or 150% */
          color: #fffbfc;
          opacity: 0.75;
          @media screen and (min-width: 1240px) {
            font-size: min(get-vw(20px), 20px);
          }
        }
      }
      .ft.one {
        background: radial-gradient(
          100% 102.87% at 100% 102.87%,
          #1d2030 0%,
          rgba(29, 32, 48, 0.25) 71.95%
        );
      }
      .ft.two {
        background: radial-gradient(
          100% 100% at 0% 100%,
          #1d2030 0%,
          rgba(29, 32, 48, 0.25) 71.95%
        );
      }
      .ft.three {
        background: radial-gradient(
          102.54% 63.2% at 100% 0%,
          #1d2030 0%,
          rgba(29, 32, 48, 0.25) 71.95%
        );
      }
      .ft.four {
        background: radial-gradient(
          101.51% 98.6% at 1.44% 1.49%,
          #1d2030 0%,
          rgba(29, 32, 48, 0.25) 71.95%
        );
      }
    }

    .spacer.one {
      width: get-vw(50px);
      @media screen and (max-width: $bp) {
        width: auto;
        height: 50px;
      }
      @media screen and (min-width: 1240px) {
        width: min(get-vw(50px), 50px);
      }
    }
    .spacer.two {
      height: get-vw(50px);
      @media screen and (max-width: $bp) {
        width: auto;
        height: 50px;
      }
      @media screen and (min-width: 1240px) {
        height: min(get-vw(50px), 50px);
      }
    }
  }
</style>
