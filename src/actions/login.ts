"use server";

import bcrypt from "bcryptjs";
import { prisma } from "../../prisma/prisma";

interface data {
  email: string;
  password: string;
}
export const login = async (data: data) => {
  try {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new Error("Invalid Credentials");
    }
    return { success: "User logged in successfully", userId: user.id };
  } catch (error) {
    console.log(error);
    return { error: "Invalid Credentials" };
  }
};
