import React, { useEffect, useState } from 'react';
import { send, events$ } from '@mfe-demo/event-bus';

const SOURCE = 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const sub = events$.subscribe((msg) => {
      if (msg.source === SOURCE) return;
      setMessages((prev) => [{ ...msg, id: `${msg.timestamp}-${Math.random()}` }, ...prev].slice(0, 50));
    });
    return () => sub.unsubscribe();
  }, []);

  const broadcast = () => {
    send('counter', count, SOURCE);
  };

  return (
    <div className="mfe mfe-react">
      <header className="mfe-hdr">
        <span className="badge">React</span>
        <h2>React MFE</h2>
      </header>
      <div className="mfe-grid">
        <section className="panel send">
          <h3>Send</h3>
          <p className="hint">Adjust counter and broadcast to other MFEs.</p>
          <div className="row">
            <button type="button" onClick={() => setCount((c) => c - 1)} aria-label="Decrement">
              −
            </button>
            <span className="value">{count}</span>
            <button type="button" onClick={() => setCount((c) => c + 1)} aria-label="Increment">
              +
            </button>
            <button type="button" className="primary" onClick={broadcast}>
              Send
            </button>
          </div>
        </section>
        <section className="panel recv">
          <h3>Receive</h3>
          <p className="hint">Messages from Angular &amp; Svelte (via RxJS).</p>
          <ul className="msg-list">
            {messages.length === 0 ? (
              <li className="empty">No messages yet</li>
            ) : (
              messages.map((m) => (
                <li key={m.id}>
                  <strong>{m.source}</strong>
                  <span className="type">{m.type}</span>
                  <code>{JSON.stringify(m.payload)}</code>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
      <style>{`
        .mfe-react { --accent: #58a6ff; background: #0d1117; border: 1px solid #30363d; border-radius: 8px; overflow: hidden; margin: 0.75rem; }
        .mfe-react .mfe-hdr { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: linear-gradient(90deg, #1f2a3d 0%, #0d1117 100%); border-bottom: 1px solid #30363d; }
        .mfe-react .badge { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; background: var(--accent); color: #0d1117; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700; }
        .mfe-react .mfe-hdr h2 { margin: 0; font-size: 1.1rem; }
        .mfe-react .mfe-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; min-height: 220px; }
        @media (max-width: 720px) { .mfe-react .mfe-grid { grid-template-columns: 1fr; } }
        .mfe-react .panel { padding: 1rem; border-right: 1px solid #30363d; }
        .mfe-react .panel.recv { border-right: none; }
        .mfe-react .panel h3 { margin: 0 0 0.5rem; font-size: 0.95rem; color: var(--accent); }
        .mfe-react .hint { margin: 0 0 0.75rem; font-size: 0.8rem; color: #8b949e; }
        .mfe-react .row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }
        .mfe-react .value { font-variant-numeric: tabular-nums; font-size: 1.25rem; min-width: 2rem; text-align: center; }
        .mfe-react button { background: #21262d; border: 1px solid #30363d; color: #e6edf3; padding: 0.4rem 0.75rem; border-radius: 6px; cursor: pointer; }
        .mfe-react button:hover { background: #30363d; }
        .mfe-react button.primary { background: #238636; border-color: #2ea043; }
        .mfe-react button.primary:hover { background: #2ea043; }
        .mfe-react .msg-list { list-style: none; margin: 0; padding: 0; max-height: 200px; overflow: auto; font-size: 0.8rem; }
        .mfe-react .msg-list li { padding: 0.35rem 0; border-bottom: 1px solid #21262d; display: flex; flex-wrap: wrap; gap: 0.35rem 0.75rem; align-items: baseline; }
        .mfe-react .msg-list .type { color: #d29922; font-size: 0.75rem; }
        .mfe-react .msg-list code { background: #161b22; padding: 0.1rem 0.35rem; border-radius: 4px; font-size: 0.75rem; }
        .mfe-react .empty { color: #484f58; font-style: italic; }
      `}</style>
    </div>
  );
}
