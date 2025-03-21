const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();
const port = 5050;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "✅ Database Connected!", result: results[0] });
  });
});




app.get("/users", (req, res) => {
  db.query("SELECT * FROM User_info", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});


app.post("/users", (req, res) => {
  const { Job_id, user_name, email, password } = req.body;
  db.query(
    "INSERT INTO User_info (Job_id, user_name, email, password) VALUES (?, ?, ?, ?)",
    [Job_id, user_name, email, password],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "User added successfully!", userId: result.insertId });
    }
  );
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/pcs", (req, res) => {
  db.query("SELECT * FROM PC_info", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get("/pc-specifications", (req, res) => {
  db.query("SELECT Serial_Number, Computer_Name FROM PC_info", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});
