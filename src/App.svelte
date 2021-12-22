<script>
  import Router from "svelte-spa-router";
  import Dash from "./dash.svelte";
  import Footer from "./footer.svelte";
  import Home from "./home.svelte";
  import About from "./about.svelte";
  import Blog from "./blog/blog.svelte";
  import Post from "./blog/posts/post.svelte";
  
</script>

<main>
  <Dash />
</main>
<Router
  routes={{
    "/": Home,
    "/about": About,
    "/blog": Blog,
    "/blog/mandel": Post
  }}
  />

<Footer />

<style lang="scss">
  @import "./vars";
  main {
    padding-left: calc(20 * $g);
    padding-right: calc(20 * $g);
    width: calc(248 * $g);
  }
</style>
