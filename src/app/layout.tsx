import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider,SignInButton,UserButton,SignedIn,SignedOut } from "@clerk/nextjs";

import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoomAI",
  description: "Generate rooms in seconds with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-slate-200 container mx-auto flex flex-col h-screen"
        }
      >
        <header className="flex justify-between items-center p-5 lg:py-10">
          <Link href="/">
            <h3 className="font-bold text-4xl">RoomAI</h3>
          </Link>
          <SignedIn>
            <UserButton/>
          </SignedIn>  
          <SignedOut>
            <SignInButton/>
          </SignedOut>
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
