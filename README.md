## Live at- https://spyogasite.onrender.com/

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **API Endpoints:** Implementing endpoints for handling data related to yoga classes, instructors, and user inquiries.
- **Database Integration:** Connecting to a MySQL database to store and retrieve relevant information.
- **Express Middleware:** Utilizing middleware for routing, error handling, and other server-side functionalities.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web application framework for Node.js.
- **MySQL:** Relational database management system.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/spa-yoga-website.git
Navigate to the backend directory:

bash
Copy code
cd spa-yoga-website/backend
Install dependencies:

bash
Copy code
npm install
## Database Setup

### Structure of the database on phpAdmin
![image](https://github.com/shivanand1602/yoga_backend/assets/88983117/baebcd48-26d3-4efc-8e0f-e5da42a9d9cd)

1.Create a MySQL database for the project.

2.Update the database configuration in config/db.config.js with your MySQL credentials:

// config/db.config.js
module.exports = {
  HOST: "localhost",
  USER: "your_username",
  PASSWORD: "your_password",
  DB: "spa_yoga_db",
  PORT: 3306,
};
Run the SQL scripts in the db-scripts directory to set up the necessary tables.

### mySql is hosted on the CleverCloud and integrated with the fronted using nodejs and reactjs
![image](https://github.com/shivanand1602/yoga_backend/assets/88983117/d43440c1-8f41-4788-b011-cc7f86ea1b27)


bash
cd db-scripts
mysql -u your_username -p your_database_name < create_tables.sql
## Usage
Start the backend server:
npm start
The server will run at http://localhost:3001 by default.

## Contributing
If you would like to contribute to the backend development, feel free to open issues or submit pull requests. Your suggestions and improvements are highly welcome.
