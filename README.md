## Step 1 – Protecting Sensitive Files with .gitignore

Before pushing our project to GitHub, we created a `.gitignore` file.

Why?

- `node_modules` is very large and automatically installed with `npm install`
- `.env` contains sensitive data like our MongoDB connection string

The `.gitignore` file tells Git:

“Do not track or upload these files.”

This keeps our repository clean, lightweight, and secure.
