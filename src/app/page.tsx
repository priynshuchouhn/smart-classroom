import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen pb-20 sm:p-20">
      <BackgroundBeamsWithCollision>
        <div>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            welcome to{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Smart Classroom</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Smart Classroom</span>
              </div>
            </div>
          </h2>
          <p className="text-center">We&apos;re coming soon...</p>
        </div>
        <div className="fixed bottom-5 p-2 text-center">
          Designed and Developed by <Link className="text-purple-800" href={'https://github.com/sureshchoudharysirvi'} target="_blank">Suresh Choudhary</Link> & <Link className="text-purple-800" href={'https://github.com/priynshuchouhn'} target="_blank">Priyanshu Chouhan</Link>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
