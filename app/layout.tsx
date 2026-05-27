import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayaan Maredia — Software Engineer",
  description:
    "Computer Science student at Texas A&M. Backend systems, full-stack development, and clean code.",
  openGraph: {
    title: "Rayaan Maredia",
    description:
      "Computer Science student at Texas A&M. Backend systems, full-stack development, and clean code.",
    url: "https://rayaanmaredia.dev",
    siteName: "Rayaan Maredia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
