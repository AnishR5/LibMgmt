"use client";

import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormValues = z.infer<typeof schema>;

export const metadata = { title: "Login — CalmDesk", description: "Access your dashboard" };

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur", defaultValues: { email: "", password: "" } });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      // TODO: call your auth endpoint
      await new Promise((r) => setTimeout(r, 800));
      alert(JSON.stringify(values, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <Image src="/logo.svg" alt="CalmDesk" width={40} height={40} className="opacity-90" />
        <Card className="w-full rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Welcome back</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="••••••••" type="password" autoComplete="current-password" {...field} />
                      </FormControl>
                      <div className="text-right">
                        <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Signing in…" : "Sign in"}
                </Button>
              </form>
            </Form>

            <div className="my-6 flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">Continue with Google</Button>
              <Button variant="outline" className="w-full">Continue with GitHub</Button>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              New here? <Link className="text-primary hover:underline" href="#">Create an account</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}