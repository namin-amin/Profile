<script lang="ts">
  import type { Iblogdata } from "../Iblogdata";
  export let blog: Iblogdata;
</script>

<div class="card">
  <img src="data/1/blazlogo.png" alt="" />
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
    height: 8rem;
    aspect-ratio: calc(16, 9);
  }

  .card {
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 2rem;
    width: 25rem;
    height: 15rem;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    flex-direction: row;
    display: flex;
    border: solid 1px lightgray;
    transition: all 0.2s;
  }
  .card:hover {
    -webkit-box-shadow: 5px 10px 22px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 10px 22px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 10px 22px -6px rgba(0, 0, 0, 0.75);
  }
</style>
