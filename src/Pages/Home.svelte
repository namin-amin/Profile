<script lang="ts">
  import { link } from "svelte-spa-router";
  import About from "../Componets/About.svelte";
  import Attributes from "../Componets/Attributes.svelte";
  import WebSkill from "../Componets/WebSkill.svelte";
</script>
<svelte:head>
  <title>Navaneesh Amin — Software engineer</title>
  <meta name="description" content="Navaneesh Amin, a full-stack developer in Mangaluru, India. Building with .NET, TypeScript, Azure, and a focus on backend systems." />
</svelte:head>
<main>
  <section class="hero" id="intro">
    <div class="hero-meta"><span>FULL-STACK SOFTWARE DEVELOPMENT</span><span>MANGALURU, INDIA <span class="dot">●</span></span></div>
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="hello">Hello, I’m Navaneesh.</p>
        <h1>Full-stack developer.<br /><span class="accent">Focused on the backend.</span></h1>
        <div class="intro-row"><span class="intro-marker" aria-hidden="true">↳</span><div><p class="intro">I’m Navaneesh Amin, a software developer based in Mangaluru. I build web applications, .NET services, and cloud integrations, with a focus on reliable backend systems.</p><a class="text-link" href="mailto:navaneesh185@gmail.com">Let’s talk <span>↗</span></a></div></div>
      </div>
      <aside class="system-note" aria-label="My approach: interface, service, and data">
        <div class="note-heading"><span>UNDER THE SURFACE</span><span>FIG. 01</span></div>
        <div class="system-diagram" aria-hidden="true">
          <div class="system-layer"><span>01</span> Interface <small>the experience</small></div>
          <div class="connector">↓ <span>request</span></div>
          <div class="system-layer service"><span>02</span> Service <small>the logic</small></div>
          <div class="connector">↓ <span>query</span></div>
          <div class="system-layer data"><span>03</span> Data <small>the foundation</small></div>
        </div>
        <p class="hand-note">Good software goes<br />all the way down.</p>
        <div class="note-footer"><span>.NET / TYPESCRIPT / AZURE</span><span>↗</span></div>
      </aside>
    </div>
    <div class="hero-bottom"><span>FULL-STACK DEVELOPMENT <span class="slash">/</span> BACKEND SYSTEMS</span><a href="#/" onclick={(event) => { event.preventDefault(); document.getElementById('skills')?.scrollIntoView(); }}>Explore my practice <span>↓</span></a></div>
  </section>
  <section class="practice" id="skills">
    <div class="section-top"><span class="index">01 / PRACTICE</span><p>From the first interaction<br />to the last database query.</p></div>
    <h2>Technical expertise</h2>
    <WebSkill />
    <div class="profile"><div class="profile-title"><span class="index">A LITTLE CONTEXT</span><h3>Experience &amp; interests</h3><p>Alongside my professional stack, I explore Go, Flutter, and Electron. Away from the keyboard: travel and finding something good to eat.</p></div><Attributes /></div>
  </section>
  <section class="notes-preview">
    <span class="index">02 / FIELD NOTES</span><div><h2>Learning in public.</h2><p>Experiments, discoveries, and the occasional rabbit hole.<br />Notes from working with Blazor, Svelte, and Go.</p></div><a href="/blog/" use:link class="text-link">Read the notes <span>↗</span></a>
  </section>
  <section class="contact" id="contact"><About /></section>
  <footer><a href="#/" onclick={(event) => { event.preventDefault(); document.getElementById('intro')?.scrollIntoView(); }}>Navaneesh Amin <span>↑</span></a><span>MANGALURU, INDIA</span><span>BUILT WITH SVELTE. MADE WITH CARE.</span></footer>
