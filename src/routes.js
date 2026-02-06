const express = require("express");
const router = express.Router();

const clients = [];

router.get("/clients", (req, res) => {
  res.json(clients);
});

router.post("/clients", (req, res) => {
  clients.push(req.body);
  res.json({ success: true });
});

module.exports = router;
