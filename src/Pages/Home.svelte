<script lang="ts">
  import About from "../Componets/About.svelte";
  import Attributes from "../Componets/Attributes.svelte";
  import WebSkill from "../Componets/WebSkill.svelte";
</script>

<main class="container">
  <section class="hero page" id="intro">
    <div class="hero-copy">
      <p class="eyebrow">Full-stack developer <span>/</span> backend-focused <span>/</span> Mangaluru, India</p>
      <h1>Full-stack craft. Backend depth.</h1>
      <p class="intro">I’m Navaneesh Amin. I build complete product experiences, with a particular focus on .NET services, cloud integrations, and AI-enabled backend capabilities.</p>
      <div class="hero-actions">
        <a class="button primary" href="#skills">See capabilities <span>↘</span></a>
        <a class="button quiet" href="mailto:navaneesh185@gmail.com">Start a conversation <span>↗</span></a>
      </div>
    </div>
    <div class="hero-stamp" aria-hidden="true"><span>NA</span><small>FULL-STACK<br />BACKEND FOCUS</small></div>
  </section>

  <section class="skills page" id="skills">
    <div class="section-heading"><p class="eyebrow">01 / What I do</p><h2>From interface to API to reliable release.</h2></div>
    <WebSkill />
    <div class="profile-details"><Attributes /></div>
  </section>

  <section class="contact page" id="contact">
    <div class="section-heading"><p class="eyebrow">02 / Say hello</p><h2>Have a good problem?</h2></div>
    <div class="contact-wrap">
      <About />
    </div>
  </section>
</main>

<style>
  .page { min-height: 100vh; padding: 8rem max(1.5rem, calc((100vw - 1180px) / 2)) 5rem; }
  .hero { min-height: 100svh; display: flex; align-items: center; justify-content: space-between; gap: 4rem; background: #f5f0e8; }
  .hero-copy { max-width: 760px; padding-top: 3rem; }
  .eyebrow { color: #e56b4b; font: 500 0.72rem "DM Mono", monospace; letter-spacing: 0.08em; text-transform: uppercase; }
  .eyebrow span { color: #18323a; }
  h1, h2 { margin: 0; letter-spacing: -0.06em; line-height: 0.98; }
  h1 { max-width: 780px; color: #18323a; font-size: clamp(3.7rem, 8vw, 7.4rem); font-weight: 800; }
  .intro { max-width: 580px; margin: 2rem 0; color: #577078; font-size: 1.12rem; line-height: 1.7; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; }
  .button { display: inline-flex; align-items: center; gap: 1rem; padding: 0.95rem 1.2rem; border-radius: 999px; text-decoration: none; font-size: 0.82rem; font-weight: 800; }
  .button span { font-size: 1.2rem; }
  .primary { color: #f5f0e8; background: #18323a; }
  .quiet { color: #18323a; border: 1px solid rgba(24, 50, 58, 0.2); }
  .hero-stamp { width: 11rem; height: 11rem; flex: 0 0 auto; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid #e56b4b; border-radius: 50%; color: #e56b4b; transform: rotate(10deg); }
  .hero-stamp span { font-size: 3.2rem; font-weight: 800; letter-spacing: -0.1em; }
  .hero-stamp small { font: 0.5rem/1.4 "DM Mono", monospace; text-align: center; }
  .skills { background: #18323a; color: #f5f0e8; }
  .section-heading { max-width: 920px; margin: 0 auto 3.5rem; }
  .section-heading h2 { max-width: 700px; font-size: clamp(2.4rem, 5vw, 5rem); }
  .skills :global(.skills-grid) { max-width: 920px; margin: 0 auto; }
  .skills :global(.eyebrow) { color: #efaa63; }
  .contact { background: #efaa63; }
  .contact :global(.eyebrow) { color: #18323a; }
  .contact-wrap { max-width: 760px; }
  .profile-details { max-width: 920px; margin: 2rem auto 0; padding: 0 1.5rem; border: 1px solid rgba(245, 240, 232, 0.25); border-radius: 1rem; background: rgba(245, 240, 232, 0.05); }
  @media (max-width: 640px) { .hero { align-items: flex-start; flex-direction: column; padding-top: 10rem; gap: 3rem; } .hero-stamp { align-self: flex-end; width: 8rem; height: 8rem; } .hero-stamp span { font-size: 2.2rem; } .page { padding-left: 1.5rem; padding-right: 1.5rem; } .section-heading { display: block; margin-bottom: 2.5rem; } }
</style>
