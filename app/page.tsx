import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  FileText,
  LockKeyhole,
  MessageSquareText,
  Quote,
  ShieldCheck,
  Upload
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  { href: "/contact#schedule", label: "Schedule", icon: CalendarCheck },
  { href: "/contact#upload", label: "Upload Documents", icon: Upload },
  { href: "/contact#portal", label: "Client Portal", icon: LockKeyhole },
  { href: "/contact", label: "Contact Us", icon: MessageSquareText }
];

const highlights = [
  "Individual and family tax preparation",
  "Business taxes, bookkeeping, and payroll support",
  "Tax planning and financial consulting",
  "Secure document exchange and responsive service"
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-tax-office.png"
            alt="Professional financial desk with tax documents and dashboard"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/18" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-138px)] max-w-7xl content-center px-4 py-16 sm:px-6 md:min-h-[calc(100vh-74px)] lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-6">Secure tax and financial support</Badge>
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              JAO Tax & Financial Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Accurate, reliable, and confidential tax preparation, filing assistance,
              bookkeeping, payroll, tax planning, and financial consulting for clients who
              want clarity without the stress.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gold">
                <Link href="/contact#schedule">Schedule Your Tax Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-ink">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/65">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Built around trust</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              A simpler, more secure way to manage tax season.
            </h2>
            <p className="mt-5 text-muted-foreground leading-7">
              The website experience is designed for smartphones, tablets, laptops, and
              desktops, with clear steps for every client type: learn, schedule, upload,
              communicate, pay, and track progress.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <Card key={item} className="rounded-lg">
                <CardContent className="flex gap-3 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="font-medium leading-6">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Client confidence</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Professional service with privacy at the center.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Confidential by design", body: "Sensitive financial information is treated with care, secure workflows, and clear privacy expectations." },
              { icon: FileText, title: "Clear document process", body: "Clients know what to prepare, where to upload, and what happens next during tax preparation." },
              { icon: CalendarCheck, title: "Actionable next steps", body: "Appointment, upload, portal, payment, and contact paths are visible across the site." }
            ].map((item) => (
              <Card key={item.title} className="rounded-lg">
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{item.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/65">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow">Client-ready experience</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Clear steps, helpful reminders, and credibility from the first visit.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              The site is structured so future tax updates, reviews, promotions, and
              educational content can be added without redesigning the experience.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Tax-season notices", body: "Important deadline reminders and missing-document alerts can be featured prominently during filing season." },
              { title: "Client reviews", body: "Testimonials help establish trust for referral visitors, local search traffic, and first-time clients." }
            ].map((item) => (
              <Card key={item.title} className="rounded-lg bg-white">
                <CardHeader>
                  <Quote className="mb-4 h-7 w-7 text-gold" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{item.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
