import { Fingerprint, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-500/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Fingerprint className="h-3.5 w-3.5" />
          Passkeys • Face ID • Touch ID
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Auth that disappears.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Ship passwordless authentication powered by modern biometrics in a single line.
          Delight users, harden security, and erase friction from your signup and login flows.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#code"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:opacity-90"
          >
            See the 1‑line install
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
