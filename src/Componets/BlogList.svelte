<script lang="ts">
  import { push } from "svelte-spa-router";
  import type { Iblogdata } from "../Iblogdata";
  export let blog: Iblogdata;

  const gotoBlogDetail = () => {
    push("/blogdetail?file=" + blog.file);
  };
</script>

<div class="card" on:click={gotoBlogDetail}>
  <img src={blog.thumbimg} alt="thumbnail" />
  <div class="lisitem">
    <h2>
      {blog.title}
    </h2>
    <h4>
      {blog.details}
    </h4>
  </div>
</div>

<style>
  .lisitem {
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    display: flex;
    transition: all 0.2s;
  }

  img {
    width: 5rem;
    height: 100%;
    object-fit: cover;
  }

  .card {
    margin: 0 4rem 2rem 4rem;
    width: 25rem;
    height: 15rem;
    justify-content: center;
    padding: 2rem;
    align-items: center;
    flex-direction: row;
    display: flex;
    border: solid 1px lightgray;
    transition: all 0.2s;
  }

  @media (max-width: 600px) {
    .card {
      flex-direction: column;
      height: auto;
      width: auto;
      margin: 1rem 1rem 1.5rem 1rem;
    }

    img {
      width: 100%;
      height: 5rem;
      object-fit: cover;
    }
  }

  .card:hover {
    -webkit-box-shadow: 5px 10px 22px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 10px 22px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 10px 22px -6px rgba(0, 0, 0, 0.75);
  }
</style>
