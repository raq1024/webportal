# WebPortal

This is a basic web portal built with Next.js that provides user authentication functionality, including registration and login. It uses Prisma as the ORM for database management and SQLite as the database.

## Features
- **User Registration**: Users can register with an email and password.
- **User Login**: Registered users can log in with their credentials.
- **Password Hashing**: Passwords are securely hashed using `bcrypt`.
- **JWT Authentication**: JSON Web Tokens are used for session management.

## File Structure
- **`/pages/api/auth/register.js`**: API route for user registration.
- **`/pages/api/auth/login.js`**: API route for user login.
- **`/pages/auth.js`**: Combined frontend page for user registration and login.
- **`/prisma/schema.prisma`**: Database schema for managing user data.

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser:
   ```
   http://localhost:3000/auth
   ```

## Deployment
To deploy the application, build it for production:
```bash
npm run build
npm start
```

## Technologies Used
- **Next.js**: Framework for building the web application.
- **Prisma**: ORM for database management.
- **SQLite**: Lightweight database for development.
- **bcrypt**: For secure password hashing.
- **jsonwebtoken**: For token-based authentication.