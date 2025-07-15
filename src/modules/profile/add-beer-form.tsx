"use client";
import { addBeer } from "@/actions/add-beer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useBurpSounds } from "@/hooks/useBurpSounds";
import { LoaderCircle } from "lucide-react";

interface AddBeerFormProps {
  onCancel: () => void;
  userId: string;
}

const volumes = [330, 440, 500, 660, 750];

export function AddBeerForm({ onCancel, userId }: AddBeerFormProps) {
  const playRandomBurp = useBurpSounds();
  const [selected, setSelected] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAddBeer = async () => {
    if (!selected) {
      return;
    }
    try {
      setIsLoading(true);
      await addBeer(userId, selected);
      playRandomBurp();
      router.refresh();
      onCancel();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Try again");
    }
  };
  return (
    <Card className="w-full max-w-md p-4">
      <div className="flex flex-col gap-4 w-full ">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {volumes.map((volume) => (
            <Button
              key={volume}
              onClick={() => setSelected(volume)}
              className={cn(
                "text-primary bg-white font-semibold text-lg hover:bg-white cursor-pointer",
                selected === volume && "border-2 border-primary"
              )}
            >
              {volume}ml
            </Button>
          ))}
        </div>

        <div className="flex gap-2 w-full">
          <Button
            className="flex-1 text-white cursor-pointer"
            onClick={handleAddBeer}
          >
            {isLoading ? <LoaderCircle className="animate-spin" /> : "Add Beer"}
          </Button>
          <Button
            onClick={onCancel}
            variant="outline"
            className="flex-1 cursor-pointer"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );
}
