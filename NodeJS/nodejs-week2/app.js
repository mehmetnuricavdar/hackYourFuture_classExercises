import express from "express";
const app = express();
const port = process.env.PORT || 3001;
import snippets from "./api/snippets.js";
app.use("./api/snippets.js", snippets);

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

app.get("/users", async (req, res) => {
  const users = await db("users");
  res.send(users);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  try {
    await db("users").insert(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

console.log(process.env.DB_HOST);
