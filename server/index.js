const express = require("express");
const app = express();
const PORT = 5000;
const db = require("./src/db");
db();
const Todo = require("./src/model");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('Server is running')
})

app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text: text });
  const newTodo = await todo.save();
  res.json(newTodo);
});

app.put("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const updatedTodos = await Todo.findByIdAndUpdate(id, {text: text})
  res.json(updatedTodos);
});

app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
