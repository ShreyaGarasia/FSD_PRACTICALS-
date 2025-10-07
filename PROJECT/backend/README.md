# FSD Backend (Auth API)

Node.js + Express + MongoDB backend for Sign Up / Sign In.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` from `.env.example` and update values:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/fsd_project
   JWT_SECRET=replace_with_a_long_random_string
   ```
3. Start the server (dev):
   ```bash
   npm run dev
   ```
   Or production:
   ```bash
   npm start
   ```

## MongoDB Compass
- Start your local MongoDB service.
- Open MongoDB Compass and connect via:
  ```
  mongodb://127.0.0.1:27017
  ```
- The default DB name in this example is `fsd_project` (from MONGODB_URI).

## API
Base URL: `http://localhost:5000`

- POST `/api/auth/signup`
  - Body: `{ "name": "John", "email": "john@example.com", "password": "secret123" }`
  - Response: `{ token, user: { _id, name, email } }`

- POST `/api/auth/signin`
  - Body: `{ "email": "john@example.com", "password": "secret123" }`
  - Response: `{ token, user: { _id, name, email } }`

- GET `/health`
  - Response: `{ status: "ok" }`

## Folder Structure
```
backend/
  src/
    config/db.js
    models/User.js
    routes/auth.routes.js
    controllers/auth.controller.js
    middleware/auth.js
    validators/auth.validators.js
    server.js
```

## Notes
- Passwords are hashed with bcrypt.
- JWT tokens are signed with `JWT_SECRET` and expire in 7 days.
- CORS is enabled for all origins by default; lock it down if needed.
