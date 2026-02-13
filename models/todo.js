/*


// models/todo.js
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
});

// Compile the schema into a model:
const Todo = mongoose.model('Todo', todoSchema);

// Export the model:
module.exports = Todo;

*/



// Bring in mongoose
const mongoose = require('mongoose')

// Define our Schema
const todoSchema = new mongoose.Schema({
    // In this object we add key value pairs with key = field name and value = type
    title: String,
    isComplete: Boolean,
    subTask: [],
    description: {
        type: String, // Define the type here
        required: true // add in option
    }, // Sometime instead of String we will provide a object with additional options
})

// Define our Model 
// This model gives us access to do crud using this schema
const Todo = mongoose.model("Todo", todoSchema)
// Crud using one of these methods below
const createTodo = (...args) => Todo.create(...args)
const findTodos = (...args) => Todo.find(...args)
// find - list todos from the database
// findById - find a todo by its id
// findByIdAndUpdate - update a todo by id
// findByIdAndDelete - delete a todo by id
// create - create a single or list of todos

// Export this to use in other files
module.exports = Todo
