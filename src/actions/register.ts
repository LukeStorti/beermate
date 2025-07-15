"use server";

import bcrypt from "bcryptjs";
import { prisma } from "../../prisma/prisma";

interface data {
  email: string;
  password: string;
}

export const register = async (data: data) => {
  try {
    const { email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      return { error: "User already exists" };
    }

    const lowerCaseEmail = email.toLowerCase();

    const user = await prisma.user.create({
      data: {
        email: lowerCaseEmail,
        password: hashedPassword,
      },
    });

    return { success: "User created successfully", userId: user.id };
  } catch (error) {
    console.log(error);
    return { error: "An error occurred" };
  }
};
