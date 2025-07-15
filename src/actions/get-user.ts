"use server";

import { prisma } from "../../prisma/prisma";

export const getUser = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
