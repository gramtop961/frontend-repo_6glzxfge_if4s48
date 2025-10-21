import { useState } from "react";
import { Copy, Check } from "lucide-react";

const snippets = {
  javascript: `// install
npm i @vanish/auth

// initialize once
import { init } from '@vanish/auth'
init({ projectId: 'vanish_123', baseUrl: process.env.VANISH_URL })

// trigger biometric login anywhere
await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable()
await init().login()`,
  react: `// App.jsx
import { VanishProvider, useVanish } from '@vanish/react'

export default function App() {
  return (
    <VanishProvider projectId="vanish_123">
      <LoginButton />
    </VanishProvider>
  )
}

function LoginButton(){
  const { login, isReady } = useVanish()
  return <button disabled={!isReady} onClick={login}>Sign in with Passkey</button>
}`,
  node: `// server.js
import express from 'express'
import { webhook, verify } from '@vanish/server'

const app = express()
app.post('/vanish/webhook', webhook({ secret: process.env.VANISH_WEBHOOK_SECRET }))
app.get('/session', verify(), (req, res) => res.json({ user: req.user }))
app.listen(3000)`,
};

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg border border-white/10 bg-[#0b0b0f] p-4 text-[13px] leading-relaxed text-white/90">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/90 backdrop-blur transition hover:bg-white/10"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function CodeSamples() {
  const [active, setActive] = useState("javascript");

  return (
    <section id="code" className="bg-gradient-to-b from-black/0 to-black/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">One line to add biometrics</h2>
            <p className="mt-1 text-sm text-white/70">Drop‑in SDKs for your stack. Works with passkeys, Face ID, Touch ID, and more.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1">
            {Object.keys(snippets).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-md px-3 py-1.5 text-xs capitalize transition ${
                  active === key ? "bg-white text-gray-900" : "text-white/80 hover:bg-white/10"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <CodeBlock code={snippets[active]} />
      </div>
    </section>
  );
}
