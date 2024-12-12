import {
  MongoClient,
  type MongoClientOptions,
  ServerApiVersion,
} from "mongodb";
import { env } from "node:process";

const URI = env.DATABASE_URL;
const DB_NAME = env.DATABASE_NAME;

// Alternatively you can use these options if you are using Deno
// const URI = Deno.env.get("DATABASE_URL");
// const DB_NAME = Deno.env.get("DATABASE_NAME");

const client = (): MongoClient => {
  return new MongoClient(
    URI,
    <MongoClientOptions> {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      maxPoolSize: 20, // Set the maximum number of connections in the connection pool.
      maxIdleTimeMS: 30000, // Set the maximum idle time of a connection in the connection pool.
    },
  );
};

const db = client().db(DB_NAME);

export default db;
