const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
  },{ timestamps: true });
  const todoModel = mongoose.model("Todos", todoSchema);

  module.exports = todoModel