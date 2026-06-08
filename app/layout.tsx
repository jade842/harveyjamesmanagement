import type { Metadata } from "next";
import { Poppins, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
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
    <html lang="en" className={`${poppins.variable} ${bodoniModa.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
