import { getDrunkLevelMessage } from "@/lib/utils";
import { AddBeer } from "./add-beer";

interface User {
  id: string;
  beersConsumed: number;
  litresConsumed: number;
}

interface BeersProps {
  user: User;
}

export function Beers({ user }: BeersProps) {
  return (
    <div className="flex flex-col items-center my-8 justify-center">
      <h2 className="text-white text-3xl font-semibold">{user.beersConsumed} beers cracked</h2>
      <h2 className="text-white text-3xl font-semibold">
        {user.litresConsumed.toFixed(2)} ℓ in the tank
      </h2>
      <p className="text-white mt-2 text-lg">{getDrunkLevelMessage(user.litresConsumed)}</p>
      <div className="flex flex-col items-center justify-center h-[60vh] lg:h-[50vh] w-full">
        <AddBeer userId={user.id} />
      </div>
    </div>
  );
}
