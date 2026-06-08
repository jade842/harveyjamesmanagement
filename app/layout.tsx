import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harvey James Management | National Talent & Event Services Agency",
  description:
    "Australia's premier talent and event services agency. We source, contract and manage MCs, hosts, performers, cultural artists, promotional staff and more for major events, brand activations and corporate experiences nationwide.",
  keywords:
    "talent agency, event management, MCs hosts, promotional staff, brand ambassadors, cultural performers, event talent, Australia, national",
  openGraph: {
    title: "Harvey James Management",
    description:
      "National talent and event services agency delivering curated talent solutions for major events, brand activations and corporate experiences across Australia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
