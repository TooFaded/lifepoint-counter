import LifepointDisplay from "./components/lifepoint-display";
import Dice from "./components/dice";
import Coin from "./components/coin";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen p-24 bg-custom-gradient">
      <LifepointDisplay />
      <div className="flex justify-center space-x-16 mt-16 mx-auto p-16 bg-yellow-300 rounded-lg shadow-lg border-2 border-black">
        <Dice />
        <Coin />
      </div>
    </main>
  );
}
