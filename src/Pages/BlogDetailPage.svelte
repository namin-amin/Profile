<script lang="ts">
  import { onMount } from "svelte";
  import { link, querystring } from "svelte-spa-router";
  import { marked } from "marked";

  const baseUrl = import.meta.env.BASE_URL;
  let token = "";

  onMount(() => {
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
  .article-page { min-height: 100vh; padding: 7.5rem 1.5rem 6rem; background: #f5f0e8; color: #18323a; }
  .article-header, .content { width: min(100%, 820px); margin: 0 auto; }
  .article-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 4rem; }
  .back-link { color: #18323a; font: 0.72rem "DM Mono", monospace; text-decoration: none; }
  .back-link:hover { color: #e56b4b; }
  .eyebrow { margin: 0; color: #e56b4b; font: 0.68rem "DM Mono", monospace; letter-spacing: 0.08em; text-transform: uppercase; }
  .prose { font-size: 1.05rem; line-height: 1.8; }
  .prose :global(h1) { max-width: 760px; margin: 0 0 2rem; color: #18323a; font-size: clamp(2.8rem, 7vw, 5.8rem); line-height: 0.98; letter-spacing: -0.07em; }
  .prose :global(h2) { margin: 3.5rem 0 1rem; color: #18323a; font-size: 2rem; line-height: 1.1; letter-spacing: -0.05em; }
  .prose :global(h3) { margin: 2rem 0 0.75rem; color: #18323a; font-size: 1.35rem; }
  .prose :global(p) { margin: 0 0 1.2rem; color: #577078; }
  .prose :global(a) { color: #d4573d; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .prose :global(a:hover) { color: #18323a; }
  .prose :global(img) { display: block; width: auto; max-width: 100%; max-height: 22rem; margin: 2rem 0; border-radius: 0.8rem; object-fit: contain; object-position: left; }
  .prose :global(pre) { overflow-x: auto; margin: 2rem 0; padding: 1.25rem; border-radius: 0.75rem; background: #18323a; color: #f5f0e8; font: 0.78rem/1.7 "DM Mono", monospace; }
  .prose :global(code) { padding: 0.15rem 0.35rem; border-radius: 0.25rem; background: #e7dfd3; color: #18323a; font: 0.85em "DM Mono", monospace; }
  .prose :global(pre code) { padding: 0; background: transparent; color: inherit; }
  .prose :global(blockquote) { margin: 2rem 0; padding: 0.4rem 0 0.4rem 1.25rem; border-left: 3px solid #e56b4b; color: #577078; font-size: 1.15rem; }
  .prose :global(ul), .prose :global(ol) { padding-left: 1.5rem; color: #577078; }
  .prose :global(hr) { margin: 3rem 0; border: 0; border-top: 1px solid rgba(24, 50, 58, 0.2); }
  .loading { color: #577078; }
  .loading span { color: #e56b4b; }
  @media (max-width: 600px) { .article-page { padding-top: 7rem; } .article-header { align-items: flex-start; flex-direction: column-reverse; margin-bottom: 3rem; } .prose { font-size: 0.98rem; } }
</style>
