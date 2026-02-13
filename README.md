## Step 1 – Protecting Sensitive Files with .gitignore

Before pushing our project to GitHub, we created a `.gitignore` file.

Why?

- `node_modules` is very large and automatically installed with `npm install`
- `.env` contains sensitive data like our MongoDB connection string

The `.gitignore` file tells Git:

“Do not track or upload these files.”

This keeps our repository clean, lightweight, and secure.

## Step 2 – Connecting to MongoDB with dotenv and Mongoose

We installed:

- mongoose → allows our app to communicate with MongoDB
- dotenv → allows us to store sensitive data in a .env file

Why use `.env`?

Instead of hardcoding our database password inside our code, we store it in a separate file and access it using:

process.env.MONGODB_URI

This keeps our credentials secure and professional.

In `queries.js`, we:

1. Loaded environment variables using dotenv
2. Connected to MongoDB using mongoose.connect()
3. Used async/await to handle the database connection properly

