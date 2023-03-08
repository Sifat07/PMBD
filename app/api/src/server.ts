import Fastify from "fastify";
import userRoutes from "./routes/UserRoute";
import { userSchemas } from "./schemas/UserSchemas";
import { withRefResolver } from "fastify-zod";

const server = Fastify();

const PORT = 8021;

server.get("/healthcheck", async function () {
  return { status: "OK" };
});

async function main() {
  for (const schema of userSchemas) {
    server.addSchema(schema);
  }

  server.register(userRoutes, { prefix: "api/users" });

  try {
    await server.listen({ port: PORT }, () => {
      console.log("Server ready at Port:" + PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
