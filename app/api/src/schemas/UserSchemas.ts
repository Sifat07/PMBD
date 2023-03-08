import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const userCore = {
  name: z.string(),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
};

const createUserSchema = z.object({
  ...userCore,
});

const createUserResponseSchema = z.object({
  ...userCore,
  id: z.number(),
});

const getUsersResponseSchema = z.array(createUserResponseSchema);

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema,
  getUsersResponseSchema,
});
