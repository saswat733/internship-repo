# internship-repo
Here's a comprehensive `README.md` for your project, covering all essential aspects:

```markdown
# Basic Authentication System

This project implements a basic authentication system with user registration and login functionalities using Node.js, Express, and MySQL. JWT (JSON Web Token) is used for securing the endpoints.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration with hashed passwords
- User login with JWT authentication
- Secured endpoints using JWT middleware
- User profile retrieval

## Requirements
- Node.js
- MySQL

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/saswat733/internship-repo.git
    cd basic-auth-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the MySQL database. You can use the following SQL script to create the `users` table:
    ```sql
    CREATE DATABASE auth_system;

    USE auth_system;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
    ```

## Environment Variables
Create a `.env` file in the root of your project and add the following environment variables:
```env
PORT=3000
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=auth_system
JWT_SECRET=your_jwt_secret
```

## Usage
1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

### Register
- **URL**: `/api/register`
- **Method**: `POST`
- **Body**: 
  ```json
  {
      "username": "your_username",
      "email": "your_email",
      "password": "your_password"
  }
  ```
- **Success Response**:
  - **Code**: `201`
  - **Content**: `{ "message": "User registered successfully" }`

### Login
- **URL**: `/api/login`
- **Method**: `POST`
- **Body**: 
  ```json
  {
      "email": "your_email",
      "password": "your_password"
  }
  ```
- **Success Response**:
  - **Code**: `200`
  - **Content**: `{ "token": "jwt_token" }`

### Get Profile
- **URL**: `/api/profile`
- **Method**: `GET`
- **Headers**: 
  ```json
  {
      "Authorization": "Bearer jwt_token"
  }
  ```
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
        "user": {
            "id": 1,
            "username": "your_username",
            "email": "your_email"
        }
    }
    ```


## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any feature additions or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Replace `https://github.com/yourusername/basic-auth-system.git` with the actual URL of your repository. 

This `README.md` covers all necessary details to understand, install, configure, and use the project. Let me know if you need any additional information!
