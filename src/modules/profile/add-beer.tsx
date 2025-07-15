"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddBeerForm } from "./add-beer-form";
import useSound from "use-sound";

export function AddBeer({ userId }: { userId: string }) {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [play] = useSound("/open.mp3", { volume: 0.008 });

  const toggleForm = () => {
    if (!formIsVisible) {
      play();
    }
    setFormIsVisible((prev) => !prev);
  };

  if (!formIsVisible) {
    return (
      <div className="px-4 my-4 flex w-full lg:w-1/2 justify-center items-center">
        <Button
          variant="secondary"
          onClick={toggleForm}
          className="w-full font-lg font-semibold cursor-pointer"
        >
          Add Beer
        </Button>
      </div>
    );
  }
  if (formIsVisible) {
    return (
      <div className="w-full flex items-center justify-center p-2">
        <AddBeerForm
          onCancel={toggleForm}
          userId={userId}
        />
      </div>
    );
  }
}
