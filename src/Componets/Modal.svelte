<script lang="ts">
  export let showmodal = false;
  export let skilltype: string;
  import { fade } from "svelte/transition";
</script>

{#if showmodal}
  <div class="backdrop" on:click|self transition:fade>
    <!--Aero skills-->
    {#if skilltype === "aero"}
      <div class="modal">
        <div style="padding:0 2rem 0 2rem; box-sizing: border-box; ">
          <h2>Expeience</h2>
          <p>
            Production Enginner at <a
              href="https://www.aequs.com/aerospace/"
              target="_blank">Aequs Aerospace Pvt Ltd (2018-2020)</a
            >
          </p>
          <br />
          <h2>Skills</h2>
          <p>Handson experience with CNC milling</p>
          <p>Assembly of Aerospace Comonents</p>
          <p>CAE/CAM</p>
          <br />
          <h2>Certifications</h2>
          <p>
            3Dexperince from <a
              href="https://www.linkedin.com/company/aerocoe/about/"
              target="_blank">Centre of Excellence in Aerospace & Defence</a
            >
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1sKLa5Iky5W_3LTVi0G-bczrlhuUnzElP/view?usp=sharing"
              target="_blank">introduction to Six-Sigma Concepts</a
            >
          </p>
        </div>
        <div class="closebutton" on:click>Back</div>
      </div>
    {/if}

    <!--Dev skills-->
    {#if skilltype === "dev"}
      <div class="modal modal2">
        <div style="padding:0 2rem 0 2rem; box-sizing: border-box; ">
          <!-- Experience block -->
          <h2>Experience</h2>
          <p>
            Programming Engineer @<a href="https://www.winmansoftware.com/"
              >Winman Software
            </a>
          </p>
          <!-- Skills block -->
          <h2>Skills</h2>
          <p>.NET Framework & .NET</p>
          <p>React, nodejs , Svelte, Nestjs, ASP.Net</p>
          <p>Electronjs</p>
          <p>Python</p>

          <h2>Certifications</h2>
          <p>
            <a
              href="https://www.udemy.com/certificate/UC-4480aeb2-1a93-427c-822e-44d5a83ebd32/"
              >Web Development Bootcamp</a
            >
          </p>
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
    height: 100vh;
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
