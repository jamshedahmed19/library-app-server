const express = require("express");
const router = express.Router();
const booksRoute = require("./books");
const studentsRoute = require("./students");

router.use("/books", booksRoute);
router.use("/students", studentsRoute);

module.exports = router;