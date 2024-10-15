import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="">
        <h1 className="text-3xl font-bold text-center mb-5">
          Welcome to Smart Classroom
        </h1>
        <p className="text-center">We&apos;re coming soon...</p>
      </div>
      <div className="fixed bottom-10 p-2 text-center">
        Designed and Developed by <Link className="text-amber-400" href={'https://github.com/sureshchoudharysirvi'} target="_blank">Suresh Choudhary</Link> & <Link className="text-amber-400" href={'https://github.com/priynshuchouhn'} target="_blank">Priyanshu Chouhan</Link> 
      </div>
    </div>
  );
}
