# Bookstore API

Express + MongoDB (Mongoose) API for Mugisha's bookstore in Kigali.

## Setup

```bash
npm install
cp .env.example .env   # edit MONGODB_URI if needed
npm start
```

Server runs on `http://localhost:3000` by default. Make sure MongoDB is running locally, or set `MONGODB_URI` to a remote connection string (e.g. MongoDB Atlas).

## Endpoints

- `POST /api/books` — add a new book. Body: `{ "title": "...", "author": "...", "price": 1000 }`
- `GET /api/books` — get all books
- `GET /api/books/:id` — get one book by ID
- `PUT /api/books/:id` — update a book by ID
- `DELETE /api/books/:id` — delete a book by ID

All `:id` routes return `404` if the book isn't found.

## Project structure

```
bookstore-api/
├── models/Book.js
├── routes/books.js
├── server.js
├── package.json
└── .env.example
```
