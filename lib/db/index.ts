import postgres from 'postgres';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create a single connection pool that can be reused
const sql = postgres(process.env.DATABASE_URL, {
  max: 1, // Use connection pooling for serverless environments
  idle_timeout: 20,
  connect_timeout: 10,
});

export default sql;

