import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../shared/schema";

// Create a PostgreSQL client
const connection = postgres(process.env.DATABASE_URL!);
export const db = drizzle(connection, { schema });