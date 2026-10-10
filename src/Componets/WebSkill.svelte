<div class="skills-list">
  <article><span class="number">01</span><h3>Backend systems</h3><p>.NET Core microservices, REST APIs, SQL performance, background jobs, and SOAP-to-REST integration.</p><span class="stack">.NET / C# / SQL</span></article>
  <article><span class="number">02</span><h3>Full-stack products</h3><p>Business applications and user-facing workflows, connecting thoughtful interfaces to dependable services.</p><span class="stack">ANGULAR / REACT / TYPESCRIPT</span></article>
  <article><span class="number">03</span><h3>Cloud &amp; AI</h3><p>Event-driven Azure services and provider-agnostic AI features with Microsoft Agent SDK and Semantic Kernel.</p><span class="stack">AZURE / SERVICE BUS / COSMOS DB</span></article>
</div>
<style>
  article { display: grid; grid-template-columns: 40px 1fr 1.25fr 0.85fr; align-items: baseline; gap: 1.8rem; border-top: 1px solid var(--line); padding: 2rem 0; }
  article:last-child { border-bottom: 1px solid var(--line); }
  .number { font: 0.75rem var(--mono); color: var(--blue); }
  h3 { font: 650 1.25rem/1.4 var(--sans); margin: 0; letter-spacing: -0.02em; }
  p { font-size: 1rem; line-height: 1.8; margin: 0; color: var(--muted); max-width: 350px; }
  .stack { font: 0.75rem/1.8 var(--mono); color: var(--blue); justify-self: end; }
  @media (max-width: 1000px) { article { grid-template-columns: 30px 1fr 1.2fr; gap: 1rem; } .stack { grid-column: 3; justify-self: start; } }
  @media (max-width: 600px) { article { grid-template-columns: 25px 1fr; padding: 1.5rem 0; gap: 0.8rem; } h3 { font-size: 1.25rem; } p, .stack { grid-column: 2; } p { max-width: none; } }
</style>
