const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Example route import (will create in Day 4)
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Primsa access route
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});