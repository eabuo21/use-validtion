const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Correct middleware for parsing JSON request bodies

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tutorial",
});

// Check for database connection errors
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

// POST data to database
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO user_registration (`name`, `email`, `phone`, `age`, `password`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.age,
    req.body.password,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed", details: err });
    }
    return res.status(201).json({ message: "User created successfully", data });
  });
});

app.listen(8080, () => { // Ensure the port number matches the frontend
  console.log("Server is listening on port 8080");
});
