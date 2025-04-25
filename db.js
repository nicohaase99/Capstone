const mysql = require('mysql2');

// Create a connection to the MySQL database using default credentials
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Default to localhost if DB_HOST is not set
  user: process.env.DB_USER || 'root', // Default to root if DB_USER is not set
  password: process.env.DB_PASSWORD || '', // Default to no password if DB_PASSWORD is not set
  database: process.env.DB_NAME || 'capstone1' // Default to capstone1 if DB_NAME is not set
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Export the connection object for use in other files
module.exports = connection;

// Example query to test the connection
connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error executing test query:', err);
    return;
  }
  console.log('Test query result:', results[0].solution);
});