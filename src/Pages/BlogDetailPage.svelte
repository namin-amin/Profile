<script lang="ts">
  import { onMount } from "svelte";
  import { link, querystring } from "svelte-spa-router";
  import { marked } from "marked";

  const baseUrl = import.meta.env.BASE_URL;
  let token = "";

  onMount(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const filepath = decodeURIComponent($querystring?.split("file=")[1] ?? "");
    if (!filepath) return;
    fetch(`${baseUrl}${filepath}`).then(async (res) => {
      token = await marked.parse(await res.text());
    });
  });
</script>

<svelte:head>
  <title>Notes | Navaneesh Amin</title>
</svelte:head>

<main class="article-page">
  <header class="article-header">
    <a class="back-link" href="/blog/" use:link>← <span>All notes</span></a>
    <p class="eyebrow">Field note / Engineering</p>
  </header>

  <article class="content prose">
  {#if token}
    {@html token}
  {:else}
    <p class="loading">Loading note<span>...</span></p>
  {/if}
  </article>
</main>

<style>
  .article-page { min-height: 100vh; padding: 4rem 1.5rem 6rem; background: var(--paper); color: var(--ink); }
  .article-header, .content { width: min(100%, 820px); margin: 0 auto; }
  .article-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 4rem; }
  .back-link { color: var(--ink); font: 0.75rem var(--mono); text-decoration: none; }
  .back-link:hover { color: var(--blue); }
  .eyebrow { margin: 0; color: var(--blue); font: 0.75rem var(--mono); letter-spacing: 0.08em; text-transform: uppercase; }
  .prose { font-size: 1.05rem; line-height: 1.8; }
  .prose :global(h1) { max-width: 760px; margin: 0 0 2rem; color: var(--ink); font: 700 clamp(2rem, 5vw, 3.5rem)/1.2 var(--sans); letter-spacing: -0.03em; }
  .prose :global(h2) { margin: 3.5rem 0 1rem; color: var(--ink); font: 650 1.8rem/1.35 var(--sans); letter-spacing: -0.02em; }
  .prose :global(h3) { margin: 2rem 0 0.75rem; color: var(--ink); font-size: 1.35rem; }
  .prose :global(p) { margin: 0 0 1.2rem; color: var(--muted); }
  .prose :global(a) { color: var(--blue); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .prose :global(a:hover) { color: var(--ink); }
  .prose :global(img) { display: block; width: auto; max-width: 100%; max-height: 22rem; margin: 2rem 0; border-radius: 0; object-fit: contain; object-position: left; }
  .prose :global(pre) { overflow-x: auto; margin: 2rem 0; padding: 1.25rem; border-radius: 0; border: 1px solid var(--line); background: var(--surface); color: var(--ink); font: 0.9rem/1.7 var(--mono); }
  .prose :global(code) { padding: 0.15rem 0.35rem; border-radius: 0.25rem; background: var(--surface); color: var(--ink); font: 0.85em var(--mono); }
  .prose :global(pre code) { padding: 0; background: transparent; color: inherit; }
  .prose :global(blockquote) { margin: 2rem 0; padding: 0.75rem 0 0.75rem 1.25rem; border-left: 3px solid var(--blue); color: var(--muted); font-size: 1.15rem; }
  .prose :global(ul), .prose :global(ol) { padding-left: 1.5rem; color: var(--muted); }
  .prose :global(hr) { margin: 3rem 0; border: 0; border-top: 1px solid var(--line); }
  .loading { color: var(--muted); }
  .loading span { color: var(--blue); }
  @media (max-width: 600px) { .article-page { padding-top: 7rem; } .article-header { align-items: flex-start; flex-direction: column-reverse; margin-bottom: 3rem; } .prose { font-size: 1.05rem; } }
</style>
