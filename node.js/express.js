const http = require("http");
const express = require("express");

const app = express ();

app.get("/", (req, res) => {
    return res.send ("Hello From Home Page");
});

app.get("/about", (req, res) => {
    return res.send (` hi ${req.query.name}`);
}) ;

app.listen(8000, () => console.log("Server Started!"));

// ^ - Install all Recommended and Minor Fixes Automatically
// ~ - only minor changes are to be done
 