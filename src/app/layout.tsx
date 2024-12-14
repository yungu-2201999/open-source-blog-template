import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import UnsetDefault from './_components/UnsetDefault'
import NavBar from "./_layouts/NavBar/NavBar";

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

export const metadata: Metadata = {
  title: "Hi, My Friends ",
  description: "Provides a beginner-friendly open-source project for new developers to contribute and learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full! dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] overflow-x-hidden dark:bg-slate-900 bg-gray-50 text-black dark:text-white transition-colors ease-in-out delay-100`}
      >
        <NavBar />
        <UnsetDefault />
        <main className="pt-[52px] h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
