import { Award, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  { icon: ShieldCheck, title: "Confidentiality", body: "Every workflow is shaped around protecting sensitive tax and financial information." },
  { icon: Award, title: "Accuracy", body: "We focus on dependable preparation, eligible deductions and credits, and careful review." },
  { icon: HeartHandshake, title: "Service", body: "Clients get practical guidance, clear communication, and support that respects their time." }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge variant="gold" className="mb-6">About JAO</Badge>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="font-serif text-4xl font-bold sm:text-5xl">
                Reliable tax and financial guidance for real life and growing businesses.
              </h1>
            </div>
            <p className="text-lg leading-8 text-white/75">
              JAO Tax & Financial Services provides professional tax preparation, tax
              filing assistance, and financial consulting for individuals, families,
              self-employed professionals, and small-business owners across the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Our purpose</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Helping clients make informed financial decisions.
            </h2>
          </div>
          <div className="grid gap-6 text-muted-foreground leading-7">
            <p>
              Our goal is to help clients comply with tax regulations, maximize eligible
              deductions and credits, improve financial management, and move through tax
              season with more confidence.
            </p>
            <p>
              The firm serves a broad mix of users, from first-time filers and families to
              gig workers, independent contractors, sole proprietors, LLC owners, and small
              to medium-sized businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/65">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">What guides us</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Professional, secure, welcoming, and easy to work with.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="rounded-lg bg-white">
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{value.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card className="rounded-lg border-gold/30 bg-accent/35">
            <CardHeader>
              <Eye className="mb-4 h-8 w-8 text-gold" />
              <CardTitle>Designed for every comfort level</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">
              The client experience is intentionally simple and mobile-friendly, so both
              technology-comfortable users and clients with limited computer experience can
              schedule, upload, ask questions, and move forward.
            </CardContent>
          </Card>
          <Card className="rounded-lg bg-ink text-white">
            <CardHeader>
              <ShieldCheck className="mb-4 h-8 w-8 text-gold" />
              <CardTitle>Security matters because the information matters.</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-white/72">
              Future portal, upload, payment, messaging, and e-signature integrations should
              use encrypted connections, strong authentication, and role-based access.
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
