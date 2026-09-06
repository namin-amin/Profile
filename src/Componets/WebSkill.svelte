<div class="skills-grid">
  <article class="skill-card">
    <span class="number">01</span>
    <span class="icon">↗</span>
    <span class="card-copy"><strong>Backend systems</strong><small>.NET Core microservices, REST API design, SQL performance, background jobs, and SOAP-to-REST integration.</small><span class="tags">.NET · C# · SQL</span></span>
  </article>
  <article class="skill-card">
    <span class="number">02</span>
    <span class="icon">⌂</span>
    <span class="card-copy"><strong>Full-stack products</strong><small>Business applications and user-facing workflows built with Angular, React, TypeScript, and .NET.</small><span class="tags">Angular · React · TypeScript</span></span>
  </article>
  <article class="skill-card">
    <span class="number">03</span>
    <span class="icon">⌁</span>
    <span class="card-copy"><strong>Cloud & AI</strong><small>Event-driven Azure services and provider-agnostic AI features using Microsoft Agent SDK and Semantic Kernel.</small><span class="tags">Azure · Service Bus · Cosmos DB</span></span>
  </article>
</div>

<style>
  .skills-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
  .skill-card {
    min-height: 19rem;
    padding: 1.4rem;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    text-align: left;
    border: 1px solid rgba(245, 240, 232, 0.35);
    border-radius: 1rem;
    background: transparent;
    color: #f5f0e8;
    transition: transform 220ms ease, background 220ms ease;
  }
  .skill-card:hover { transform: translateY(-0.35rem); background: rgba(245, 240, 232, 0.08); }
  .number { color: #efaa63; font: 0.7rem "DM Mono", monospace; }
  .icon { grid-column: 1 / -1; font-size: 3rem; color: #efaa63; }
  .card-copy { display: flex; flex-direction: column; gap: 0.7rem; align-self: end; }
  strong { font-size: 1.7rem; letter-spacing: -0.06em; }
  small { max-width: 18rem; color: #a9b9b7; font-size: 0.8rem; line-height: 1.6; }
  .tags { color: #efaa63; font: 0.62rem "DM Mono", monospace; line-height: 1.5; }
  @media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr; } .skill-card { min-height: 15rem; } }
</style>
