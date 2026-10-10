import Link from "next/link";
import { CalendarCheck, LockKeyhole, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="JAO Tax & Financial Services home">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-base font-black text-ink">
            JAO
          </span>
          <span className="hidden text-sm font-semibold leading-tight sm:block">
            Tax & Financial<br />Services
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/78 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
            <Link href="/contact#upload"><Upload className="mr-2 h-4 w-4" /> Upload</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
            <Link href="/contact#portal"><LockKeyhole className="mr-2 h-4 w-4" /> Portal</Link>
          </Button>
          <Button asChild variant="gold" size="sm">
            <Link href="/contact#schedule"><CalendarCheck className="mr-2 h-4 w-4" /> Schedule</Link>
          </Button>
        </div>
        <Button asChild variant="gold" size="sm" className="lg:hidden">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
      <nav className="grid grid-cols-4 border-t border-white/10 text-center text-xs font-semibold text-white/80 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="px-2 py-3 hover:bg-white/10 hover:text-white">
            {item.label.replace(" Us", "")}
          </Link>
        ))}
      </nav>
    </header>
  );
}
