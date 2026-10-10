import Link from "next/link";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  Landmark,
  ReceiptText,
  Users
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: FileCheck2, title: "Individual Tax Preparation", body: "Personal tax filing support for W-2 employees, families, retirees, students, and multi-income households." },
  { icon: BriefcaseBusiness, title: "Business Tax Preparation", body: "Tax preparation for sole proprietors, LLC owners, independent contractors, gig workers, and small businesses." },
  { icon: Calculator, title: "Tax Planning", body: "Forward-looking guidance to help clients prepare for deadlines, estimated taxes, deductions, credits, and cash flow." },
  { icon: BookOpenCheck, title: "Bookkeeping", body: "Organized financial records, monthly support, and business reporting for owners who need cleaner books." },
  { icon: Users, title: "Payroll Services", body: "Payroll support for small businesses that need dependable processing and compliance assistance." },
  { icon: Landmark, title: "Financial Services", body: "Practical consulting to improve financial management and support informed decisions." },
  { icon: ReceiptText, title: "Forms & Checklists", body: "Clear document guidance for W-2s, 1099s, receipts, IDs, business records, and tax-season preparation." },
  { icon: CreditCard, title: "Online Payments", body: "A future-ready path for secure payment processing for professional service fees." },
  { icon: ClipboardCheck, title: "Service Requests", body: "Structured request flows for tax preparation, bookkeeping, payroll, planning, and business support." }
];

const faqs = [
  {
    question: "What documents should I prepare?",
    answer: "Common items include W-2s, 1099s, receipts, identification, prior-year returns, business income and expense records, and any IRS or state notices."
  },
  {
    question: "Can business clients request ongoing support?",
    answer: "Yes. Business clients can request tax preparation, bookkeeping, payroll, planning, and financial support based on their current needs."
  },
  {
    question: "How should sensitive documents be sent?",
    answer: "Use the secure upload or portal workflow when available. Standard email should not be used for sensitive tax or financial documents."
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge variant="gold" className="mb-6">Our services</Badge>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <h1 className="font-serif text-4xl font-bold sm:text-5xl">
              Complete support for tax preparation, filing, planning, and business finances.
            </h1>
            <p className="text-lg leading-8 text-white/75">
              Choose the service path that fits your needs, then schedule an appointment,
              upload documents, or contact a tax professional for next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="rounded-lg transition hover:-translate-y-0.5 hover:shadow-soft">
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent text-ink">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">{service.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/65">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-ink p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              Start with an appointment or send a service request.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              JAO can support personal tax needs, business filings, bookkeeping, payroll,
              planning, payments, and document preparation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link href="/contact#schedule">Schedule</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink">
              <Link href="/contact#upload">Upload Documents</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">FAQ and resources</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Helpful answers before you book.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-lg">
                <CardHeader>
                  <CardTitle className="text-lg leading-6">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{faq.answer}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
