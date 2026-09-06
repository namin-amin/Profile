<script lang="ts">
  import { link } from "svelte-spa-router";

  const baseUrl = import.meta.env.BASE_URL;

</script>

<div class="about">
  <p class="label">Open channels</p>
  <h3>Let’s make something<br /><em>worth opening.</em></h3>
  <div class="links">
    <a href="mailto:navaneesh185@gmail.com">Email <span>↗</span></a>
    <a href="https://github.com/namin-amin" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
    <a href="https://www.linkedin.com/in/navaneesh-n-amin-1a9660128/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
    <a href="https://drive.google.com/file/d/1glbKA5bYXqVmK1M8xj7lq9wd-aJWsdoh/view?usp=drive_link" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
    <a href={`${baseUrl}blog/`} use:link>Notes <span>↗</span></a>
  </div>
</div>
<style>
  .about { padding: 2.2rem; color: #18323a; border-top: 1px solid rgba(24, 50, 58, 0.45); border-bottom: 1px solid rgba(24, 50, 58, 0.45); }
  .label { margin: 0 0 1.5rem; font: 0.7rem "DM Mono", monospace; text-transform: uppercase; }
  h3 { margin: 0 0 2rem; font-size: clamp(2.2rem, 5vw, 4rem); letter-spacing: -0.07em; line-height: 0.95; }
  em { font-weight: 400; }
  .links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.7rem 2rem; }
  .links a { display: flex; justify-content: space-between; padding: 0.75rem 0; color: #18323a; border-bottom: 1px solid rgba(24, 50, 58, 0.25); text-decoration: none; font-weight: 700; }
  .links a:hover { color: #e56b4b; }
  @media (max-width: 600px) { .about { padding: 1.5rem 0; } .links { grid-template-columns: 1fr; } }
</style>
