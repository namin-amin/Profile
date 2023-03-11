<script lang="ts">
  import BlogList from "../Componets/BlogList.svelte";
  import type { Iblogdata } from "../Iblogdata";
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  let blogs: Iblogdata[] = null;
  let textres = "";

  onMount(() => {
    fetch("data/Blogs.json").then(async (res) => {
      textres = await res.text();
      console.log(textres);

      blogs = JSON.parse(textres);
    });
  });

  const gohome = () => {
    replace("/");
  };
</script>

<div class="homebtn" title="Go Home">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-house-door"
    viewBox="0 0 16 16"
    on:click={gohome}
  >
    <path
      d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"
    />
  </svg>
</div>

<div class="container">
  <h1 style="font-size: 3rem;align-self: center;font-weight: bold;">
    My Blogs
  </h1>

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
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #f7fff7;
  }

  .blogcards {
    display: flex;
    margin-top: 5rem;
    widows: 100%;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    overflow-wrap: normal;
  }
  .homebtn {
    visibility: hidden;
  }

  @media (max-width: 600px) {
    .container {
      scroll-behavior: smooth;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }
    .blogcards {
      margin-top: 0.5rem;
    }
    .homebtn {
      visibility: visible;
      position: fixed;
      top: 1.5rem;
      left: 1rem;
      z-index: 100;
    }
    svg {
      width: 2rem;
      height: 2rem;
      color: gray;
    }
    svg:hover {
      color: darkgray;
    }
  }
</style>
