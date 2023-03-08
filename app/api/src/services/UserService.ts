import { CreateUserInput } from "../schemas/UserSchemas";
import prisma from "../utils/prisma";

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function createUser(input: CreateUserInput) {
  const user = await prisma.user.create({
    data: input,
  });
}
