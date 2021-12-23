<script>
  import Thumbnail from "./thumbnail.svelte";
  window.document.body.classList.add("lightmode");
</script>

<main>
  <a href="#/blog/post">
    <Thumbnail
      input_struct={{
        category: "UX",
        date: "12th December 2021",
        title: "Example Post",
        summary: `
        This is an example post to guide you in making your own posts in the future!  
      `,
        thumbnail: "./assets/Feather-site-thumbnail.png",
      }}
    />
  </a>
  <a href="#/blog/post">
    <Thumbnail
      input_struct={{
        category: "UX",
        date: "12th December 2021",
        title: "Example Post",
        summary: `
        This is an example post to guide you in making your own posts in the future!  
      `,
        thumbnail: "./assets/Feather-site-thumbnail.png",
      }}
    />
  </a>
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
