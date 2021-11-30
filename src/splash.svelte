<div id="main">
  <div id="left">
    <div style="height: calc(76.4 * var(--g))">
      <div id="title"><b>Remote</b> Desktop</div>
      <div id="blurb">
        Enjoy local app streaming that feels completely native.
      </div>
      <div style="height: calc(7.4 * var(--g));" />
      <div id="button-container">
        <button>Documentation</button>
        <button>Download</button>
      </div>
    </div>
  </div>
  <div style="width: calc(11 * var(--g))" />
  <div id="right" />
</div>

<style>
  #main {
    height: calc(90 * var(--g));
    width: 100%;
    display: flex;
  }
  #left {
    display: flex;
    align-items: center;
  }
  #left #title {
    font-size: 6.18vw;
    font-weight: normal;
    line-height: 101%;
    width: calc(80 * var(--g));
    height: calc(42 * var(--g));
  }
  #left #blurb {
    width: calc(81.77 * var(--g));
    height: calc(16 * var(--g));

    font-family: Inter;
    font-size: 1.80vw;
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
  }
</style>
