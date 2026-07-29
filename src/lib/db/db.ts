import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Create connection string
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

// Create postgres client
const client = postgres(connectionString);

// Create drizzle instance
export const db = drizzle(client);
