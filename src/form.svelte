<form
  action="https://buttondown.email/api/emails/embed-subscribe/feather"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/feather', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <input
    class="email"
    placeholder="Enter your email"
    type="email"
    name="email"
    id="bd-email"
  />
  <input class="sub" type="submit" value="Subscribe" />
</form>

<style lang="scss">
  @import "./vars";
  $bpDash: 850px;
  form {
    // height: get-vw(45px);
    display: flex;
    position: relative;
    @media (max-width: 540px) {
      display: none;
    }
    .email {
      height: get-vw(45px);
      min-height: 45px;
      border-radius: 2 * $g;
      color: #fffffb;
      background: #474b52;
      border: none;
      width: 100%;
      font-size: max(get-vw(16px), 16px);

    //   margin-right: get-vw(80px);
      margin-bottom: 0;
      padding: 8px 16px;
    }
    .email:focus-visible {
      background: #5f646d;
    }
    .sub {
      position: absolute;
      right: 0%;

      color: #fffffb;
      margin: 0px;
      width: get-vw(100px);
      min-width: 90px;
      height: get-vw(45px);
      min-height: 45px;
      box-shadow: none;
      border: none;
      background: #fb7680;
      border-radius: 2 * $g;
      display: grid;
      place-items: center;

      font-size: max(get-vw(16px), 16px);
      transition: background 0.3s ease-in-out;

      @media screen and (max-width: $bpDash) {
        width: get-vw(100px);
      }
    }
    .sub {
        transition: background 0.3s ease-in-out;
        background: #f87c86;
    }
  }
</style>
