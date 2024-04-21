<script lang="ts">
  export let showmodal = false;
  export let skilltype: string;
  import { fade } from "svelte/transition";
</script>

{#if showmodal}
  <div class="backdrop" on:click|self transition:fade>
    <!--Dev skills-->
    {#if skilltype === "dev"}
      <div class="modal modal2">
        <div style="padding:0 2rem 0 2rem; box-sizing: border-box; ">
          <!-- Experience block -->
          <h2>Experience</h2>
          <p>
            Software Developer @<a target="_blank" href="https://global.eg.dk/"
              >EGDK 
            </a>
          </p>
          <!-- Skills block -->
          <h2>Backend</h2>
          <p>ASP .NET core</p>
          <p>Microsoft Sql Server</p>
          <p>Golang</p>
          <p>express js</p>

          <h2>Frontend</h2>
          <p>React & Nextjs</p>
          <p>Svelte & Sveltekit</p>
          <p>.Asp .Net Blazor</p>

        </div>
        <div class="closebutton" on:click>Back</div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .modal {
    display: flex;
    padding: 2rem;
    width: 70%;
    height: auto;
    background-color: #f7fff7;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    color: #292f36;
    box-sizing: border-box;
  }

  .closebutton {
    display: none;
  }

  @media (max-width: 770px) {
    .modal {
      flex-direction: column;
      height: 100vh;
      width: 100%;
      overflow: auto;
      box-sizing: border-box;
      padding: 0.5rem;
    }
    .closebutton {
      background-color: none;
      border: solid 1px #292f36;
      color: #292f36;
      width: 50px;
      display: inline;
      border-radius: 5px;
    }
  }

  h2 {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: cornflowerblue;
  }
</style>
