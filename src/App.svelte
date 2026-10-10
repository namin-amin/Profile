<script lang="ts">
  import { onMount, tick } from "svelte";
  import Router, { location, link, push } from "svelte-spa-router";
  import { routes } from "./routes/routes";
  let activeSection = "intro";
  let pendingSection: string | null = null;
  $: isNotes = $location.includes("/blog");
  function scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    activeSection = section;
  }
  async function goToSection(event: MouseEvent, section: string) {
    event.preventDefault();
    if ($location !== "/") {
      pendingSection = section;
      await push("/");
      return;
    }
    scrollToSection(section);
  }
  async function finishNavigation() {
    await tick();
    if (pendingSection) {
      scrollToSection(pendingSection);
      pendingSection = null;
    }
  }
  onMount(() => {
    const update = () => {
      for (const id of ["contact", "skills", "intro"]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 180) { activeSection = id; break; }
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  });
</script>
<a class="skip-link" href="#main-content" onclick={(event) => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a>
<nav aria-label="Main navigation">
  <a class="wordmark" href="/" use:link aria-label="Navaneesh Amin home">na<span>.</span></a>
  <span class="nav-caption">NAVANEESH AMIN <span> / SOFTWARE ENGINEER</span></span>
  <div class="navbar">
    <a href="#/" onclick={(event) => goToSection(event, 'intro')} class:active={!isNotes && activeSection === 'intro'}>Intro</a>
    <a href="#/" onclick={(event) => goToSection(event, 'skills')} class:active={!isNotes && activeSection === 'skills'}>Practice</a>
    <a href="/blog/" use:link class:active={isNotes}>Notes <span>↗</span></a>
    <a href="#/" onclick={(event) => goToSection(event, 'contact')} class:active={!isNotes && activeSection === 'contact'}>Contact</a>
  </div>
</nav>
<div id="main-content" tabindex="-1"><Router {routes} on:routeLoaded={finishNavigation} /></div>
<style>
  :global(*) { box-sizing: border-box; }
  :global(:root) { --paper: #151b24; --surface: #1d2633; --raised: #253142; --ink: #e2e8f0; --muted: #acb9ca; --blue: #8bb4f8; --line: #3c495b; --contact: #1b2b43; color-scheme: dark; --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; --mono: ui-monospace, SFMono-Regular, Consolas, monospace; }
  :global(html) { font-size: 112.5%; background: var(--paper); scroll-behavior: smooth; scroll-padding-top: 6rem; }
  :global(body) { margin: 0; font-family: var(--sans); line-height: 1.6; color: var(--ink); background: var(--paper); -webkit-font-smoothing: antialiased; }
  :global(::selection) { background: var(--blue); color: var(--paper); }
  :global(a) { color: inherit; }
  :global(a:focus-visible), :global(button:focus-visible) { outline: 2px solid var(--blue); outline-offset: 6px; }
  :global(#main-content:focus) { outline: none; }
  nav { position: sticky; top: 0; z-index: 100; margin: 0 4.5%; height: 86px; display: flex; align-items: center; gap: 1.5rem; border-bottom: 1px solid var(--line); background: var(--paper); }
  .wordmark { font: 700 2rem var(--sans); letter-spacing: -0.045em; text-decoration: none; line-height: 1; }
  .wordmark span { color: var(--blue); }
  .nav-caption { font: 600 0.75rem/1.6 var(--sans); letter-spacing: 0.06em; }
  .nav-caption span { color: var(--muted); }
  .navbar { display: flex; gap: 2rem; margin-left: auto; }
  .navbar a { position: relative; padding: 0.75rem 0; text-decoration: none; font-size: 1rem; }
  .navbar a:hover, .navbar a.active { color: var(--blue); }
  .navbar a.active::after { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: var(--blue); }
  .navbar a span { font-size: 0.75rem; }
  .skip-link { position: fixed; top: -100px; left: 1rem; z-index: 200; background: var(--raised); color: var(--ink); padding: 1rem; }
  .skip-link:focus { top: 1rem; }
  @media (max-width: 850px) { .nav-caption span { display: none; } .navbar { gap: 1.3rem; } }
  @media (max-width: 560px) { nav { height: 72px; gap: 1rem; } .nav-caption { display: none; } .navbar { gap: 0.75rem; } .navbar a { font-size: 0.85rem; } }
  @media (prefers-reduced-motion: reduce) { :global(html) { font-size: 112.5%; background: var(--paper); scroll-behavior: auto; } :global(*), :global(*::before), :global(*::after) { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
</style>
