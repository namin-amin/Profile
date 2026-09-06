<script lang="ts">
  import { onMount } from "svelte";
  import Router, { location, link } from "svelte-spa-router";
  import { routes } from "./routes/routes";

  const baseUrl = import.meta.env.BASE_URL;
  let navLink = "intro";
  let scrollPosition = 0;

  onMount(() => {
    const updateActiveSection = () => (scrollPosition = window.scrollY);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  });

  $: if ($location.endsWith("blog/") || $location.includes("/blogdetail")) {
    navLink = "blog";
  } else if (scrollPosition < window.innerHeight * 0.8) {
    navLink = "intro";
  } else if (scrollPosition < window.innerHeight * 1.8) {
    navLink = "skills";
  } else {
    navLink = "contact";
  }
</script>

<nav aria-label="Main navigation">
  <a class="wordmark" href={baseUrl} use:link>NA<span>/</span></a>
  <ul class="navbar">
    <li><a href="#intro" class:active={navLink === "intro"}>Home</a></li>
    <li><a href="#skills" class:active={navLink === "skills"}>Skills</a></li>
    <li><a href="#contact" class:active={navLink === "contact"}>Contact</a></li>
    <li><a href={`${baseUrl}blog/`} class:active={navLink === "blog"} use:link>Notes</a></li>
  </ul>
</nav>

<Router {routes} />

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap");
  :global(*) { box-sizing: border-box; }
  :global(html) { scroll-behavior: smooth; scroll-padding-top: 5.5rem; }
  :global(body) { margin: 0; font-family: "Manrope", sans-serif; color: #18323a; background: #f5f0e8; }
  nav { width: min(100% - 3rem, 1180px); position: fixed; z-index: 100; top: 1rem; left: 50%; transform: translateX(-50%); height: 3.8rem; padding: 0.5rem 0.7rem 0.5rem 1.2rem; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(24, 50, 58, 0.15); border-radius: 999px; background: rgba(245, 240, 232, 0.88); backdrop-filter: blur(16px); box-shadow: 0 12px 30px rgba(24, 50, 58, 0.08); }
  .wordmark { color: #18323a; font-size: 1.2rem; font-weight: 800; letter-spacing: -0.08em; text-decoration: none; }
  .wordmark span { color: #e56b4b; }
  .navbar { display: flex; gap: 0.3rem; margin: 0; padding: 0; align-items: center; }
  li { list-style: none; }
  .navbar a { color: #577078; padding: 0.7rem 0.9rem; border-radius: 999px; text-decoration: none; font-size: 0.78rem; font-weight: 700; transition: background 180ms ease, color 180ms ease; }
  .navbar a:hover, .navbar a.active { color: #18323a; background: #e7dfd3; }
  @media (max-width: 560px) { nav { width: calc(100% - 1.5rem); } .navbar a { padding: 0.65rem 0.45rem; font-size: 0.7rem; } .wordmark { font-size: 1rem; } }
</style>
