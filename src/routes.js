const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener clientes
router.get("/clients", (req, res) => {
  db.all("SELECT * FROM clients", [], (err, rows) => {
    res.json(rows);
  });
});

// Crear cliente
router.post("/clients", (req, res) => {
  const { name, email, phone } = req.body;

  db.run(
    "INSERT INTO clients (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone],
    () => res.json({ success: true })
  );
});

module.exports = router;
