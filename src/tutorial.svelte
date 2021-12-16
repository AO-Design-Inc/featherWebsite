<div id="t_main" class="d">
  <div class="d tut one" />
  <div class="spacer one" />
  <div class="d tut two" />
  <div class="spacer one" />
  <div class="d tut three" />
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
      @include vw((3 * 470px) + (2 * 50px));
    }
    .tut {
      aspect-ratio: 4 / 5;
      background: cornflowerblue;
      height: 100%;
      width: get-vw(380px);

      border-radius: get-vw(10px);

      @media screen and (max-width: $bp) {
        height: auto;
        width: 100%;
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
