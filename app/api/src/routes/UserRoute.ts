// import fastify from "fastify";
// import {
//   getUsers,
//   getUsersById,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/UserController";

import { FastifyInstance } from "fastify";
import {
  registerUserHandler,
  getUsersHandler,
} from "../controllers/UserController";
import { $ref } from "../schemas/UserSchemas";

// const router = fastify();

// const opts = {
//   schema: {
//     response: {
//       200: {
//         type: "object",
//         properties: {
//           hello: { type: "string" },
//         },
//       },
//     },
//   },
// };

// router.get("/users", opts, getUsers);
// // router.get("/users/:id", opts, getUsersById);
// // router.post("/users", opts, createUser);
// // router.put("/users/:id", opts, updateUser);
// // router.delete("/users/:id", opts, deleteUser);

// export default router;

async function userRoutes(server: FastifyInstance) {
  server.get(
    "/",
    {
      schema: {
        response: {
          200: $ref("getUsersResponseSchema"),
        },
      },
    },

    getUsersHandler
  );

  server.post(
    "/",
    {
      schema: {
        body: $ref("createUserSchema"),
        response: {
          201: $ref("createUserResponseSchema"),
        },
      },
    },
    registerUserHandler
  );
}

export default userRoutes;
