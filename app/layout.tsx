import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexoria | Cabinet d'Orientation Scolaire & Coaching Abidjan",
  description: "Nexoria accompagne les lycéens et étudiants en Côte d'Ivoire dans leur orientation post-bac, la préparation aux examens et les études à l'étranger.",
  keywords: ["orientation scolaire Abidjan", "coaching bac Côte d'Ivoire", "études à l'étranger CI", "Parcoursup", "orientation post-bac"],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
