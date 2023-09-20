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

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
