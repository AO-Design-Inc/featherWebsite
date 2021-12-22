<script>
import Router from "svelte-spa-router";
import Thumbnail from "thumbnail.svelte"
import { post_struct } from './posts/post.svelte';

window.document.body.classList.add('lightmode')
</script>

<main>
</main>

<style lang="scss">
@import "../vars";
main {
  padding-left: calc(20 * $g);
  padding-right: calc(20 * $g);
  width: calc(248 * $g);
  // min-height: calc(558 * $g);
  height: auto;
  margin: 0px;
}
</style>