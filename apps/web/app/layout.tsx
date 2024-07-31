import type { Metadata } from "next";
import localFont from "next/font/local";
import "@vianlix/ui/globals.css";
import { cn } from "@vianlix/ui/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Vianlix | Customized Notebooks",
  description: "Custom Printed notebooks for people you love!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={cn(geistSans.variable, geistMono.variable, "p-4")}>
        {children}
      </body>
    </html>
  );
}
