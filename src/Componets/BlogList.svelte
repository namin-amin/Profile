<script lang="ts">
  import { push } from "svelte-spa-router";
  import type { Iblogdata } from "../Iblogdata";
  export let blog: Iblogdata;

  const gotoBlogDetail = () => {
    push("/blogdetail?file=" + encodeURIComponent(blog.file));
  };
</script>

<button class="card" type="button" on:click={gotoBlogDetail}>
  <div class="card-top"><span>NOTE / 0{blog.id}</span><span>↗</span></div>
  <img src={blog.thumbimg} alt="" />
  <div class="lisitem">
    <h2>{blog.title}</h2>
    <p>{blog.details}</p>
  </div>
</button>

<style>
  .card {
    min-height: 21rem;
    font: inherit;
    color: inherit;
    text-align: left;
    cursor: pointer;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(24, 50, 58, 0.2);
    border-radius: 1rem;
    background: #ebe4da;
    transition: transform 220ms ease, background 220ms ease;
  }
  .card:hover { transform: translateY(-0.35rem); background: #e2d8ca; }
  .card-top { display: flex; justify-content: space-between; color: #e56b4b; font: 0.65rem "DM Mono", monospace; }
  img { width: 100%; height: 6rem; object-fit: contain; object-position: left; mix-blend-mode: multiply; }
  .lisitem { padding-top: 1rem; }
  h2 { margin: 0 0 0.8rem; color: #18323a; font-size: 1.35rem; letter-spacing: -0.05em; }
  p { margin: 0; color: #577078; font-size: 0.78rem; line-height: 1.6; }
</style>
