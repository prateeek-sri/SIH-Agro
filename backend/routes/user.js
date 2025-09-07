import express from "express";
const router = express.Router();

// Dummy users
const users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Shyam" },
];

router.get("/", (req, res) => {
  res.json(users);
});


export default router;
