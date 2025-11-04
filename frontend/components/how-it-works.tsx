import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, PencilLine, Bell } from "lucide-react";

const steps = [
  { icon: PencilLine, title: "Create your org", desc: "Set total tables and defaults in minutes." },
  { icon: CheckCircle2, title: "Add subscribers", desc: "Register by phone and start any day." },
  { icon: Bell, title: "Automate renewals", desc: "Smart reminders reduce manual follow-ups." },
];

export function HowItWorks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((s, i) => (
        <Card key={i} className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">{i + 1}. {s.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}