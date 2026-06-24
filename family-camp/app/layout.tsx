import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aguit Camp | Mongolian Glamping Retreat",
  description:
    "Хялганат тосгонд байрлах Aguit Camp — Булган аймгийн байгалийн тэвэрт тайван амралт. Монгол гэр болон шовгор майхан. Nestled in Khylganat village, Bulgan Province, Mongolia.",
  keywords: [
    "Aguit Camp",
    "Mongolia glamping",
    "Mongolian ger",
    "Khylganat",
    "Bulgan",
    "glamping",
    "природа",
    "Aguit Camp Mongolia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
