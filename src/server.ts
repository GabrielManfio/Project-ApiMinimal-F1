import fastify from 'fastify';
import cors from "@fastify/cors";

const server = fastify({ logger: true });
server.register(cors,{origin: "www.dio.me"});

const teams = [
  { id: 1, name: "Mercedes", base: "Brackley" },
  { id: 2, name: "Red Bull Racing", base: "Milton Keynes" },
  { id: 3, name: "Ferrari", base: "Maranello" },
  { id: 4, name: "McLaren", base: "Woking" },
  { id: 5, name: "Aston Martin", base: "Silverstone" },
  { id: 6, name: "Alpine", base: "Enstone" },
  { id: 7, name: "Williams", base: "Grove" },
  { id: 8, name: "RB", base: "Faenza" },
  { id: 9, name: "Sauber", base: "Hinwil" },
  { id: 10, name: "Haas", base: "Kannapolis" }
];

const drivers = [
  { id: 1, name: "Kimi Antonelli", team: "Mercedes" },
  { id: 2, name: "George Russell", team: "Mercedes" },

  { id: 3, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 4, name: "Yuki Tsunoda", team: "Red Bull Racing" },

  { id: 5, name: "Charles Leclerc", team: "Ferrari" },
  { id: 6, name: "Lewis Hamilton", team: "Ferrari" },

  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },

  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },

  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Jack Doohan", team: "Alpine" },

  { id: 13, name: "Alexander Albon", team: "Williams" },
  { id: 14, name: "Carlos Sainz", team: "Williams" },

  { id: 15, name: "Liam Lawson", team: "RB" },
  { id: 16, name: "Isack Hadjar", team: "RB" },

  { id: 17, name: "Nico Hulkenberg", team: "Sauber" },
  { id: 18, name: "Gabriel Bortoleto", team: "Sauber" },

  { id: 19, name: "Esteban Ocon", team: "Haas" },
  { id: 20, name: "Oliver Bearman", team: "Haas" }
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
