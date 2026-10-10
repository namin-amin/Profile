<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { Iblogdata } from "../Iblogdata";
  export let blog: Iblogdata;
</script>
<a class="note" href={'/blogdetail?file=' + encodeURIComponent(blog.file)} use:link>
  <span class="number">0{blog.id}</span>
  <img src={blog.thumbimg} alt="" />
  <div><h2>{blog.title}</h2><p>{blog.details}</p></div>
  <span class="arrow" aria-hidden="true">↗</span>
</a>
<style>
  .note { display: grid; grid-template-columns: 45px 80px 1fr 40px; align-items: center; gap: 2rem; border-top: 1px solid var(--line); padding: 2rem 0; text-decoration: none; }
  .note:last-child { border-bottom: 1px solid var(--line); }
  .number { font: 0.75rem var(--mono); color: var(--blue); }
  img { width: 65px; height: 65px; object-fit: contain; filter: grayscale(1); transition: filter 180ms; }
  h2 { font: 650 1.4rem/1.4 var(--sans); margin: 0 0 0.8rem; letter-spacing: -0.02em; }
  p { max-width: 560px; margin: 0; color: var(--muted); font-size: 1rem; line-height: 1.8; }
  .arrow { font-size: 1.8rem; color: var(--blue); transition: transform 180ms; }
  .note:hover h2 { color: var(--blue); }
  .note:hover img { filter: grayscale(0); }
  .note:hover .arrow { transform: translate(3px, -3px); }
  @media (max-width: 600px) { .note { grid-template-columns: 25px 1fr 25px; gap: 1rem; } img { display: none; } h2 { font-size: 1.25rem; } }
</style>
