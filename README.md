# Account-Registration-System

This project is an Account Registration System built using Node.js, EJS, Bootstrap, and Passport.js. It aims to provide a secure and user-friendly solution for user registration, authentication, and account management. By utilizing modern web technologies and best practices, the project ensures data security, user privacy, and a smooth user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- User-friendly account registration and login system.
- Password salting and hashing for enhanced security.
- Passport.js integration for authentication.
- EJS templates for dynamic views.
- Bootstrap for responsive and visually appealing UI.

## Technologies Used

- Node.js: A JavaScript runtime used for building server-side applications.
- EJS: Embedded JavaScript templates for dynamic HTML generation.
- Bootstrap: A popular front-end framework for responsive web design.
- Passport.js: An authentication middleware for Node.js applications.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git
```

2. Install project dependencies:

```bash

cd your-project
npm install
```

3. Set up your MongoDB database URL in config/database.js.

4. Run the application:

```
npm start
```

Access the application in your web browser at http://localhost:3000.


## Project Structure

- app.js: Main application entry point.
- config/: Configuration files including passport configuration and database connection.
- models/: Mongoose models for defining database schema.
- routes/: Express routes for handling different parts of the application.
- views/: EJS templates for rendering dynamic views.
- public/: Static files (stylesheets, scripts, images).

## License

This project is licensed under the MIT License.
