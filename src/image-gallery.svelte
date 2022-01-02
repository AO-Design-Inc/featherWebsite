<script>
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let image = [
    "./assets/gallery/Gallery-1.webp",
    "./assets/gallery/Gallery-2.webp",
    "./assets/gallery/Gallery-3.webp",
    "./assets/gallery/Gallery-4.webp",
  ];
  let index = 0;
  setInterval(() => {
    index++;
    if (index >= 3) index = 0;
  }, 3000);
</script>

<div class="image-gallery-main">
  {#if index === 0}
    <img
      transition:fade={{ delay: 600, duration: 600, easing: quintOut }}
      class="image"
      src={image[0]}
      alt=""
    />
  {:else if index === 1}
    <img
      transition:fade={{ delay: 600, duration: 600, easing: quintOut }}
      class="image"
      src={image[1]}
      alt=""
    />
  {:else}
    <img
      transition:fade={{ delay: 600, duration: 600, easing: quintOut }}
      class="image"
      src={image[2]}
      alt=""
    />
  {/if}
</div>

<style lang="scss">
  @import "./vars";
  .image {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 63 / 44;
    height: 100%;
    @media screen and (max-width: $bp) {
      height: auto;
      width: 100%;
    }
  }
</style>
