<div id="ft_main" class="d">
  <div class="container one">
    <div class="ft one" />
    <div class="spacer one" />
    <div class="ft two" />
  </div>
  <div class="spacer two" />
  <div class="container two">
    <div class="ft three" />
    <div class="spacer one" />
    <div class="ft four" />
  </div>
</div>

<style lang="scss">
  @import "./vars";
  #ft_main {
    width: 100%;
    height: get-vw(870px);
    @media screen and (max-width: $bp) {
      height: auto;
      @include vw((4 * 410px) + (3 * 50px));
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
      }
    }

    .spacer.one {
      width: get-vw(50px);
      @media screen and (max-width: $bp) {
        width: auto;
        height: 50px;
        @include vw(50px);
      }
    }
    .spacer.two {
      height: get-vw(50px);
      @media screen and (max-width: $bp) {
        width: auto;
        height: 50px;
        @include vw(50px);
      }
    }
  }
</style>
