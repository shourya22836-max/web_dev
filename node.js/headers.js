const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


// rest api 
app.get("/api/users", (req, res) => {
    res.setHeader("X-MyName", "Piyush Garg"); // Custum header
    // always add X to custum headers
    return res.json(users);
});

