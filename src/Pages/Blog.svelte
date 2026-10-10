<script lang="ts">
  import BlogList from "../Componets/BlogList.svelte";
  import type { Iblogdata } from "../Iblogdata";
  import { onMount } from "svelte";
  let blogs: Iblogdata[] | null = null;
  let error = false;
  onMount(async () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}data/Blogs.json`);
      if (!response.ok) throw new Error('Unable to load notes');
      blogs = await response.json();
    } catch { error = true; }
  });
</script>
<svelte:head><title>Field notes — Navaneesh Amin</title></svelte:head>
<main class="container">
  <header><p class="eyebrow">THE NOTEBOOK / SOFTWARE &amp; SYSTEMS</p><h1>Learning <span class="accent">in public.</span></h1><p class="intro">Things I’ve tried, things that clicked, and things I’m still figuring out. A few notes from behind the keyboard.</p></header>
  <div class="list-heading"><span>ALL NOTES</span><span>{blogs ? String(blogs.length).padStart(2, '0') + ' ENTRIES' : '—'}</span></div>
  <div class="blog-list">
    {#if error}<p>Notes couldn’t load. Please refresh to try again.</p>
    {:else if blogs !== null}{#each blogs as blog}<BlogList {blog} />{/each}
    {:else}<p role="status">Opening the notebook…</p>{/if}
  </div>
  <p class="endnote">A work in progress. Like most good things.</p>
</main>
<style>
  .container { min-height: calc(100vh - 86px); max-width: 1600px; padding: 4rem 4.5%; margin: auto; }
  header { max-width: 850px; margin-bottom: 4rem; }
  .eyebrow, .list-heading { font: 0.75rem/1.6 var(--mono); letter-spacing: 0.05em; color: var(--blue); }
  h1 { font: 700 clamp(2.25rem, 5vw, 4rem)/1.2 var(--sans); letter-spacing: -0.035em; margin: 2rem 0; }
  h1 .accent { font-weight: inherit; color: var(--blue); }
  .intro { max-width: 420px; color: var(--muted); font-size: 1.05rem; line-height: 1.8; }
  .list-heading { display: flex; justify-content: space-between; margin-bottom: 1rem; }
  .endnote { font: 400 1rem/1.6 var(--sans); margin-top: 3rem; color: var(--muted); }
  @media (max-width: 600px) { .container { padding-top: 3rem; } }
</style>
