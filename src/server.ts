import fastify from 'fastify';

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "Mercedes", base: "Brackley" },
  { id: 2, name: "Red Bull Racing", base: "Milton Keynes" },
  { id: 3, name: "Ferrari", base: "Maranello" }
];

const drivers = [
  { id: 1, name: "Kimi Antonelli", team: "Mercedes" },
  { id: 2, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" }
];

server.get("/teams", async (request, reply) => {
  reply.type("application/json").code(200)
  return teams;
});

server.get("/drivers", async (request, reply) => {
  reply.type("application/json").code(200)
  return drivers;
});

interface DriversParams {
  id: string;
}

server.get<{Params: DriversParams}>("/drivers/:id", async (request, reply) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find(dr => dr.id === id);
  
  if (!driver) {
    reply.status(404).send({ error: "Driver not found" });
    return;
  }
  reply.type("application/json").code(200);
  return driver;
});


server.listen({port: 3000 }, () => {
    console.log("Server init")
});
