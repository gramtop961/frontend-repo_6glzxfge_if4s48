import { Shield, Lock, CheckCircle } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-black/30 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="flex items-center gap-3 text-white/80">
            <Shield className="h-5 w-5 text-emerald-400" />
            <p className="text-sm">Built on WebAuthn & FIDO2 standards</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Lock className="h-5 w-5 text-indigo-400" />
            <p className="text-sm">Phishing‑resistant passkeys by default</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="h-5 w-5 text-fuchsia-400" />
            <p className="text-sm">SOC2‑ready practices & encryption at rest</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-white/50">
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Trusted by early teams at Fintech, SaaS, Crypto</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Edge‑ready • EU data residency</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">Open SDKs • Drop‑in UI</span>
        </div>
      </div>
    </section>
  );
}
