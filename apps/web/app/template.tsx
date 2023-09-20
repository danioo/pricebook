import type { Metadata } from "next";

import "./globals.css";
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "Pricebook",
  description: "Place where you can put all recent prices to compare stores.",
};

export default function Template({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <div className="min-h-full">
        <Navbar />

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
