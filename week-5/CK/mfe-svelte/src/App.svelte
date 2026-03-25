<script>
  import { onDestroy } from 'svelte';
  import { send, events$ } from '@mfe-demo/event-bus';

  const SOURCE = 'svelte';

  let color = '#f97316';
  let messages = [];

  const sub = events$.subscribe((msg) => {
    if (msg.source === SOURCE) return;
    messages = [{ ...msg }, ...messages].slice(0, 50);
  });

  onDestroy(() => sub.unsubscribe());

  function broadcast() {
    send('color', color, SOURCE);
  }
</script>

<div class="mfe mfe-svelte">
  <header class="mfe-hdr">
    <span class="badge">Svelte</span>
    <h2>Svelte MFE</h2>
  </header>
  <div class="mfe-grid">
    <section class="panel send">
      <h3>Send</h3>
      <p class="hint">Pick a color and broadcast.</p>
      <div class="row">
        <input type="color" bind:value={color} aria-label="Color" />
        <code class="hex">{color}</code>
        <button type="button" class="primary" on:click={broadcast}>Send</button>
      </div>
    </section>
    <section class="panel recv">
      <h3>Receive</h3>
      <p class="hint">Messages from React &amp; Angular (via RxJS).</p>
      <ul class="msg-list">
        {#if messages.length === 0}
          <li class="empty">No messages yet</li>
        {:else}
          {#each messages as m (m.timestamp + m.source + JSON.stringify(m.payload))}
            <li>
              <strong>{m.source}</strong>
              <span class="type">{m.type}</span>
              <code>{JSON.stringify(m.payload)}</code>
            </li>
          {/each}
        {/if}
      </ul>
    </section>
  </div>
</div>

<style>
  .mfe-svelte {
    --accent: #fb923c;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 8px;
    overflow: hidden;
    margin: 0.75rem;
  }
  .mfe-hdr {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(90deg, #2d1f14 0%, #0d1117 100%);
    border-bottom: 1px solid #30363d;
  }
  .badge {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    background: var(--accent);
    color: #0d1117;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 700;
  }
  .mfe-hdr h2 {
    margin: 0;
    font-size: 1.1rem;
  }
  .mfe-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: 220px;
  }
  @media (max-width: 720px) {
    .mfe-grid {
      grid-template-columns: 1fr;
    }
  }
  .panel {
    padding: 1rem;
    border-right: 1px solid #30363d;
  }
  .panel.recv {
    border-right: none;
  }
  .panel h3 {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    color: var(--accent);
  }
  .hint {
    margin: 0 0 0.75rem;
    font-size: 0.8rem;
    color: #8b949e;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  input[type='color'] {
    width: 3rem;
    height: 2rem;
    border: 1px solid #30363d;
    border-radius: 6px;
    cursor: pointer;
    background: transparent;
  }
  .hex {
    font-size: 0.85rem;
    background: #161b22;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
  button {
    background: #21262d;
    border: 1px solid #30363d;
    color: #e6edf3;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    cursor: pointer;
  }
  button.primary {
    background: #238636;
    border-color: #2ea043;
  }
  button.primary:hover {
    background: #2ea043;
  }
  .msg-list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 200px;
    overflow: auto;
    font-size: 0.8rem;
  }
  .msg-list li {
    padding: 0.35rem 0;
    border-bottom: 1px solid #21262d;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.75rem;
    align-items: baseline;
  }
  .type {
    color: #d29922;
    font-size: 0.75rem;
  }
  .msg-list code {
    background: #161b22;
    padding: 0.1rem 0.35rem;
    border-radius: 4px;
    font-size: 0.75rem;
  }
  .empty {
    color: #484f58;
    font-style: italic;
  }
</style>
