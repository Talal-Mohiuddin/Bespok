import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp";
import "./globals.css";
import { MonteCarlo } from "next/font/google";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bespoke Tailors",
  description: "Bespoke Tailors - Handcrafted Elegance in Every Stitch",
  icons: {
    icon: "/hero.png",
  },
};

const bbhBartle = localFont({
  src: "../../public/fonts/BBHBartle-Regular.ttf",
  variable: "--font-bbh",
});

const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montecarlo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bbhBartle.variable} ${monteCarlo.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
