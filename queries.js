/*------------------------------- Starter Code -------------------------------*/

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

/*------------------------------ Query Functions -----------------------------*/


