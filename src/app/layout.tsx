import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/comp/theme-provider";

export const metadata: Metadata = {
  title: "VTuberized Logos",
  description: "A collection of unofficial VTuber-style logos from various brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer src="https://umami.ender-wiggin.com/script.js" data-website-id="3e6f233a-9fc6-4023-9bbf-0ccb037b7e6f"></Script>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
