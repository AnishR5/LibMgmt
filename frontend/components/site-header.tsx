"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={20} height={20} alt="logo" />
          <span className="font-semibold">CalmDesk</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">Docs</Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Separator orientation="vertical" className="h-6" />
          <Button asChild variant="ghost">
            <Link href="/(auth)/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/(auth)/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}