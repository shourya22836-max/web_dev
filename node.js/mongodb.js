const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false}));

app.use((req, res, next) => {
    fs.appendFile(
        "log.txt",
    )
})