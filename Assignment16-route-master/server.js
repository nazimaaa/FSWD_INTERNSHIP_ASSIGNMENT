const express = require("express");
const app = express();

// Sample data
const books = [
    { id: 1, name: "Book A" },
    { id: 2, name: "Book B" }
];

const authors = [
    { id: 1, name: "Author X" },
    { id: 2, name: "Author Y" }
];

// Home
app.get("/", (req, res) => {
    res.send("Welcome to Nazima's Bookstore 📚");
});

// All books
app.get("/books", (req, res) => {
    res.json(books);
});

// All authors
app.get("/authors", (req, res) => {
    res.json(authors);
});

// Single book
app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    res.json(book || { message: "Book not found" });
});

// Single author
app.get("/authors/:id", (req, res) => {
    const author = authors.find(a => a.id == req.params.id);
    res.json(author || { message: "Author not found" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});