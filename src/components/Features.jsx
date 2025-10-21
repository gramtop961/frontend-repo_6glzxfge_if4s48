import { Zap, Code, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Frictionless by design",
    desc: "Users sign in with a glance or touch. No passwords to forget, reset, or leak.",
  },
  {
    icon: Code,
    title: "One‑line integration",
    desc: "Install, initialize, and start authenticating in minutes with drop‑in SDKs.",
  },
  {
    icon: Shield,
    title: "Hardened security",
    desc: "Phishing‑resistant passkeys built on WebAuthn, backed by modern crypto.",
  },
  {
    icon: Sparkles,
    title: "Developer‑loved",
    desc: "Clean APIs, great docs, sandbox keys, and first‑class TypeScript support.",
  },
];

export default function Features() {
  return (
    <section className="py-16" id="waitlist">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold text-white">What you get</h2>
          <p className="mt-2 text-sm text-white/70">
            Everything you need to ship secure, delightful, passwordless auth — nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-fuchsia-500/10" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">Join the waitlist</h3>
              <p className="mt-1 text-sm text-white/70">Be first to get access and migration support when we launch.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const email = fd.get("email");
                if (email) alert(`Thanks! We'll reach out to ${email}.`);
              }}
              className="flex w-full max-w-md items-center gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:opacity-90"
              >
                Get early access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
