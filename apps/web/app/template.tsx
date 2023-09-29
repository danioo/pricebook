import type { Metadata } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "./globals.css";
import type { Database } from "../database.types";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Pricebook",
  description: "Place where you can put all recent prices to compare stores.",
};

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="min-h-full">
      <Navbar session={session} />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
