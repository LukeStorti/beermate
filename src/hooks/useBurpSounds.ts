"use client";

import useSound from "use-sound";

export function useBurpSounds(volume: number = 0.009) {
  const [play1] = useSound("/burp.mp3", { volume });
  const [play2] = useSound("/burp2.mp3", { volume });
  const [play3] = useSound("/burp3.mp3", { volume });
  const [play4] = useSound("/burp4.mp3", { volume });

  const playSounds = [play1, play2, play3, play4];

  const playRandomBurp = () => {
    const randomIndex = Math.floor(Math.random() * playSounds.length);

    playSounds[randomIndex]?.();
  };

  return playRandomBurp;
}
