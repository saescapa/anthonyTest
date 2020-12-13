const express = require("express");
const MongoClient = require("mongodb").MongoClient;

// Routes
const apiRoute = require("./server/router");

const app = express();
const port = 3000;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "myproject";

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function (err) {
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use(
    "/api",
    (req, res, next) => {
      req.db = db;
      next();
    },
    apiRoute
  );

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
