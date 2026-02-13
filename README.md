# Intro to Mongoose

## What we are building

A small Node app that connects to MongoDB using Mongoose.

---

## Step 1: Create a Node project

Command used:

npm init -y

What this did:
- Created a package.json file
- This file tracks our project and dependencies

---

## Step 2: Install packages

Command used:

npm install mongoose dotenv

What these do:

mongoose  
→ Lets Node talk to MongoDB  

dotenv  
→ Lets us store secret data (like passwords) in a .env file  

---

## Step 3: Protect our database password

We created a file called:

.env

Inside it we added:

MONGODB_URI=your_connection_string_here

Why this matters:
- We never put passwords directly inside our JavaScript files
- This keeps our database secure

We also added this to .gitignore:

node_modules/
.env

This prevents GitHub from uploading:
- installed packages
- secret credentials

---

## Step 4: Connect to MongoDB

In queries.js we:

- Loaded dotenv
- Connected using mongoose.connect(process.env.MONGODB_URI)
- Logged a message when connected
- Disconnected after running queries

When we ran:

node queries.js

We saw:

Connected to MongoDB  
Queries running  
Disconnected from MongoDB  

That confirms the connection works.


## Step 5: Create a Todo Model

We created a models folder and added todo.js.

Inside it we defined a Schema.

A Schema describes what a Todo looks like.

Our Todo has:
- text (String)
- isComplete (Boolean)

This allows Mongoose to create and manage Todo documents in MongoDB.
