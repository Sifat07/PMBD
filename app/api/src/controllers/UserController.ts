import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUsersById = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(404).json({ msg: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: name,
        email: email,
      },
    });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
