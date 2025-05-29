
# 📚 Book Management REST API

A simple REST API to manage a list of books using **Node.js** and **Express.js**. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on an in-memory array of books.

---

## 🚀 Features

- View all books (`GET /books`)
- Add a new book (`POST /books`)
- Update an existing book (`PUT /books/:id`)
- Delete a book (`DELETE /books/:id`)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Postman (for testing)

---

## 🧾 Book Object Format

Each book is represented as a JSON object with the following structure:

```json
{
  "id": 1,
  "title": "Sample Book",
  "author": "Author Name"
}
```

---

## 📦 Installation & Running

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/guru924/book-api.git
   cd book-api
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Server:**
   ```bash
   node index.js
   ```

4. Server will start at:
   ```
   http://localhost:3000
   ```

---

## 📬 API Endpoints

### GET `/books`
- Returns all books.
- **Status:** 200 OK

### POST `/books`
- Adds a new book.
- **Body:**
  ```json
  {
    "id": 3,
    "title": "New Book",
    "author": "New Author"
  }
  ```
- **Status:** 201 Created

### PUT `/books/:id`
- Updates a book by ID.
- **Status:** 200 OK
- **Status if not found:** 404 Not Found

### DELETE `/books/:id`
- Deletes a book by ID.
- **Status:** 200 OK
- **Status if not found:** 404 Not Found

---

## 🧪 Testing the API

Use [Postman](https://www.postman.com/) or curl to test the endpoints locally:
```bash
curl http://localhost:3000/books
```

---

## ❓ Interview Prep Concepts

- What is REST?
- HTTP Methods (GET, POST, PUT, DELETE)
- Express Routing & Middleware
- JSON Parsing with `express.json()`
- Status Codes for APIs
- Error Handling in Express
- CORS and its role in APIs
- Request/Response objects
- Testing with Postman

---

## 📄 License

This project is open-source and free to use.
