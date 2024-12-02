import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTrasition from "@/components/StairTrasition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const JetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Bold.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lucca - Portifolio",
  description: "Lucca Tourinho Santos Vieira - Portifolio",
};

const pacifico = localFont({
  src: "./fonts/Pacifico-Regular.woff",
  variable: "--font-pacifico",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${JetBrainsMono.variable} ${pacifico.variable} antialiased`}
      >
        <Header />
        <StairTrasition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
