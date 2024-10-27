# ExpressJS API Boilerplate

An Express.js API boilerplate using TypeScript, Prisma ORM, ESLint, Prettier, and Husky for code formatting and linting.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Husky](#husky)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project serves as a boilerplate for building RESTful APIs using Express.js and TypeScript. It integrates essential tools and libraries to ensure code quality, consistency, and ease of development:
- Prisma ORM: For database modeling and querying.
- ESLint: To identify and fix problematic patterns in the code.
- Prettier: For consistent code formatting.
- Husky: To run scripts before commits (e.g., linting and formatting).

## Features
- TypeScript: Strongly typed programming language that builds on JavaScript.
- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- Prisma ORM: Next-generation ORM for TypeScript and Node.js.
- ESLint & Prettier: For code linting and formatting.
- Husky: Git hooks to enforce code quality before commits.
- Nodemon: For automatic server restarts during development.

## Project Structure
```text
project-root/
├── src/
│   ├── app.ts              # Entry point for the Express application
│   ├── routes/             # API route definitions
│   ├── controllers/        # Request handlers for routes
│   ├── services/           # Business logic for handling requests
│   ├── middlewares/        # Custom middleware functions
│   ├── prisma/
│   │   └── client.ts       # Prisma client instance
│   ├── utils/              # Utility functions
│   └── config/              # Configuration files
├── prisma/             
│   ├── models/             # Data models
│   ├── baseSchema.prisma   # Base Prisma schema file
│   ├── mergeModels.js      # Script to merge Prisma schema files
│   └── schema.prisma       # Prisma schema file
├── package.json        
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── .env.example
└── README.md
```

## Prerequisites
- Node.js: Version 22 or above.
- npm: Comes with Node.js.
- A database instance (MySQL, PostgreSQL, SQLite, SQL Server...).

## Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/a-lebailly/expressjs-api-boilerplate.git
cd expressjs-api-boilerplate
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory based on `.env.example`:
```bash
cp .env.example .env
```
Update the `.env` file with your database credentials and any other necessary configuration.

### 3. Set Up the Database
Ensure that you have a MySQL database running and accessible.  
Create your first model in `prisma/models` before continue.

### 4. Install dependencies and initialize Prisma
Install dependencies and generate the Prisma client and apply migrations:
```bash
npm run init
```
Start Prisma Studio to interact with your database visually:
```bash
npm run prisma:studio
```

### 5. Run the Development Server
```bash
npm run dev
```
The server will start on the port specified in your `.env` file (default is `3000`).

## Scripts
The following scripts are available in the package.json file:
- `npm run init`: Installs dependencies, generates the Prisma client, and applies migrations.
- `npm run build`: Compiles TypeScript code to JavaScript in the dist directory.
- `npm run start`: Runs the compiled JavaScript code from the dist directory.
- `npm run dev`: Starts the development server with hot reloading using nodemon and ts-node.
- `npm run prod`: Builds the project and then starts it.
- `npm run prisma`: Runs Prisma CLI commands.
- `npm run prisma:studio`: Opens Prisma Studio for database management.
- `npm run prisma:generate`: Merges Prisma schema files into a single schema.prisma file and generates the Prisma client.
- `npm run prisma:migrate`: Applies migrations to the database.
- `npm run merge:models`: Merges Prisma schema files into a single schema.prisma file.
- `npm run lint`: Runs ESLint to check for linting errors.
- `npm run lint`:fix: Runs ESLint and automatically fixes fixable issues.
- `npm run format`: Formats code using Prettier.


## Configuration
### Environment Variables
The .env.example file provides a template for the necessary environment variables:

```env
PORT=3000
DATABASE_URL="mysql://root:root@localhost:3306/api?schema=public"
```
- `PORT`: The port on which the server will run.
- `DATABASE_URL`: The connection string for your MySQL database.

### ESLint
ESLint is configured to work with TypeScript and Prettier.
`.eslintrc.json`:

```json
{
  "env": {
    "node": true,
    "es2020": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "rules": {}
}
```
- `parser`: Uses @typescript-eslint/parser to parse TypeScript code.
- `extends`: Extends recommended ESLint rules and integrates Prettier.
- `plugins`: Includes @typescript-eslint plugin for additional TypeScript-specific linting rules.

### Prettier
Prettier is configured for consistent code formatting.
`.prettierrc`:
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 4,
  "semi": true
}
```
- `singleQuote`: Use single quotes instead of double quotes.
- `trailingComma`: Add a trailing comma wherever possible.
- `printWidth`: Wrap lines at 80 characters.
- `tabWidth`: Set tab width to 4 spaces.
- `semi`: Use semicolons at the ends of statements.

### Husky
Husky is used to run scripts before commits to ensure code quality.  
Pre-commit Hook (`.husky/pre-commit`):
```bash
npm run lint && npm run format && npm run build && git add .
```
- Linting: Checks for linting errors.
- Formatting: Formats the code.
- Building: Compiles the TypeScript code.
- Adding Changes: Adds any changes made by the formatting or build process back to the commit.

## Database Schema
The Prisma base schema define the connection to the database.
`baseSchema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
- `generator client`: Instructs Prisma to generate the client for JavaScript.
- `datasource db`: Specifies the database provider and connection URL.

The merge model script (`mergeModels.js`) is used to merge multiple Prisma schema files into a single `schema.prisma` file. This is useful when working with multiple developers or when splitting the schema into smaller files for better organization.
```bash
npm run merge:models
```

## Contributing
Contributions are welcome! Please follow these steps:
- Fork the repository.
- Create a new branch: `git checkout -b feature/your-feature`.
- Commit your changes: `git commit -m 'Add some feature'`.
- Push to the branch: `git push origin feature/your-feature`.
- Submit a pull request.

## License
Distributed under the MIT License. See `LICENSE` for more information.

