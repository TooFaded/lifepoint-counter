import LifepointDisplay from "./components/lifepoint-display";

import Image from "next/image";
import Dice from "./components/dice";
import Coin from "./components/coin";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      <LifepointDisplay />
      <div className="flex justify-center items-center mx-auto mt-10">
        <Image src="/Milli_puzzle.png" width={300} height={300} />
      </div>
      <div className="flex justify-center space-x-16 my-16 mx-auto p-16 bg-yellow-300 rounded-lg shadow-lg border-2 border-black">
        <Dice />
        <Coin />
      </div>
    </main>
  );
}
