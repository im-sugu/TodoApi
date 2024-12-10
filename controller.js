const todoModel = require("./modal")

const createApi = async (req, res) => {
    console.log("req.body", req.body);
  
    const { title, description } = req.body;
    try {
      const newTodo = new todoModel({ title, description });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      // console.log(err);
  
      res.status(500).json({ err: "Internal server error" });
    }
  };

  const listData = async (req, res) => {
    try {
      let todos = await todoModel.find();
      res.json(todos);
    } catch (error) {
      console.log(err);
      res.status(500).json({ err: "Internal server error" });
    }
  }

  const updateData = async (req, res) => {
    try {
      const { title, description } = req.body;
      const id = req.params.id;
      const updateTodo = await todoModel.findByIdAndUpdate(id, {
        title,
        description,
      });
  
      if (!updateTodo) {
        return res.status(404).json({ err: "Todo not found" });
      }
      res.json(updateTodo);
    } catch (error) {
      console.log(err);
      res.status(500).json({ err: "Internal server error" });
    }
  }

  const deleteData =  async (req, res) => {
    try {
      const id = req.params.id;
      await todoModel.findByIdAndDelete(id);
      res.status(204).end();
    } catch (errr) {}
  }

  module.exports = {listData,deleteData,updateData,createApi}