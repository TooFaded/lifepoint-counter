import LifepointDisplay from "./components/lifepoint-display";
import Dice from "./components/dice";
import Coin from "./components/coin";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen p-24 bg-custom-gradient">
      <LifepointDisplay />
      <Dice />
      <Coin />
    </main>
  );
}
