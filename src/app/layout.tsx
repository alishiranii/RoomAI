import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-slate-100 container mx-auto flex flex-col h-screen"
        }
      >
        <header className="flex justify-between items-center p-5 lg:py-10">
          <Link href="/">
            <h3 className="font-bold text-4xl">RoomAI</h3>
          </Link>
          <div className="cursor-pointer w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-center font-semibold text-white text-xl outline outline-2 outline-rose-500">
            A
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
