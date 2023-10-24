import CompareSlider from "@/components/CompareSlider";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
      <div className="flex justify-between items-center w-full">
        <div className="container mx-auto flex flex-col h-screen">
          <header className="flex justify-between items-center p-5 lg:py-10">
            <h3 className="font-bold text-4xl">RoomAI</h3>
            <div className="cursor-pointer w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-center font-semibold text-white text-xl outline outline-2 outline-rose-500">
              A
            </div>
          </header>
          <main className="my-auto flex flex-col gap-20 lg:flex-row items-center">
            <div className="flex flex-col gap-14 lg:gap-20 items-center text-center lg:text-left lg:items-start lg:w-1/2">
              <h3 className="font-bold text-6xl lg:text-7xl leading-tight">
                Design, <br className="hidden md:block" />
                <RoughNotation type="highlight" show color="pink" strokeWidth={7}>
                  reimagined
                </RoughNotation>{" "}
                with AI
              </h3>
              <Link href={"/room"}>
                <button className="bg-rose-500 p-5 rounded-lg text-white font-semibold">
                Redesign your rooms
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 lg:max-w-full max-w-xs md:max-w-lg outline outline-8 outline-yellow-300 outline-offset-8">
              <CompareSlider />
            </div>
          </main>
        </div>
      </div>
  );
}
