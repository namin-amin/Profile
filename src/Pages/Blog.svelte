<script lang="ts">
  import BlogList from "../Componets/BlogList.svelte";
  import type { Iblogdata } from "../Iblogdata";
  import { onMount } from "svelte";
  let blogs: Iblogdata[] = null;
  let textres = "";

  onMount(() => {
    fetch("data/Blogs.json").then(async (res) => {
      textres = await res.text();
      console.log(textres);

      blogs = JSON.parse(textres);
    });
  });
</script>

<div class="cont">
  <h1 style="font-size: 3rem;align-self: center;">My Blogs</h1>

  <div class="btn">
    {#if blogs !== null}
      {#each blogs as blog}
        <BlogList {blog} />
        <BlogList {blog} />
        <BlogList {blog} />
        <BlogList {blog} />
      {/each}
    {/if}
  </div>
  <!-- <div class="cont">
    <SvelteMarkdown source={text} />
  </div> -->
</div>

<style>
  .cont {
    margin-top: 4rem;
    margin-left: 2rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
  }

  .btn {
    width: 100vw;
    display: flex;
    margin-top: 5rem;
    widows: 100%;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    overflow-wrap: normal;
  }
  .cont {
    padding: 4rem;
    margin: 1rem;
    transition: all 0.1s;
    border-radius: 5px;
  }
</style>
