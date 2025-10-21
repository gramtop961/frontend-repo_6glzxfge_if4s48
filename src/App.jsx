import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import CodeSamples from "./components/CodeSamples";
import Features from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <header className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-xs font-bold text-gray-900">V</span>
            <span className="text-sm font-semibold tracking-wide text-white/90">Vanish</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#code" className="transition hover:text-white">Docs</a>
            <a href="#waitlist" className="transition hover:text-white">Pricing</a>
            <a href="#waitlist" className="transition hover:text-white">Changelog</a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Sign up
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <CodeSamples />
        <Features />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-xs text-white/60">
          © {new Date().getFullYear()} Vanish Auth. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
