<script lang="ts">
  import { onMount } from "svelte";
  import { location, querystring } from "svelte-spa-router";
  import SvelteMarkdown from "svelte-markdown";
  import { marked } from "marked";

  let token: any;

  onMount(() => {
    let filepath = $querystring.split("=")[1];
    console.log(filepath);
    fetch(filepath).then(async (res) => {
      token = marked.lexer(await res.text());
    });
  });
</script>

<div class="content">
  {#if token !== null}
    <SvelteMarkdown source={token} />
  {/if}
</div>

<style>
  .content {
    padding: 4rem;
    background-color: #708192;
    color: white;
  }
</style>
