<script lang="ts">
  import { push } from "svelte-spa-router";
  import Attributes from "./Attributes.svelte";

  let showAtribute = false;

  const gotoBlog = () => {
    push("/blog/");
  };
</script>

<div class="about">
  <div class="container1">
    <div>
      <h3>LinkedIn</h3>
      <a
        href="https://www.linkedin.com/in/navaneesh-n-amin-1a9660128/"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/material-outlined/96/292f36/linkedin--v1.png"
          alt="linkedin"
          id="linkdin"
        />
      </a>
    </div>

    <div>
      <h3>Github</h3>
      <a
        href="https://github.com/namin-amin
      "
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios/100/292f36/github--v1.png"
          alt="github"
          id="github"
        /></a
      >
    </div>
  </div>
  <div title="Read Stuff">
    <h3>Blog</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      fill="currentColor"
      class="bi bi-journal"
      viewBox="0 0 16 16"
      on:click={gotoBlog}
    >
      <path
        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
      />
      <path
        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
      />
    </svg>
  </div>
  <div class="container2">
    <div title="mail me at:  navaneesh185@gmail.com">
      <h3>Mail</h3>
      <a href="mailto:navaneesh185@gmail.com" target="_blank">
        <img
          src="https://img.icons8.com/ios/100/292f36/mail.png"
          alt="mail"
          id="mail"
        />
      </a>
    </div>

    <div title="View Resume">
      <h3>Resume/CV</h3>
      <a
        href="https://drive.google.com/file/d/1glbKA5bYXqVmK1M8xj7lq9wd-aJWsdoh/view?usp=drive_link
      "
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios/100/292f36/open-resume.png"
          alt="resume/cv"
          id="resume"
        /></a
      >
    </div>
  </div>
</div>
<div style="display: flex;flex-direction: column;">
  {#if showAtribute}
    <Attributes />
  {/if}
</div>

<button
  style="position:fixed; bottom: 0;right: 0; color: gray; border: none; cursor: pointer;"
  on:click={() => (showAtribute = !showAtribute)}>showAttributes</button
>

<style>
  .about {
    width: 60%;
    height: 80%;
    border: solid 1px darkgray;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
  }
  .about:hover {
    transform: scale(1.02);
    box-shadow: 14px 21px 82px -37px #292f36;
  }

  .container1,
  .container2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .profilepic {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }

  @media (max-width: 700px) {
    .about {
      width: 80vw;
    }
    .container1,
    .container2 {
      justify-content: space-between;
    }

    img {
      width: 50%;
      height: 50%;
    }
  }
</style>
