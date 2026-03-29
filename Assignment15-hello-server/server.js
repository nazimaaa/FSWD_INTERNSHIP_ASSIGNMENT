const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Welcome to Home Page");
    }
    else if (req.url === "/about") {
        res.end("This is About Page");
    }
    else if (req.url === "/contact") {
        res.end("This is Contact Page");
    }
    else {
        res.end("404 Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});