</main>
<style>
  main { max-width: 1600px; margin: auto; padding: 0 4.5%; }
  .hero { padding-top: 1.7rem; }
  .hero-meta, .hero-bottom { display: flex; justify-content: space-between; gap: 1rem; font: 0.75rem/1.6 var(--mono); letter-spacing: 0.04em; }
  .hero-meta { color: var(--muted); }
  .dot { color: var(--blue); margin-left: 0.75rem; font-size: 0.75rem; }
  .hero-layout { display: grid; grid-template-columns: 1fr 300px; gap: 4rem; align-items: center; padding: 5.5rem 0 6rem; }
  .hello { margin: 0 0 1.5rem; font-size: 1rem; }
  h1 { font: 700 clamp(2.25rem, 3.8vw, 4rem)/1.2 var(--sans); letter-spacing: -0.035em; margin: 0; }
  h1 .accent { color: var(--blue); font-weight: inherit; }
  .intro-row { display: flex; gap: 1.5rem; margin-top: 2.5rem; }
  .intro-marker { color: var(--blue); font-size: 2rem; line-height: 1; }
  .intro { max-width: 480px; margin: 0 0 1.5rem; font-size: 1.05rem; line-height: 1.75; color: var(--muted); }
  .text-link { display: inline-flex; align-items: center; gap: 2rem; padding: 0.75rem 0; border-bottom: 1px solid var(--line); font-size: 1rem; text-decoration: none; }
  .text-link:hover { color: var(--blue); border-color: var(--blue); }
  .system-note { background: var(--surface); border: 1px solid var(--line); border-radius: 6px; padding: 1.2rem 1.4rem 0.8rem; }
  .note-heading, .note-footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; font: 0.75rem var(--mono); letter-spacing: 0.03em; }
  .note-heading { padding-bottom: 1rem; border-bottom: 1px solid var(--line); }
  .system-diagram { padding: 1.8rem 0 0; }
  .system-layer { border: 1px solid var(--line); padding: 0.8rem 0.75rem; font: 600 1.1rem/1.4 var(--sans); background: var(--raised); }
  .system-layer > span { font: 0.75rem var(--mono); margin-right: 0.75rem; vertical-align: middle; color: var(--muted); }
  .system-layer small { display: block; font: 0.75rem var(--mono); margin: 0.75rem 0 0 1.55rem; color: var(--muted); }
  .service { margin: 0 0.75rem; border-color: var(--blue); color: var(--blue); }
  .data { margin: 0 1.4rem; }
  .connector { display: flex; align-items: center; justify-content: center; gap: 0.75rem; height: 1.7rem; color: var(--muted); }
  .connector span { font: 0.75rem var(--mono); }
  .hand-note { font: 500 1rem/1.6 var(--sans); text-align: center; color: var(--blue); margin: 1.4rem 0; }
  .note-footer { border-top: 1px solid var(--line); padding-top: 0.8rem; color: var(--muted); }
  .hero-bottom { align-items: center; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 1.3rem 0; }
  .hero-bottom a { text-decoration: none; }
  .hero-bottom a:hover { color: var(--blue); }
  .hero-bottom a span { margin-left: 1.5rem; }
  .slash { color: var(--blue); margin: 0 0.8rem; }
  .practice { padding: 5rem 0; }
  .section-top { display: flex; justify-content: space-between; align-items: flex-start; }
  .index { font: 0.75rem/1.5 var(--mono); letter-spacing: 0.05em; color: var(--blue); }
  .section-top p { font-size: 0.9rem; line-height: 1.6; margin: 0; color: var(--muted); }
  h2 { font: 650 clamp(1.8rem, 3vw, 2.75rem)/1.25 var(--sans); letter-spacing: -0.025em; margin: 2rem 0 3rem; }
  .profile { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; padding-top: 5rem; }
  .profile h3 { font: 650 1.8rem/1.3 var(--sans); margin: 1.5rem 0; }
  .profile-title > p { max-width: 300px; font-size: 1rem; line-height: 1.75; color: var(--muted); }
  .notes-preview { display: grid; grid-template-columns: 1fr 2fr auto; gap: 2rem; align-items: start; border-top: 1px solid var(--line); padding: 2.5rem 0 4rem; }
  .notes-preview h2 { font-size: 1.8rem; margin: 0 0 1rem; }
  .notes-preview p { font-size: 1rem; line-height: 1.75; color: var(--muted); margin: 0; }
  .notes-preview .text-link { margin-top: 0.75rem; }
  .contact { background: var(--contact); color: var(--ink); border-top: 1px solid var(--line); margin: 0 -4.945%; padding: 4.5rem 4.945%; }
  footer { display: flex; justify-content: space-between; gap: 1rem; padding: 1.5rem 0; font: 0.75rem/1.5 var(--mono); color: var(--muted); }
  footer a { color: var(--ink); text-decoration: none; }
  footer a span { margin-left: 0.75rem; }
  @media (min-width: 1600px) { .contact { margin-left: 0; margin-right: 0; } }
  @media (max-width: 1000px) { .hero-layout { gap: 2rem; grid-template-columns: 1fr 250px; } h1 { font-size: clamp(2rem, 3.8vw, 3rem); } .profile { gap: 2rem; } .notes-preview { grid-template-columns: 1fr 2fr; } .notes-preview .text-link { grid-column: 2; justify-self: start; } }
  @media (max-width: 700px) { .hero-meta { font-size: 0.75rem; } .hero-meta > span:first-child { max-width: 150px; } .hero-layout { grid-template-columns: 1fr; padding: 3.5rem 0 3rem; gap: 3rem; } h1 { font-size: clamp(2rem, 6.5vw, 2.75rem); } .system-note { width: min(100%, 320px); justify-self: center; } .hero-bottom { font-size: 0.75rem; } .hero-bottom > span { max-width: 180px; } .hero-bottom a span { margin-left: 0.75rem; } .practice { padding: 3.5rem 0; } .section-top p { font-size: 0.85rem; } .profile { grid-template-columns: 1fr; gap: 1.5rem; padding-top: 3rem; } .profile-title > p { max-width: 440px; } .notes-preview { grid-template-columns: 1fr; gap: 1.5rem; } .notes-preview .text-link { grid-column: 1; } .contact { padding-top: 3rem; padding-bottom: 3rem; } footer { flex-wrap: wrap; } footer > span:last-child { width: 100%; } }
</style>
