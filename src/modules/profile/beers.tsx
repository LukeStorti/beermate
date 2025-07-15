import { getBadge, getDrunkLevelMessage } from "@/lib/utils";
import { AddBeer } from "./add-beer";

interface User {
  id: string;
  beersConsumed: number;
  litresConsumed: number;
  moneySpent: number;
}

interface BeersProps {
  user: User;
}

export function Beers({ user }: BeersProps) {
  const badge = getBadge(user.beersConsumed);
  return (
    <div className="flex flex-col items-center my-6 justify-center">
      {badge && <p className="text-xs text-white italic">rank:</p>}
      {badge && <span className="text-white font-semibold text-xl">🎖️ {badge} 🎖️</span>}
      <h2 className="text-white text-3xl font-semibold">{user.beersConsumed} beers cracked</h2>
      <h2 className="text-white text-3xl font-semibold">
        {user.litresConsumed.toFixed(2)} ℓ in the tank
      </h2>
      <h2 className="text-white text-3xl font-semibold">
        {user.moneySpent}
        <span className="align-middle ml-2">💵</span> spent
      </h2>
      <p className="text-white mt-2 text-lg">{getDrunkLevelMessage(user.litresConsumed)}</p>

      <div className="flex flex-col items-center justify-center h-[50vh] lg:h-[40vh] w-full">
        <AddBeer userId={user.id} />
      </div>
    </div>
  );
}
