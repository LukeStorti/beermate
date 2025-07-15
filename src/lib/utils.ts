import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDrunkLevelMessage(litres: number): string {
  if (litres < 0.5) return "Just a sip 🫗";
  if (litres < 1) return "Getting started 🔥";
  if (litres < 2) return "Feeling it 🍻";
  if (litres < 3.5) return "Starting to buzz 🐝";
  if (litres < 5) return "Solid session 🎉";
  if (litres < 7) return "Weekend warrior 🛡️";
  if (litres < 10) return "That's a mini keg 🍺";
  if (litres < 15) return "Enough for a party 🎊";
  if (litres < 25) return "You’ve got a barrel going 🛢️";
  if (litres < 50) return "Beer stash level: serious 📦";
  if (litres < 75) return "Bathtub full of beer 🛁";
  if (litres < 100) return "You're approaching legendary 🍺";
  if (litres < 200) return "Small pool of beer unlocked 🏊‍♂️";
  if (litres < 500) return "That’s a hot tub of hops 💦";
  if (litres < 1000) return "You could fill a fountain ⛲";
  if (litres < 5000) return "Beer river status achieved 🌊";
  if (litres < 10000) return "A lake of lager 🪣";
  return "You're a myth. A beer god 🍺⚡";
}
