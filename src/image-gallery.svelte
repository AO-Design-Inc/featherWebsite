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
    if (index >= 2) index = 0;
  }, 3000);
</script>

<div class="image-gallery-main">
  {#if index === 0}
    <img
      transition:fade={{ delay: 250, duration: 300, easing: quintOut }}
      class="image"
      src={image[0]}
      alt=""
    />
  {:else if index === 1}
    <img
      transition:fade={{ delay: 250, duration: 300, easing: quintOut }}
      class="image"
      src={image[1]}
      alt=""
    />
  {:else}
    <img
      transition:fade={{ delay: 250, duration: 300, easing: quintOut }}
      class="image"
      src={image[2]}
      alt=""
    />
  {/if}
</div>

<style>
  .image {
    position: absolute;
    left: 0;
    right: 0;
    margin-top: -100px;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 1 / 1;
    height: 150%;
  }
</style>
