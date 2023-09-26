const fastify = require("fastify")({ logger: true });
const PORT = 3003

// fastify.register(require("fastify-swagger"), {
//     exposeRoute: true,
//     routePrefix: "/docs",
//     swagger: {
//       info: {
//         title: "fastify-api",
//       },
//     },
//   });
  
fastify.register(require("./router/itemRoute"))

const start = async () => {
    try {
        await fastify.listen({port: PORT})
    } catch (error) {
        fastify.logger.error(error.message);
        process.exit(1);
        // console.log(error)
    }
}

start();