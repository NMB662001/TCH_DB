import pkg from 'pg';
const {Pool}=pkg
// Create a new Pool instance with your database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tch',
  password: '12345',
  port: '5432',
});

// Function to execute SQL queries
export const executeQuery = async (query, values = []) => {
  const client = await pool.connect();
  try {
    const result = await client.query(query, values);
    return result.rows;
  } finally {
    client.release(); // Release the client back to the pool
  }
};
