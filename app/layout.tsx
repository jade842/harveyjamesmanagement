import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const audrey = localFont({
  src: [
    { path: "../public/fonts/Audrey-Normal.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Audrey-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Audrey-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-audrey",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
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
    images: [{ url: "/logo-dark.png", width: 1200, height: 630, alt: "Harvey James Management" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audrey.variable} ${poppins.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
