import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Arimo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const arimo = Arimo({
  variable: "--font-jet-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnBuddy",
  description: "Your one time Onboarding Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${arimo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
