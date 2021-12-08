<div id="main" class="d">
  <div id="left">
    <div style="height: 385px">
      <div id="title"><b>Remote</b> Desktop</div>
      <div id="blurb">
        Enjoy local app streaming that feels completely native.
      </div>
      <div style="height: 65px" />
      <div id="button-container">
        <button>Documentation</button>
        <button>Download</button>
      </div>
    </div>
  </div>
  <div class="spacer" style="width: 65px" />
  <div id="right" />
</div>

<style>
  #main {
    height: 445px;
    width: 100%;
    display: flex;
  }
  #left {
    display: flex;
    align-items: center;
  }
  #left #title {
    font-size: 5.56em;
    font-weight: normal;
    line-height: 101%;
    width: 400px;
    height: 210px;
  }
  #left #blurb {
    width: 400px;
    height: 80px;

    font-family: Inter;
    font-size: 1.62em;
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
  }
</style>
