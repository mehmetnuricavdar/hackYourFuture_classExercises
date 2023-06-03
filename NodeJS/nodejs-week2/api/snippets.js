// Contents of api/snippets.js

import db from "../database.js";
import express from "express";
import knex from "knex";
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const titles = await knex("snippets").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// POST /api/snippets
router.post("/api/snippets", async (request, response) => {
});

// TODO: GET /api/snippets/:id
export default db;
