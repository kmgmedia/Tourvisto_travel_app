# Tourvisto Travel App API

Backend API for Tourvisto, a travel booking application built with Express, MongoDB, and JWT authentication.

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- bcrypt for password hashing

## Project Structure

```text
.
|-- config/
|   `-- db.js
|-- controllers/
|-- middleware/
|-- models/
|-- routes/
|-- index.js
|-- package.json
`-- vercel.json
```

## Requirements

- Node.js 18+
- MongoDB Atlas or a local MongoDB instance

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Example local MongoDB URI:

```env
MONGO_URI=mongodb://127.0.0.1:27017/tourvisto
```

Example MongoDB Atlas URI:

```env
MONGO_URI=<paste your MongoDB Atlas connection string here>
```

Atlas connection string notes:

- Get the full value from MongoDB Atlas: Connect -> Drivers.
- Do not commit real credentials or credential-shaped examples to the repository.
- The connection string should include your cluster host, database name, and query options.

## Installation

```bash
npm install
```

## Run Locally

Development mode:

```bash
npm run dev
```

Standard start:

```bash
npm start
```

The API runs on:

```text
http://localhost:5000
```

## Authentication

Protected routes require a JWT token in the `Authorization` header:

```text
Authorization: Bearer YOUR_TOKEN_HERE
```

You can get the token by registering or logging in through the auth endpoints.

## API Endpoints

### Auth

- `GET /api/auth/test`
- `POST /api/auth/register`
- `POST /api/auth/admin/signup`
- `POST /api/auth/login`

Register customer request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Login request body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Trips

- `POST /api/trips/create` - protected

Example request body:

```json
{
  "title": "Lagos City Escape",
  "description": "Weekend city experience",
  "destinations": ["Lagos"],
  "price": 250,
  "date": "2026-04-15T00:00:00.000Z",
  "duration": "3 days"
}
```

### Bookings

- `POST /api/bookings/book` - protected
- `GET /api/bookings/latest` - protected

Book trip request body:

```json
{
  "tripId": "TRIP_OBJECT_ID"
}
```

### Users

- `GET /api/users/latest-customers` - protected, admin only
- `GET /api/users/customers` - protected, admin only

## Postman Quick Test Flow

1. Start the server with `npm run dev`.
2. Call `GET /api/auth/test` to confirm the API is running.
3. Register a customer or admin.
4. Log in and copy the `token` field from the response.
5. Use that token as a Bearer token for protected routes.

## Notes

- Admin-only routes require a user whose role is `admin`.
- Passwords are hashed before storage.
- The current backend includes Google auth dependency setup, but the active routes in this codebase are email/password based.
