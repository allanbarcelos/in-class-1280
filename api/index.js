const express = require("express");
const mysql = require("mysql2/promise");
// promise --->  external resource you will use promise

const api = express();
const port = 3000;


const dbConfig = {
    host: "localhost",
    user: "in-class-user",
    password: "654321",
    database: "in-class-db",
    port: "3310"
};


api.use(express.json()); // middleware

// first endpoint
/// HTTP VERBS: POST (CREATE), GET (TO GET), PUT (UPDATE), PATCH(PARTIAL UPDATE), DELETE,  OPTIONS
api.get("/", (req, res) => {
    res.status(200).json({message: "API is running"});
});


// Runing
api.listen(port, () => {
    console.log(`The server is runing, PORT ${port}`);
});