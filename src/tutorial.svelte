<div id="t_main" class="d">
    <div class="d tut one"></div>
    <div class="spacer one" />
    <div class="d tut two"></div>
    <div class="spacer one" />
    <div class="d tut three"></div>
</div>

<style lang="scss">
    @import "./vars";
    #t_main {
        width: 100%;
        height: get-vw(470px);

        display: flex;

        @media screen and (max-width: 1000px) {
            display: block;
            height: auto;
            @include vw((3 * 470px) + (2 * 50px));
        }
        .tut {
            aspect-ratio: 4 / 5;
            background: cornflowerblue;
            height: 100%;
            width: get-vw(380px);
            @media screen and (max-width: 1000px) {
                height: auto;
                width: 100%;
            }
        }
        .spacer.one {
            width: get-vw(50px);
            @media screen and (max-width: 1000px) {
                width: 0px;
                height: 50px;
                @include vw(50px);
            }
        }
    }
</style>