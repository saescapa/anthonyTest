const express = require("express");
const router = express.Router();

router.use("/tweets/:userId", async (req, res, next) => {
  const collection = req.db.collection("documents");
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    console.log("Found the following records");
    console.log(docs);
    res.send(docs);
  });
});

module.exports = router;
