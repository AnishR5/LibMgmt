import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MoveRight, BellRing, CalendarCheck2, Users2, ShieldCheck, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "@/components/feature-card";
import { HowItWorks } from "@/components/how-it-works";

export const metadata = {
  title: "CalmDesk — Home",
  description: "Run your library. We handle the reminders.",
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.primary.DEFAULT)/10%,transparent_60%)]" />
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Image src="/logo.svg" alt="CalmDesk logo" width={28} height={28} />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Run your library. We handle the reminders.
            </h1>
            <p className="mt-4 text-muted-foreground">
              CalmDesk helps Library & study space owners manage monthly desk subscriptions, automate reminders, and keep occupancy crystal clear — with a calm, modern interface.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/(auth)/login">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon={BellRing} title="Smart Reminders" desc="Automatic email/SMS nudges before, on, and after expiry." />
          <FeatureCard icon={CalendarCheck2} title="Flexible Start Dates" desc="Start any day. Renew in one click." />
          <FeatureCard icon={Users2} title="Subscriber Profiles" desc="Track members by phone with clean history." />
          <FeatureCard icon={ShieldCheck} title="Secure by Default" desc="Modern auth, protected routes, and audit logs." />
          <FeatureCard icon={BarChart3} title="Occupancy Insights" desc="Know active, expiring, and overdue at a glance." />
          <FeatureCard icon={MoveRight} title="Simple Workflow" desc="No spreadsheets. No stress. Just clarity." />
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <HowItWorks />
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold text-center">Loved by focused workspaces</h2>
        <p className="text-muted-foreground text-center mt-2">Simple tools that get out of your way.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">“We reduced manual follow-ups by 80%.”</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">— Workspace Owner, Pune</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="rounded-2xl">
          <CardContent className="p-6 sm:p-10 flex flex-col items-center text-center gap-4">
            <h3 className="text-2xl font-semibold">Ready to streamline renewals?</h3>
            <p className="text-muted-foreground max-w-2xl">Create your org in minutes and start tracking occupancy and renewals with ease.</p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/(auth)/login">Sign in</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#">Contact Sales</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}