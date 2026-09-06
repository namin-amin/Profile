<script lang="ts">
  import BlogList from "../Componets/BlogList.svelte";
  import type { Iblogdata } from "../Iblogdata";
  import { onMount } from "svelte";
  let blogs: Iblogdata[] | null = null;
  const baseUrl = import.meta.env.BASE_URL;
  onMount(() => {
    fetch(`${baseUrl}data/Blogs.json`).then(async (res) => {
      blogs = await res.json();
    });
  });

</script>

<div class="container">
  <header class="page-heading">
    <p class="eyebrow">03 / Field notes</p>
    <h1>Things I’m figuring out.</h1>
    <p class="intro">Short notes on software, systems, and the details that make both more useful.</p>
  </header>

  <div class="blogcards">
    {#if blogs !== null}
      {#each blogs as blog}
        <BlogList {blog} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .container {
    min-height: 100vh;
    padding: 9rem max(1.5rem, calc((100vw - 1180px) / 2)) 5rem;
    background: #f5f0e8;
  }
  .page-heading { max-width: 700px; margin-bottom: 4rem; }
  .eyebrow { color: #e56b4b; font: 500 0.72rem "DM Mono", monospace; letter-spacing: 0.08em; text-transform: uppercase; }
  h1 { margin: 0; color: #18323a; font-size: clamp(3.2rem, 7vw, 6.5rem); line-height: 0.95; letter-spacing: -0.07em; }
  .intro { max-width: 480px; color: #577078; font-size: 1rem; line-height: 1.7; }
  .blogcards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; max-width: 900px; }
  @media (max-width: 700px) {
    .container { padding-top: 8rem; }
    .blogcards { grid-template-columns: 1fr; }
  }
</style>
