// User Schema
const User = {
    name: String,
    email: String,
    password: String
};

// Blog Post Schema
const Post = {
    title: String,
    content: String,
    authorId: String,
    createdAt: Date
};

// Comment Schema
const Comment = {
    postId: String,
    userId: String,
    text: String,
    createdAt: Date
};

console.log("Schemas created for User, Post, and Comment");