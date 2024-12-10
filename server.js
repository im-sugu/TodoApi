const express = require("express");
const mongoose = require("mongoose");
const todoModel = require("./modal");
const cors = require("cors");
const { createApi, updateData, deleteData, listData } = require("./controller");
mongoose
  .connect("mongodb://localhost:27017/mern-learn")
  .then(() => {
    console.log("db connect");
  })
  .catch((err) => {
    console.log(err);
  });
const port = 6001;
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000", methods: "POST" }));
// create schema

app.post("/createTodos", createApi);

app.get("/todos", listData);

app.put("/todos/:id", updateData);
app.delete("/todos/:id", deleteData);

app.listen(port, () => {
  console.log(`this is the reason 600${port}`);
});
