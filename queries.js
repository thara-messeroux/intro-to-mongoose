

/*------------------------------- Starter Code -------------------------------*/
/*
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Todo = require('./models/todo');

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries()

    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

    // Close our app, bringing us back to the command line.
    process.exit();
};

const runQueries = async () => {
    console.log("Creating a todo...");

    const newTodo = await Todo.create({
        text: "Learn Mongoose",
        isComplete: false
    });

    console.log("Saved Todo:");
    console.log(newTodo);
};

connect()
*/
/*------------------------------ Query Functions -----------------------------*/
/*------------------------------- Starter Code -------------------------------*/

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Todo = require("./models/todo");

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries();

    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");

    // Close our app, bringing us back to the command line.
    process.exit();
};

const runQueries = async () => {
    console.log("Queries running.");
    // The functions calls to run queries in our db will go here as we write them.
    await createTodo();
};

connect();
/*------------------------------ Query Functions -----------------------------*/

// Two ways to Delete
// findById + item.deleteOne() and // Model.findByIdAndDelete()
const deleteThemThangs = async () => {
    try {
        // Delete the items
        // // Model.findByIdAndDelete()
        // await Todo.findByIdAndDelete("698e9b9f7e07f3d8897683c0");

        // findById + item.deleteOne()
        const foundItemToDelete = await Todo.findById("698e9920326711a6ef80b8e6");
        // fake scenario for example, dont delete is not complete
        if (!foundItemToDelete.isComplete)
            throw new Error("You cannot delete incomplete items");

        await foundItemToDelete.deleteOne();

        console.log("Both items deleted");
    } catch (error) {
        console.error("ERROR=====>>>>", error.message);
    }
};

// Two ways to Updates
// findById + item.save() and // Model.findByIdAndUpdate()

// The findByIdAndUpdate way (prob the preferred)

const findByIdAndUpdate = async () => {
    try {
        // Step1: Find and update the item
        // findByIdAndUpdate take 1) ID of what we are updating, 2) Object with fields to updated 3) Options
        // by default findByIdAndUpdate returns the old copy of the item aka the item before we updated
        // we can pass a option {new: true} to make sure it returns the new version
        const foundTodo = await Todo.findByIdAndUpdate(
            "698e9b9f7e07f3d8897683c0",
            {
                title: "Go get some fries from MacDonals",
                description: "What size should we get?",
            }, // Fields being updated on this item (based on that id)
            { new: true }, // new: true Tells findByIdAndUpdate to return the new version / updated to foundTodo variable
        );

        console.log("Saved/ updated Todo", foundTodo);
    } catch (error) {
        console.log(error);
    }
};

// The findById + item.save()
/*
  Step1: Get the Todo or item to update
  Step2: Update that variable with the changes
  Step3: Call .save()
*/
const findByIdAndSaveWay = async () => {
    try {
        // Step1: Get the Todo or item to update
        const foundTodo = await Todo.findById("698e9b9f7e07f3d8897683c0");

        //   Step2: Update that variable with the changes
        foundTodo.title = "Go to DisneyLand and get that churro";

        // Step3: Call .save()
        await foundTodo.save();

        console.log("Saved/ updated Todo", foundTodo);
    } catch (error) {
        console.log(error);
    }
};

// FIND  && FINDONE
const findTodos = async () => {
    try {
        // Model.find({}) - will return all the items from this collection
        // Model.findOne({}) - will return one of the items from this collection
        // the {} is option filter which can be used to filter items.
        // await Todo.find({ isCompleted: true}) // gives us all true iscompelted items

        // find always returns an array []
        const todos = await Todo.find({ isComplete: true });
        // const todos = await Todo.find({})

        // findOne always returns one item
        const firstFalseWeFind = await Todo.findOne({ isComplete: false });

        console.log("All todos:", todos);
        console.log("First False", firstFalseWeFind);
    } catch (error) {
        console.log(error.message);
    }
};

// FINDBYID
const findTodoById = async () => {
    try {
        // Model.findById(idToFind) - will return the item from this collection that matches that id
        // await Todo.findById("698e9b9f7e07f3d8897683c0") // gives us back a todo w/ that I
        // Restful routes
        // /todos/:todoId =>  GET /todos/698e9b9f7e07f3d8897683c0  ... res.render('todos/show.ejs', { todo })
        // alwasys returns 1 item or no items
        const foundTodo = await Todo.findById("698e9b9f7e07f3d8897683c0");
        console.log("That one todo you looked for:", foundTodo);
    } catch (error) {
        console.log(error.message);
    }
};

const createTodo = async () => {
    try {
        // Use the model to create a new todo
        // usually this will be come form data from req.body
        const formData = {
            title: "Go buy a switch PS5",
            isComplete: false,
            description: "Please make more money Billie we need the Ps5",
        },
            item = {
                title: "Go to the beach",
                isComplete: false,
                description:
                    "Would really love to go to the beach but pretty sure its raining in LA this weekend",
            };

        // Use the Todo models create method to create a new todo
        // This also can take a array of objects / todos
        // Create returns the newly created item (todo)
        const todo = await Todo.create([formData, item]);
        // Log it out
        console.log("New todo here:====>", todo);
    } catch (error) {
        console.log(error.message);
    }
};
