"use server";

import { prisma } from "../../prisma/prisma";

export const addBeer = async (userId: string, volume: number) => {
  if (!userId || !volume) return;

  const litres = volume / 1000;

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        litresConsumed: {
          increment: litres,
        },
        beersConsumed: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.log("Failed to add beer:", error);
    throw new Error("Could not update user beer data");
  }
};
