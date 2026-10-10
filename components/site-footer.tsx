import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold font-black text-ink">
              JAO
            </span>
            <span className="font-semibold">JAO Tax & Financial Services</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/70">
            Accurate, confidential tax preparation and financial support for individuals,
            families, self-employed professionals, and growing businesses.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Quick Links</h2>
          <div className="grid gap-2 text-sm text-white/72">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact#schedule" className="hover:text-white">Schedule an Appointment</Link>
            <Link href="/contact#upload" className="hover:text-white">Upload Documents</Link>
            <Link href="/contact#portal" className="hover:text-white">Client Portal</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Contact</h2>
          <div className="grid gap-3 text-sm text-white/72">
            <p className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> jao_taxservices@outlook.com</p>
            <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Serving U.S.-based personal and business clients</p>
            <p className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-gold" /> Secure, private, and client-focused</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
        Copyright 2026 JAO Tax & Financial Services. All rights reserved.
      </div>
    </footer>
  );
}
