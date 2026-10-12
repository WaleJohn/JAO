import { CalendarCheck, LockKeyhole, Mail, MessageSquareText, ShieldCheck, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactCards = [
  { id: "schedule", icon: CalendarCheck, title: "Schedule an Appointment", body: "Request time for tax preparation, bookkeeping, payroll, tax planning, or a financial consultation.", button: "Request appointment" },
  { id: "upload", icon: Upload, title: "Upload Documents", body: "Prepare W-2s, 1099s, receipts, identification, business records, and other tax documents for secure submission.", button: "Start upload" },
  { id: "portal", icon: LockKeyhole, title: "Client Portal", body: "Access messages, document status, tax information, completed documents, and service updates when portal access is enabled.", button: "Open portal" }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge variant="gold" className="mb-6">Contact JAO</Badge>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <h1 className="font-serif text-4xl font-bold sm:text-5xl">
              Get help from a tax professional and move forward with confidence.
            </h1>
            <p className="text-lg leading-8 text-white/75">
              Reach out for tax preparation, business taxes, bookkeeping, payroll, planning,
              financial services, document upload, or portal support.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {contactCards.map((item) => (
              <Card id={item.id} key={item.title} className="scroll-mt-32 rounded-lg">
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent text-ink">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                  <Button className="w-fit" variant={item.id === "schedule" ? "gold" : "default"}>
                    {item.button}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-lg shadow-soft">
            <CardHeader>
              <MessageSquareText className="mb-4 h-8 w-8 text-gold" />
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input className="h-11 rounded-md border px-3 text-sm outline-none ring-gold/30 focus:ring-2" placeholder="Your full name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input className="h-11 rounded-md border px-3 text-sm outline-none ring-gold/30 focus:ring-2" placeholder="you@example.com" type="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Service Needed
                  <select className="h-11 rounded-md border px-3 text-sm outline-none ring-gold/30 focus:ring-2" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Individual tax preparation</option>
                    <option>Business tax preparation</option>
                    <option>Bookkeeping</option>
                    <option>Payroll</option>
                    <option>Tax planning</option>
                    <option>Financial services</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Message
                  <textarea className="min-h-32 rounded-md border px-3 py-3 text-sm outline-none ring-gold/30 focus:ring-2" placeholder="Tell us how we can help." />
                </label>
                <Button type="submit" variant="gold" size="lg">Contact a Tax Professional</Button>
              </form>
              <div className="mt-6 grid gap-3 border-t pt-6 text-sm text-muted-foreground">
                <p className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> wale_taxservices@outlook.com</p>
                <p className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-gold" /> Do not send sensitive tax documents by standard email. Use the secure upload path when available.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
