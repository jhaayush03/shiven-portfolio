import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import PasswordGate from "@/components/ui/PasswordGate";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiven - Portfolio",
  description: "Portfolio of Shiven",
  generator: "Digitrix Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <PasswordGate>
          <Navigation />
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </PasswordGate>
      </body>
    </html>
  );
}
