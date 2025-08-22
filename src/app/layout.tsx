import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio";
import { getThemeVariables, activeTheme } from "@/config/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.title}`,
  description: portfolioConfig.personal.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVars = getThemeVariables(activeTheme, "dark");

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={themeVars as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
