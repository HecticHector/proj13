const express = require("express");
const { getAllNotes } = require("./../controllers/noteController");

const router = express.Router();

router.route("/").get(getAllNotes);

module.exports = router;

