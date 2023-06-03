import express from "express";
import knex from "knex";
const dataBs = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "memOo--2121",
    database: "hyf_node_week1",
  },
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Class");
});

app.listen(port, () => {
  console.log(`listening port ${port}`);
});

// app.get("/info", (req, res) => {
//   res.send({ "Node Version": process.version });
// });

app.get("/info", async (req, res) => {
  const [rows] = await dataBs.raw("SELECT VERSION()");

  res.json({
    nodeVersion: process.version,
    mysqlVersion: rows[0]["VERSION()"],
  });
});

