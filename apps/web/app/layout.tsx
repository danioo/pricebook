import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Pricebook",
  description: "Sprawdź jakie ceny są w innych sklepach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
